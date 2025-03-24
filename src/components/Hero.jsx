import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero({ 
  title = "Healthy Eating Made Simple",
  subtitle = "Discover delicious recipes made with wholesome, package-free ingredients",
  showButtons = true,
  backgroundImage = "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  height = "h-[80vh]",
  overlayOpacity = "bg-black/40"
}) {
  return (
    <div 
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/recipes" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Explore Recipes
              </Link>
              <Link 
                to="/products" 
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Browse Products
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero; 