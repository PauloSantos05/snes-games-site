@echo off
echo ----------------------------------------
echo Iniciando SNES Games Site...
echo ----------------------------------------

:: Verifica se Node está instalado
where node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Node.js não está instalado ou não está no PATH.
    echo Baixe em: https://nodejs.org
    pause
    exit /b
)

:: Instala dependências
echo Instalando dependências do projeto...
npm install

:: Inicia o servidor
echo.
echo Iniciando o servidor em http://localhost:3000
echo ----------------------------------------
node app.js

pause
