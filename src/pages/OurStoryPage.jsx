import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function OurStoryPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-amber-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            How Scoop Wholefoods began and grew into what it is today
          </p>
        </div>
      </div>

      {/* Founder Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Founders" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">The Beginning</h2>
              <p className="text-lg text-gray-700 mb-6">
                Scoop Wholefoods began in 2013 when Emma and James Hamilton, a husband and wife team with a shared passion for health and sustainability, opened their first small store in Sydney's Northern Beaches.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After years of working in the corporate world, they were both seeking a more meaningful career that aligned with their values of health, sustainability, and community. Their vision was simple: create a welcoming space where people could buy high-quality, organic foods without the excessive packaging typical of conventional supermarkets.
              </p>
              <p className="text-lg text-gray-700">
                Starting with just 200 products and operating from a tiny storefront, they pioneered the "scoop and weigh" concept in Australia, allowing customers to buy exactly what they needed while reducing waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-amber-200"></div>
              
              {/* 2013 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">2013</h3>
                    <p className="text-gray-700">
                      First store opened in Brookvale, Sydney with a focus on organic nuts, seeds, and grains.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* 2015 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">2015</h3>
                    <p className="text-gray-700">
                      Second location opened in Mosman after overwhelming customer demand. Product range expanded to include superfoods and healthy snacks.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12 md:order-1"></div>
              </motion.div>
              
              {/* 2017 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">2017</h3>
                    <p className="text-gray-700">
                      Expanded to Melbourne and Brisbane. Introduced our eco-friendly home goods and zero-waste lifestyle products.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* 2019 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">2019</h3>
                    <p className="text-gray-700">
                      Launched our online store and recipe blog to share wholefood knowledge with a wider audience.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12 md:order-1"></div>
              </motion.div>
              
              {/* 2021 */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">2021</h3>
                    <p className="text-gray-700">
                      Celebrated our 10th store opening and introduced our sustainability initiative to be completely carbon-neutral by 2025.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              {/* Today */}
              <motion.div 
                className="relative flex flex-col md:flex-row items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Today</h3>
                    <p className="text-gray-700">
                      Scoop Wholefoods now has 15 stores across Australia and is expanding internationally, while staying true to our founding principles of quality, sustainability, and community.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-amber-200 bg-amber-500"></div>
                <div className="md:w-1/2 md:pl-12 md:order-1"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Founders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                  alt="Emma Hamilton" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Emma Hamilton</h3>
              <p className="text-gray-500 italic mb-4">Co-Founder & Product Development</p>
              <p className="text-gray-700 mb-4">
                With a background in nutrition and food science, Emma oversees our product selection and quality control. Her passion for wholesome food started in her grandmother's kitchen, where she learned that the best ingredients make the best meals.
              </p>
              <p className="text-gray-700">
                "I believe that food should nourish both our bodies and the planet. At Scoop, we're committed to making nutritious food accessible while minimizing our environmental impact."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="James Hamilton" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">James Hamilton</h3>
              <p className="text-gray-500 italic mb-4">Co-Founder & Operations</p>
              <p className="text-gray-700 mb-4">
                With a background in business and sustainability, James handles the operational side of Scoop Wholefoods. His dedication to zero-waste principles has shaped our unique shopping experience.
              </p>
              <p className="text-gray-700">
                "We created Scoop not just as a store, but as a movement towards more mindful consumption. Every small choice we make can have a big impact when we make it together."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us On Our Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're just getting started, and we'd love for you to be part of our story. Visit one of our stores, try our products, and join our community of wholefood enthusiasts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/stores" className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300">
              Find a Store
            </Link>
            <Link to="/products" className="bg-amber-600 text-white hover:bg-amber-700 font-semibold py-3 px-8 rounded-full transition duration-300">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStoryPage; 