import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Scoop Wholefoods</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for high-quality, organic wholefoods and eco-friendly products.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://pinterest.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaPinterest size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Our Stores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Wholesome Street</li>
              <li>Sydney, NSW 2000</li>
              <li>Australia</li>
              <li className="pt-2">
                <a href="tel:+61234567890" className="hover:text-amber-400 transition-colors">
                  +61 2 3456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@scoopwholefoods.com" className="hover:text-amber-400 transition-colors">
                  info@scoopwholefoods.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for recipes, product updates, and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scoop Wholefoods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 