param([string]$In, [string]$Prefix, [int]$Slice = 1100)
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($In)
$n = [Math]::Ceiling($img.Height / $Slice)
for ($i = 0; $i -lt $n; $i++) {
  $h = [Math]::Min($Slice, $img.Height - $i * $Slice)
  $bmp = New-Object System.Drawing.Bitmap $img.Width, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $img.Width, $h), (New-Object System.Drawing.Rectangle 0, ($i * $Slice), $img.Width, $h), [System.Drawing.GraphicsUnit]::Pixel)
  $bmp.Save("$Prefix-$i.png", [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}
$img.Dispose()
Write-Output "$n slices"
