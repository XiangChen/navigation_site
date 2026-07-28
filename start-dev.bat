@echo off
chcp 65001 >nul
title AI NEXUS - Local Development Server

echo ============================================
echo   AI NEXUS Development Server
echo ============================================
echo.
echo Starting Vite dev server...
echo.

cd /d %~dp0
start "AI NEXUS - Dev Server" cmd /k "npm run dev"

echo.
echo ============================================
echo   Server started!
echo ============================================
echo.
echo   首页 (Original):     http://localhost:5180
echo   Vue 应用 (App):      http://localhost:5180/app.html
echo   工具详情页示例:      http://localhost:5180/app.html#/writing/mita
echo.
echo   Press any key to close this window...
echo ============================================
echo.

pause >nul
