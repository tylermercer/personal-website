$markdownFiles = Get-ChildItem -Path ./ -Filter "*.md" -Recurse
$markdownFiles += Get-ChildItem -Path ./ -Filter "*.mdx" -Recurse

$filesWithWordCount = @()
$totalWords = 0

foreach ($file in $markdownFiles) {
    if (-not ($file.Name -like "-*")) {
        $content = Get-Content $file.FullName -Raw
        $wordCount = ($content -split '\s+|\n|\r' | Where { $_ -match '\w' }).Count
        $totalWords += $wordCount
        
        $fileInfo = New-Object PSObject -Property @{
            'File' = $file.FullName
            'WordCount' = $wordCount
        }
        
        $filesWithWordCount += $fileInfo
    }
}

$filesWithWordCount = $filesWithWordCount | Sort-Object -Property WordCount -Descending

$filesWithWordCount | Format-Table -AutoSize

Write-Host "Total words in all .md and .mdx files: $totalWords"
Write-Host "Number of files $($filesWithWordCount.count)"