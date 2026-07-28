# Check all images
$ErrorActionPreference = "Continue"
$baseDir = "E:\BDownload\navigation_site"
$imagesDir = Join-Path $baseDir "images"

$categories = @('assistant', 'audio', 'chat', 'coding', 'creative', 'design', 'drawing', 'image', 'learning', 'marketing', 'office', 'toolbox', 'translation', 'video', 'writing')

# Find all image references in HTML files
$allImages = @{}
$missingFiles = @()

foreach ($cat in $categories) {
    $dir = Join-Path $baseDir $cat
    if (-not (Test-Path $dir)) { continue }
    
    $files = Get-ChildItem -Path $dir -Filter "*.html"
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $matches = [regex]::Matches($content, 'src="\.\./images/([^"]+)"')
        
        foreach ($match in $matches) {
            $fileName = $match.Groups[1].Value
            if (-not $allImages.ContainsKey($fileName)) {
                $allImages[$fileName] = @()
            }
            $allImages[$fileName] += $file.Name
        }
    }
}

Write-Host "=== Image Check Report ==="
Write-Host "Total unique images referenced: $($allImages.Count)"

# Check which images are missing
$existingCount = 0
$missingCount = 0
$emptyCount = 0

foreach ($fileName in $allImages.Keys) {
    $path = Join-Path $imagesDir $fileName
    
    if (-not (Test-Path $path)) {
        $missingCount++
        $missingFiles += [PSCustomObject]@{
            FileName = $fileName
            UsedIn = ($allImages[$fileName] -join ", ")
        }
    } else {
        $size = (Get-Item $path).Length
        if ($size -lt 50) {
            $emptyCount++
            $missingFiles += [PSCustomObject]@{
                FileName = "$fileName (EMPTY - $size bytes)"
                UsedIn = ($allImages[$fileName] -join ", ")
            }
        } else {
            $existingCount++
        }
    }
}

Write-Host "Existing images: $existingCount"
Write-Host "Missing images: $($missingCount + $emptyCount)"
Write-Host "Empty/corrupted: $emptyCount"

if ($missingFiles.Count -gt 0) {
    Write-Host "`n=== MISSING IMAGES ==="
    Write-Host "Total missing: $($missingFiles.Count)"
    
    # Save report
    $reportPath = Join-Path $baseDir "missing_images_report.txt"
    $report = "Missing Images Report`n"
    $report += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')`n"
    $report += "Total missing: $($missingFiles.Count)`n`n"
    
    for ($i = 0; $i -lt [Math]::Min($missingFiles.Count, 50); $i++) {
        $item = $missingFiles[$i]
        $report += "$($i+1). $($item.FileName)`n   Used in: $($item.UsedIn)`n`n"
        Write-Host "$($i+1). $($item.FileName) -> used in: $($item.UsedIn)"
    }
    
    if ($missingFiles.Count -gt 50) {
        Write-Host "... and $($missingFiles.Count - 50) more missing files"
        $report += "... and $($missingFiles.Count - 50) more missing files`n"
    }
    
    $report += "`nNote: Check missing_images_report.txt for full list"
    Set-Content -Path $reportPath -Value $report
    Write-Host "`nFull report saved to: $reportPath"
} else {
    Write-Host "`n✅ All images are properly downloaded!"
}
