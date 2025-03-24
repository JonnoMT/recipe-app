import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import RecipeList from '../components/RecipeList';
import { useState } from 'react';

function FeaturedSection({ title, children, bgColor = "bg-white" }) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function HomePage() {
  const [featuredRecipes] = useState([
    {
      id: 1,
      title: 'Creamy Garlic Pasta',
      description: 'A rich and creamy pasta dish with garlic and parmesan.',
      time: '30 min',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 2,
      title: 'Avocado Toast',
      description: 'Simple, healthy breakfast with mashed avocado on toasted bread.',
      time: '10 min',
      difficulty: 'Very Easy',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 3,
      title: 'Vegetable Stir Fry',
      description: 'Colorful mix of fresh vegetables quickly cooked in a flavorful sauce.',
      time: '20 min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
  ]);

  const [featuredProducts] = useState([
    {
      id: 1,
      name: 'Organic Almonds',
      description: 'Raw and unsalted organic almonds, perfect for snacking.',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1574507573968-3cb3aabb02ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      name: 'Quinoa',
      description: 'Protein-rich ancient grain, perfect for salads and bowls.',
      price: '$8.49',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      name: 'Chia Seeds',
      description: 'Nutrient-dense superfood packed with omega-3s and fiber.',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ]);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedSection title="Featured Products" bgColor="bg-amber-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold">{product.price}</span>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </FeaturedSection>

      {/* Featured Recipes */}
      <FeaturedSection title="Popular Recipes">
        <RecipeList recipes={featuredRecipes} />
        <div className="text-center mt-10">
          <Link
            to="/recipes"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Explore All Recipes
          </Link>
        </div>
      </FeaturedSection>

      {/* Our Values */}
      <FeaturedSection title="Our Values" bgColor="bg-amber-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Sourcing</h3>
            <p className="text-gray-600">
              We partner with farmers who share our commitment to sustainable agriculture and ethical practices.
            </p>
          </div>
          <div className="p-6">
            <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero Waste</h3>
            <p className="text-gray-600">
              Our package-free shopping experience helps reduce plastic waste and promotes sustainable consumption.
            </p>
          </div>
          <div className="p-6">
            <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nutritional Education</h3>
            <p className="text-gray-600">
              We're committed to helping you understand the benefits of wholesome, natural foods for your health.
            </p>
          </div>
        </div>
      </FeaturedSection>

      {/* Newsletter Signup */}
      <FeaturedSection title="Join Our Community" bgColor="bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest recipes, products, and exclusive offers.
          </p>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </FeaturedSection>
    </div>
  );
}

export default HomePage; 