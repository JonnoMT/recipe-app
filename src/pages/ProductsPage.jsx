import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';

// Product data
const productCategories = [
  'All Products',
  'Nuts & Seeds',
  'Grains & Legumes',
  'Dried Fruits',
  'Superfoods',
  'Herbs & Spices',
  'Snacks',
  'Oils & Vinegars',
  'Home & Lifestyle'
];

const products = [
  {
    id: 1,
    name: 'Organic Almonds',
    category: 'Nuts & Seeds',
    price: 12.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1574507573968-3cb3aabb02ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    new: false,
  },
  {
    id: 2,
    name: 'Organic Cashews',
    category: 'Nuts & Seeds',
    price: 14.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1605493624599-20d4ea905e5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
  {
    id: 3,
    name: 'White Quinoa',
    category: 'Grains & Legumes',
    price: 8.49,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: true,
    new: false,
  },
  {
    id: 4,
    name: 'Organic Chia Seeds',
    category: 'Superfoods',
    price: 9.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    featured: true,
    new: false,
  },
  {
    id: 5,
    name: 'Organic Medjool Dates',
    category: 'Dried Fruits',
    price: 16.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1601475211387-9d8d87070077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: true,
  },
  {
    id: 6,
    name: 'Turmeric Powder',
    category: 'Herbs & Spices',
    price: 7.49,
    unit: '50g',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
  {
    id: 7,
    name: 'Organic Cacao Nibs',
    category: 'Superfoods',
    price: 11.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1596067238846-c00c0e4e2265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: true,
  },
  {
    id: 8,
    name: 'Coconut Oil',
    category: 'Oils & Vinegars',
    price: 18.99,
    unit: '250ml',
    image: 'https://images.unsplash.com/photo-1580824456624-90e15a4cf2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
  {
    id: 9,
    name: 'Bamboo Cutlery Set',
    category: 'Home & Lifestyle',
    price: 14.99,
    unit: 'set',
    image: 'https://images.unsplash.com/photo-1584346133934-a3044d2cd6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: true,
  },
  {
    id: 10,
    name: 'Trail Mix',
    category: 'Snacks',
    price: 13.49,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1565548058654-8f74d3c5ba9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
  {
    id: 11,
    name: 'Red Lentils',
    category: 'Grains & Legumes',
    price: 6.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1550084277-9a6291c469e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
  {
    id: 12,
    name: 'Organic Dried Mango',
    category: 'Dried Fruits',
    price: 15.99,
    unit: '100g',
    image: 'https://images.unsplash.com/photo-1626335919334-93322da6e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    featured: false,
    new: false,
  },
];

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on selected category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover our wide range of high-quality, sustainable, and package-free products
          </p>
        </div>
      </div>

      {/* Product Navigation and Search */}
      <div className="sticky top-16 bg-white shadow-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center text-gray-700 hover:text-amber-600 mr-4 md:hidden"
              >
                <FiFilter className="mr-1" /> Filters
              </button>
              <div className="hidden md:flex space-x-6 overflow-x-auto">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm whitespace-nowrap ${
                      selectedCategory === category
                        ? 'text-amber-600 font-semibold'
                        : 'text-gray-600 hover:text-amber-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="bg-gray-100 p-4 md:hidden">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowFilters(false);
                }}
                className={`text-sm px-3 py-1 rounded-full ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No products found</h2>
            <p className="text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchTerm('');
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {product.featured && (
                    <span className="absolute top-0 left-0 bg-amber-500 text-white text-xs font-bold px-3 py-1">
                      Featured
                    </span>
                  )}
                  {product.new && (
                    <span className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-3 py-1">
                      New
                    </span>
                  )}
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <FiHeart className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs text-amber-600 font-semibold">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">
                      <span className="font-bold text-amber-600">${product.price.toFixed(2)}</span> / {product.unit}
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors">
                    <FiShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Why Shop With Us */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We carefully select only the highest quality organic and natural products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Waste</h3>
              <p className="text-gray-600">
                Our package-free approach allows you to buy exactly what you need, reducing waste.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Value for Money</h3>
              <p className="text-gray-600">
                By removing packaging and middlemen, we offer better prices for premium products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M15 7v2M9 7v2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">
                We prioritize environmentally friendly practices throughout our supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Shop Sustainably?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Visit one of our stores to experience package-free shopping or order online for delivery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/stores" className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300">
              Find a Store
            </a>
            <button className="bg-amber-500 text-white hover:bg-amber-600 font-semibold py-3 px-8 rounded-full transition duration-300">
              Shop Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage; 