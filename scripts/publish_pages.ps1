[CmdletBinding()]
param(
    [string]$Message = "Actualiza Web Zumac",
    [switch]$SkipBuild,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$buildDirectory = Join-Path $projectRoot "dist"
$repositoryUrl = "https://github.com/02051994/web_zumac.git"
$temporaryDirectory = $null
$temporaryDirectoryIsSafe = $false
$locationDepth = 0

function Invoke-NativeCommand {
    param(
        [Parameter(Mandatory = $true)] [string]$Command,
        [Parameter(ValueFromRemainingArguments = $true)] [string[]]$Arguments
    )

    & $Command @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "El comando '$Command $($Arguments -join ' ')' terminó con código $LASTEXITCODE."
    }
}

function Assert-WebBuild {
    foreach ($requiredFile in @("index.html", ".nojekyll", "favicon.png")) {
        $requiredPath = Join-Path $buildDirectory $requiredFile
        if (-not (Test-Path -LiteralPath $requiredPath -PathType Leaf)) {
            throw "La compilación no generó el archivo requerido: $requiredPath"
        }
    }

    $assetsDirectory = Join-Path $buildDirectory "assets"
    if (-not (Test-Path -LiteralPath $assetsDirectory -PathType Container)) {
        throw "La compilación no generó la carpeta pública de recursos."
    }
}

Push-Location -LiteralPath $projectRoot
$locationDepth++

try {
    if (-not $SkipBuild) {
        Write-Host "Compilando el sitio de Zumac..."
        Invoke-NativeCommand npm run build
    }

    Assert-WebBuild

    if ($DryRun) {
        Write-Host "Validación correcta. No se publicaron cambios."
        return
    }

    $systemTempDirectory = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
    $temporaryDirectory = [System.IO.Path]::GetFullPath(
        (Join-Path $systemTempDirectory ("web-zumac-deploy-" + [System.Guid]::NewGuid().ToString("N")))
    )
    $safeTempPrefix = $systemTempDirectory.TrimEnd([System.IO.Path]::DirectorySeparatorChar) + [System.IO.Path]::DirectorySeparatorChar

    if (-not $temporaryDirectory.StartsWith($safeTempPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "La carpeta temporal quedó fuera del directorio temporal permitido."
    }

    New-Item -ItemType Directory -Path $temporaryDirectory | Out-Null
    $temporaryDirectoryIsSafe = $true

    Write-Host "Preparando únicamente los archivos públicos..."
    & git ls-remote --exit-code --heads $repositoryUrl refs/heads/main *> $null
    $mainBranchExists = $LASTEXITCODE -eq 0

    if ($mainBranchExists) {
        Invoke-NativeCommand git clone --depth 1 --branch main $repositoryUrl $temporaryDirectory
        $publishedEntries = Get-ChildItem -LiteralPath $temporaryDirectory -Force |
            Where-Object { $_.Name -ne ".git" }
        foreach ($publishedEntry in $publishedEntries) {
            Remove-Item -LiteralPath $publishedEntry.FullName -Recurse -Force
        }
    } else {
        Push-Location -LiteralPath $temporaryDirectory
        $locationDepth++
        Invoke-NativeCommand git init --initial-branch main
        Invoke-NativeCommand git remote add origin $repositoryUrl
        Pop-Location
        $locationDepth--
    }

    foreach ($buildEntry in (Get-ChildItem -LiteralPath $buildDirectory -Force)) {
        Copy-Item -LiteralPath $buildEntry.FullName -Destination $temporaryDirectory -Recurse -Force
    }

    Push-Location -LiteralPath $temporaryDirectory
    $locationDepth++

    Invoke-NativeCommand git config user.name "02051994"
    Invoke-NativeCommand git config user.email "118220540+02051994@users.noreply.github.com"
    Invoke-NativeCommand -Command git -Arguments @("add", "-A")

    & git diff --cached --quiet
    $diffExitCode = $LASTEXITCODE
    if ($diffExitCode -eq 0) {
        Write-Host "El contenido público ya está actualizado."
    } elseif ($diffExitCode -eq 1) {
        Invoke-NativeCommand git commit -m $Message
        Invoke-NativeCommand git push origin main
        Write-Host "Build publicado en: https://github.com/02051994/web_zumac"
    } else {
        throw "No se pudo comprobar el contenido preparado para publicar."
    }
} finally {
    while ($locationDepth -gt 0) {
        Pop-Location
        $locationDepth--
    }

    if ($temporaryDirectoryIsSafe -and $null -ne $temporaryDirectory -and (Test-Path -LiteralPath $temporaryDirectory)) {
        Remove-Item -LiteralPath $temporaryDirectory -Recurse -Force
    }
}
