# Country-Data-Dashboard
Country Data Dashboard 

Here's a step-by-step approach to handle this assignment, ensuring you meet all high-level requirements and evaluation criteria:

Step 1: Project Structure
Create a folder structure to keep backend and frontend projects organized:


Copy code
country-data-dashboard/
├── backend/
├── frontend/
└── README.md
Step 2: Backend Setup
1. Initialize Backend Project
Create a Node.js project with TypeScript:
bash
Copy code
mkdir backend
cd backend
npm init -y
npm install express axios cors dotenv
npm install --save-dev typescript @types/node @types/express nodemon ts-node
Set up tsconfig.json:
json
Copy code
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
2. Create Backend Endpoints
Use axios to fetch data from the REST Countries API.
Define endpoints:
GET /countries: Fetch all countries.
GET /countries/:code: Fetch details by country code.
GET /countries/region/:region: Filter by region.
GET /countries/search: Search by name, capital, timezone, etc.
Implement caching using an in-memory Map.
3. Add Middleware for Error Handling
Use middleware to handle errors like 404 or 500.
4. Run Backend Server
Use nodemon for live-reloading during development.
bash
Copy code
nodemon src/server.ts
Step 3: Frontend Setup
1. Initialize Frontend Project
Create a Next.js app:
bash
Copy code
mkdir frontend
cd frontend
npx create-next-app@latest --typescript
npm install axios react-query tailwindcss
Configure Tailwind CSS:
bash
Copy code
npx tailwindcss init
Add the Tailwind setup to globals.css.
2. Build Pages and Components
Pages:
Home Page:
Display country cards with lazy loading (React Query + Infinite Scroll).
Provide filters (region, timezone) and a search bar.
Country Details Page:
Show detailed country info (population, currency, languages, flag, etc.).
Components:
Card Component:
Display the country name, flag, region, and current time (using JavaScript's Intl.DateTimeFormat).
Search & Filter:
Controlled inputs for dynamic filtering.
3. State Management
Use React Query for API calls and caching.
4. Handle Loading & Error States
Add skeleton loaders and error messages.
Step 4: Optional Enhancements
Compare Two Countries:
Add a dropdown to select two countries and display side-by-side comparisons.
Visualization:
Use libraries like chart.js or recharts to visualize data like population or area.
Step 5: Deployment
Deploy both backend and frontend:
Use Vercel for frontend.
Use Render or Heroku for backend.
Set up environment variables for API URLs.
Step 6: Documentation
1. README.md
Include:

Project overview.
Setup instructions for backend and frontend.
API documentation.
2. Git Commit Messages
Use meaningful commit messages:
feat: add country search API
fix: handle API errors for missing country code
style: improve card component responsiveness
3. PPT Slides
Prepare 2-3 slides covering:

Features implemented.
Tech stack used.
Challenges faced and how they were resolved.
Step 7: Submission
Push your code to GitHub.
Include a GitHub Actions workflow for CI/CD (if time permits).
