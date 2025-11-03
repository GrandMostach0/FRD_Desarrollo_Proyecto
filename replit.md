# Vue 3 + Vite Project

## Overview
This is a Vue 3 single-page application built with Vite. It was imported from GitHub and configured to run in the Replit environment.

## Project Architecture
- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Build Tool**: Vite 7.x
- **Structure**:
  - `/src` - Application source code
  - `/src/components` - Vue components
  - `/src/assets` - Static assets (images, etc.)
  - `/public` - Public static files
  - `index.html` - Entry HTML file

## Recent Changes (November 3, 2025)
- Configured Vite to run on port 5000 with host 0.0.0.0 for Replit compatibility
- Set up Hot Module Replacement (HMR) to work with Replit's WebSocket proxy
- Installed all npm dependencies
- Created workflow for running the development server
- Verified the application runs successfully in the Replit environment

## Development
- **Run Command**: `npm run dev`
- **Port**: 5000
- **Build Command**: `npm run build`
- **Preview**: `npm run preview`

## Dependencies
- vue: ^3.5.22
- vite: ^7.1.7
- @vitejs/plugin-vue: ^6.0.1

## Notes
- The Vite configuration has been customized for Replit's proxy environment
- HMR (Hot Module Replacement) is fully functional with WebSocket support
- The server binds to 0.0.0.0:5000 to work with Replit's web preview
