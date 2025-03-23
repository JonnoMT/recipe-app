import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-amber-500">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6 mb-8">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20"
      >
        <div className="flex flex-wrap justify-center gap-4 text-amber-600 max-w-xl">
          <Link to="/recipes" className="hover:underline">Recipes</Link>
          <span className="text-gray-300">•</span>
          <Link to="/products" className="hover:underline">Products</Link>
          <span className="text-gray-300">•</span>
          <Link to="/about" className="hover:underline">About Us</Link>
          <span className="text-gray-300">•</span>
          <Link to="/stores" className="hover:underline">Our Stores</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage; 