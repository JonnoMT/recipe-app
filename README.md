# Scoop Wholefoods Recipe App

A modern web application for Scoop Wholefoods, featuring product listings, recipes, store locations, and company information.

## Features

- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Multiple Pages**:
  - Homepage with featured content
  - About and Our Story pages
  - Products page with filtering and search
  - Recipes page with filtering, search, and modal details
  - Store locations with interactive map links

## Tech Stack

- **React**: Frontend library for building the user interface
- **React Router**: For handling navigation and routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **React Icons**: Popular icon library
- **Vite**: Build tool for fast development and production builds

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/scoop-wholefoods-app.git
   cd scoop-wholefoods-app
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed.

## Deployment

This application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with a single click

## Project Structure

```
recipe-app/
├── public/            # Public assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── RecipeList.jsx
│   ├── pages/         # Page components
│   │   ├── AboutPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── OurStoryPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── RecipesPage.jsx
│   │   └── StoresPage.jsx
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Images from Unsplash
- Icons from React Icons
