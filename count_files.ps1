# Count all HTML files and check for missing images
$ErrorActionPreference = "Continue"
$baseDir = "E:\BDownload\navigation_site"
$imagesDir = Join-Path $baseDir "images"

$categories = @('assistant', 'audio', 'chat', 'coding', 'creative', 'design', 'drawing', 'image', 'learning', 'marketing', 'office', 'toolbox', 'translation', 'video', 'writing')

$totalHtmlFiles = 0
$filesWithoutImages = @()
$filesWithRemoteImages = @()
$allImages = @{}

foreach ($cat in $categories) {
    $dir = Join-Path $baseDir $cat
    if (-not (Test-Path $dir)) { continue }
    
    $files = Get-ChildItem -Path $dir -Filter "*.html"
    $totalHtmlFiles += $files.Count
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $imgMatches = [regex]::Matches($content, 'src="([^"]*logo[^"]*)"', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        
        if ($imgMatches.Count -eq 0) {
            $filesWithoutImages += "$cat/$($file.Name)"
        } else {
            foreach ($match in $imgMatches) {
                $url = $match.Groups[1].Value
                if ($url -match 'image\.uisdc\.com') {
                    $filesWithRemoteImages += "$cat/$($file.Name) -> $url"
                }
                if ($url -match '\.\./images/([^"]+)') {
                    $fileName = $Matches[1]
                    if (-not $allImages.ContainsKey($fileName)) {
                        $allImages[$fileName] = @()
                    }
                    $allImages[$fileName] += "$cat/$($file.Name)"
                }
            }
        }
    }
}

Write-Host "=== File Statistics ==="
Write-Host "Total HTML files: $totalHtmlFiles"
Write-Host "Files with logo images: $($totalHtmlFiles - $filesWithoutImages.Count)"
Write-Host "Files WITHOUT logo images: $($filesWithoutImages.Count)"

if ($filesWithoutImages.Count -gt 0) {
    Write-Host "`n=== Files WITHOUT Logo Images ==="
    for ($i = 0; $i -lt [Math]::Min($filesWithoutImages.Count, 20); $i++) {
        Write-Host "$($i+1). $($filesWithoutImages[$i])"
    }
    if ($filesWithoutImages.Count -gt 20) {
        Write-Host "... and $($filesWithoutImages.Count - 20) more"
    }
}

if ($filesWithRemoteImages.Count -gt 0) {
    Write-Host "`n=== Files Still Using REMOTE Images ==="
    Write-Host "Total: $($filesWithRemoteImages.Count)"
    for ($i = 0; $i -lt [Math]::Min($filesWithRemoteImages.Count, 10); $i++) {
        Write-Host "$($i+1). $($filesWithRemoteImages[$i])"
    }
}

# Check all local images
Write-Host "`n=== Image File Check ==="
Write-Host "Unique local images referenced: $($allImages.Count)"

$existing = 0
$missing = @()

foreach ($fileName in $allImages.Keys) {
    $path = Join-Path $imagesDir $fileName
    if (Test-Path $path) {
        $size = (Get-Item $path).Length
        if ($size -gt 50) {
            $existing++
        } else {
            $missing += "$fileName (empty/corrupted)"
        }
    } else {
        $missing += $fileName
    }
}

Write-Host "Local images found on disk: $existing"
Write-Host "Missing/corrupted images: $($missing.Count)"

if ($missing.Count -gt 0) {
    Write-Host "`nMissing images list:"
    for ($i = 0; $i -lt [Math]::Min($missing.Count, 20); $i++) {
        Write-Host "$($i+1). $($missing[$i])"
    }
}
