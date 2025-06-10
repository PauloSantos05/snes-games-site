@echo off
REM Caminho para o MongoDB (ajuste se necessário)
SET MONGO_PATH="C:\Program Files\MongoDB\Server\8.0\bin"

REM Iniciar o servidor MongoDB
echo Iniciando o MongoDB...
%MONGO_PATH%\mongod.exe

pause
