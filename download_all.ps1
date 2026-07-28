# Batch download images and update HTML files
$ErrorActionPreference = "Continue"
$baseDir = "E:\BDownload\navigation_site"
$imagesDir = Join-Path $baseDir "images"

$categories = @('assistant', 'audio', 'chat', 'coding', 'creative', 'design', 'drawing', 'image', 'learning', 'marketing', 'office', 'toolbox', 'translation', 'video', 'writing')

# Get all unique image URLs that still use remote paths
$allImages = @{}

foreach ($cat in $categories) {
    $dir = Join-Path $baseDir $cat
    if (-not (Test-Path $dir)) { continue }
    
    $files = Get-ChildItem -Path $dir -Filter "*.html"
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $matches = [regex]::Matches($content, 'src="(https://image\.uisdc\.com/wp-content/uploads/[^"]+)"')
        
        foreach ($match in $matches) {
            $url = $match.Groups[1].Value
            $fileName = [System.IO.Path]::GetFileName([System.Uri]::new($url).AbsolutePath)
            if (-not $allImages.ContainsKey($fileName)) {
                $allImages[$fileName] = $url
            }
        }
    }
}

Write-Host "Found $($allImages.Count) unique images to check"

# Download missing images
$success = 0
$failed = 0
$skipped = 0

foreach ($entry in $allImages.GetEnumerator()) {
    $fileName = $entry.Key
    $url = $entry.Value
    $destPath = Join-Path $imagesDir $fileName
    
    if ((Test-Path $destPath) -and (Get-Item $destPath).Length -gt 100) {
        $skipped++
        continue
    }
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $destPath -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -Headers @{Referer="https://www.uisdc.com/"} -TimeoutSec 30
        $success++
        if ($success % 100 -eq 0) {
            Write-Host "Downloaded: $success | Failed: $failed | Skipped: $skipped"
        }
    } catch {
        $failed++
        if ($failed -le 5) {
            Write-Host "Failed: $fileName - $_"
        }
        if ((Test-Path $destPath) -and (Get-Item $destPath).Length -lt 100) {
            Remove-Item $destPath -ErrorAction SilentlyContinue
        }
    }
}

Write-Host "`nDownload complete!"
Write-Host "Success: $success"
Write-Host "Failed: $failed"
Write-Host "Skipped: $skipped"

# Update HTML files
Write-Host "`nUpdating HTML files..."
$htmlCount = 0

foreach ($cat in $categories) {
    $dir = Join-Path $baseDir $cat
    if (-not (Test-Path $dir)) { continue }
    
    $files = Get-ChildItem -Path $dir -Filter "*.html"
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        
        # Replace all remote image URLs with local paths
        $content = [regex]::Replace($content, 'src="(https://image\.uisdc\.com/wp-content/uploads/[^"]+)"', {
            param($match)
            $url = $match.Groups[1].Value
            $fileName = [System.IO.Path]::GetFileName([System.Uri]::new($url).AbsolutePath)
            return "src=`"../images/$fileName`""
        })
        
        Set-Content $file.FullName -Value $content -NoNewline
        $htmlCount++
    }
}

Write-Host "Updated $htmlCount HTML files"
Write-Host "`n✅ Done! All images downloaded and HTML files updated."
