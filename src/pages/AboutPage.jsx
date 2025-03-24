import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-amber-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Scoop Wholefoods</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Your trusted destination for premium organic food and eco-friendly products
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              At Scoop Wholefoods, we're on a mission to make nutritious, sustainable, and package-free food accessible to all.
              We believe that what we eat directly impacts our health and the environment, which is why we've created a
              shopping experience that allows you to buy exactly what you need while reducing waste.
            </p>
            <div className="border-t border-gray-200 my-10"></div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Package-Free Shopping</h3>
              <p className="text-gray-700 mb-4">
                Our stores operate on a self-serve, package-free concept where you can buy exactly what you need.
                Bring your own containers or purchase reusable ones from us, and fill them with your desired amount of products.
              </p>
              <p className="text-gray-700">
                This approach not only reduces plastic waste but also allows you to experiment with new foods without committing to large quantities.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1618680813568-64e8b4802e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Package-free shopping"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg md:order-3"
            >
              <img
                src="https://images.unsplash.com/photo-1576473086220-1f86ff39b9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Quality products"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="md:order-4">
              <h3 className="text-2xl font-semibold mb-4">Premium Quality Products</h3>
              <p className="text-gray-700 mb-4">
                We source the highest quality organic, natural, and sustainable products from trusted suppliers.
                Our buying team carefully evaluates each product for its nutritional value, environmental impact, and ethical production.
              </p>
              <p className="text-gray-700">
                From organic nuts and seeds to natural cleaning products, we ensure that everything we offer meets our strict quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-700">
                We believe in complete transparency about our products, their sources, and how they're produced.
                We provide detailed information about ingredients, nutrition, and environmental impact.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M15 7v3m-3-3v3m-6-3v3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-700">
                Environmental sustainability is at the heart of everything we do. 
                From sourcing practices to packaging decisions, we're committed to minimizing our ecological footprint.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-700">
                We're committed to building strong relationships with our customers, suppliers, and communities.
                We actively participate in community initiatives and support local causes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We're committed to providing you with the highest quality wholefood products while promoting 
            sustainable living and reducing our collective environmental impact.
          </p>
          <div className="mt-10">
            <a href="/our-story" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Discover Our Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; 