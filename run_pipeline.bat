@echo off
echo ===================================================
echo   Joe's Tech Solutions - AI Content Pipeline
echo ===================================================
echo.

cd scripts/content-pipeline

if not exist "venv" (
    echo [INFO] Creating Python virtual environment...
    python -m venv venv
    call venv\Scripts\activate
    echo [INFO] Installing dependencies...
    pip install -r requirements.txt
) else (
    call venv\Scripts\activate
)

echo.
echo [INFO] Pipeline ready.
echo.

:menu
echo Select an option:
echo 1. Run FULL Pipeline (Ingest -^> Transform -^> Draft)
echo 2. Run Ingest Only
echo 3. Run Transform Only
echo 4. Run Draft Only
echo 5. Run Publish Only (Approved Docs -^> MDX)
echo 6. Check Status
echo 7. Exit
echo.

set /p choice="Enter choice (1-7): "

if "%choice%"=="1" goto run_all
if "%choice%"=="2" goto run_ingest
if "%choice%"=="3" goto run_transform
if "%choice%"=="4" goto run_draft
if "%choice%"=="5" goto run_publish
if "%choice%"=="6" goto check_status
if "%choice%"=="7" goto end

:run_all
python main.py all
pause
goto menu

:run_ingest
python main.py ingest
pause
goto menu

:run_transform
python main.py transform
pause
goto menu

:run_draft
python main.py draft
pause
goto menu

:run_publish
echo.
echo Publishing approved Google Docs to MDX...
python main.py publish
pause
goto menu

:check_status
python main.py status
pause
goto menu

:end
echo Bye!
cd ../..
