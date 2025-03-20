# Delicious Discoveries - Recipe App

A beautiful React application for exploring delicious recipes, built with Vite and Tailwind CSS.

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd recipe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:5173/`

## Project Structure

```
recipe-app/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

## Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.

3. Click "New Project" and import your GitHub repository.

4. Configure your project settings if needed (Vite should be automatically detected).

5. Click "Deploy" and wait for the build to complete.

## Features

- Responsive design for all devices
- Beautiful UI with Tailwind CSS
- Recipe cards with images and details
- Welcoming hero section

## License

MIT # test-site
