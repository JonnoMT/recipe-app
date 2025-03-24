import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurStoryPage from './pages/OurStoryPage';
import ProductsPage from './pages/ProductsPage';
import RecipesPage from './pages/RecipesPage';
import StoresPage from './pages/StoresPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App; 