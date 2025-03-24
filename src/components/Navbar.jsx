import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiSearch } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-amber-600' : 'text-amber-500'}`}>
              Scoop
            </span>
            <span className={`ml-1 text-2xl font-light ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Wholefoods
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/recipes" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              Recipes
            </NavLink>
            <NavLink 
              to="/stores" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  scrolled 
                    ? (isActive ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600') 
                    : (isActive ? 'text-amber-400' : 'text-white hover:text-amber-400')
                }`
              }
            >
              Stores
            </NavLink>
          </div>
          
          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white hover:text-amber-400 hover:bg-white/10'
              }`}
            >
              <FiSearch size={20} />
            </button>
            <div className="relative">
              <Link 
                to="/cart" 
                className={`p-2 rounded-full transition-colors ${
                  scrolled 
                    ? 'text-gray-600 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-400 hover:bg-white/10'
                }`}
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <div className="relative">
              <Link 
                to="/cart" 
                className={`p-2 rounded-full transition-colors ${
                  scrolled 
                    ? 'text-gray-600 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-400 hover:bg-white/10'
                }`}
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </Link>
            </div>
            <button
              className={`hamburger-button p-2 rounded-md transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`mobile-menu md:hidden bg-white absolute w-full shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-full relative">
              <input 
                type="text" 
                placeholder="Search products & recipes..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <div className="flex flex-col">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink 
              to="/recipes" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Recipes
            </NavLink>
            <NavLink 
              to="/stores" 
              className={({ isActive }) => 
                `py-3 px-4 text-base font-medium ${
                  isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-600'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Stores
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 