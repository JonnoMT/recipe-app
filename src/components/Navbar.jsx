import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-amber-600 font-bold text-2xl">Scoop</span>
            <span className="text-gray-800 font-bold text-2xl">Wholefoods</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-amber-600 font-medium transition-colors ${isActive ? 'text-amber-600' : ''}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-amber-600 font-medium transition-colors ${isActive ? 'text-amber-600' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-amber-600 font-medium transition-colors ${isActive ? 'text-amber-600' : ''}`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/recipes" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-amber-600 font-medium transition-colors ${isActive ? 'text-amber-600' : ''}`
              }
            >
              Recipes
            </NavLink>
            <NavLink 
              to="/stores" 
              className={({ isActive }) => 
                `text-gray-700 hover:text-amber-600 font-medium transition-colors ${isActive ? 'text-amber-600' : ''}`
              }
            >
              Stores
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-amber-600 transition-colors p-2"
              >
                <FiSearch size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-4 w-72">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input 
                      type="text" 
                      placeholder="Search products & recipes..." 
                      className="flex-grow px-4 py-2 focus:outline-none"
                    />
                    <button className="bg-amber-500 text-white p-2 hover:bg-amber-600 transition-colors">
                      <FiSearch size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Account */}
            <button className="text-gray-700 hover:text-amber-600 transition-colors p-2">
              <FiUser size={20} />
            </button>
            
            {/* Cart */}
            <div className="relative">
              <button className="text-gray-700 hover:text-amber-600 transition-colors p-2">
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600 transition-colors p-2">
              <FiShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors p-2"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors ${isActive ? 'text-amber-600' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors ${isActive ? 'text-amber-600' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors ${isActive ? 'text-amber-600' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/recipes" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors ${isActive ? 'text-amber-600' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </NavLink>
              <NavLink 
                to="/stores" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors ${isActive ? 'text-amber-600' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Stores
              </NavLink>

              {/* Mobile Search */}
              <div className="py-2">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input 
                    type="text" 
                    placeholder="Search products & recipes..." 
                    className="flex-grow px-4 py-2 focus:outline-none"
                  />
                  <button className="bg-amber-500 text-white p-2 hover:bg-amber-600 transition-colors">
                    <FiSearch size={18} />
                  </button>
                </div>
              </div>

              {/* Mobile Account */}
              <div className="flex items-center py-2">
                <FiUser size={20} className="text-gray-700 mr-3" />
                <span className="text-gray-700 font-medium">My Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 