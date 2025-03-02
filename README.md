# Strapi with React, TypeScript, and MUI5

This project integrates a Strapi backend with a React frontend using TypeScript and MUI5. The frontend uses `pnpm` as the package manager, while the Strapi backend uses `npm`. The project uses `Vite` as the bundler and `Vitest` for testing.

## Project Structure

The project consists of two main parts:

1. **Strapi (Backend)**
2. **Frontend (React)**

The root folder contains two subfolders: `strapi/` and `frontend/`.

### Frontend

The frontend part of the project is built with React, TypeScript, and MUI5. Below are the available scripts:

```json
"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test:unit": "vitest",
    "test:coverage": "vitest run --coverage"
}
```

### Strapi

The Strapi part of the project handles the backend functionalities and includes the Strapi admin panel. Below are the available scripts:

```json
"scripts": {
    "build": "strapi build",
    "deploy": "strapi deploy",
    "develop": "strapi develop",
    "start": "strapi start",
    "strapi": "strapi"
}
```

## Getting Started

To get started with the project, follow these steps:

1. **Install dependencies**:

   - For the frontend:
     ```sh
     cd frontend
     pnpm install
     ```
   - For the backend:
     ```sh
     cd strapi
     npm install
     ```

2. **Run the frontend**:

   ```sh
   cd frontend
   pnpm run dev
   ```

3. **Run the backend**:
   ```sh
   cd strapi
   npm run develop
   ```
