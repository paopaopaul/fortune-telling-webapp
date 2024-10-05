# Fortune-Telling App

This is a simple fortune-telling app where users can draw lots like in a temple and get answers based on traditional methods.

## Deployed App

- [Frontend on Vercel](https://your-app-name.vercel.app)
- [Backend on Render](https://your-backend-app.onrender.com)

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fortune-telling-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd fortune-telling-app
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Run the backend:
   ```bash
   npx ts-node index.ts
   ```
5. Run the frontend:
   ```bash
   npm run dev
   ```

## Backend API

The backend provides a simple /api/draw-lot route that randomly returns a fortune based on traditional methods.

## Architecture

- Frontend: React-based with a Draw a Lot component to fetch fortune data.
- Backend: Fastify-based backend API that returns a random fortune lot.
