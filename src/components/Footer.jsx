import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Scoop Wholefoods</h3>
            <p className="mb-4 text-gray-300">
              Bringing you the finest organic and sustainably sourced wholefoods, package-free.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaPinterest size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-amber-400 transition-colors">Recipes</Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-300 hover:text-amber-400 transition-colors">Our Stores</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2 text-gray-300">123 Organic Way,</p>
              <p className="mb-4 text-gray-300">Sydney, NSW 2000</p>
              <p className="mb-2">
                <a href="tel:+61234567890" className="text-gray-300 hover:text-amber-400 transition-colors">+61 2 3456 7890</a>
              </p>
              <p>
                <a href="mailto:hello@scoopwholefoods.com" className="text-gray-300 hover:text-amber-400 transition-colors">hello@scoopwholefoods.com</a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to receive updates on new products, special offers, and wholesome recipes.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Scoop Wholefoods. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 