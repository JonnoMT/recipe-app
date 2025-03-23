import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';

// Store data
const stores = [
  {
    id: 1,
    name: 'Sydney CBD',
    address: '45 Market Street, Sydney NSW 2000',
    phone: '+61 2 9123 4567',
    email: 'sydney@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Refill Station', 'Coffee Bar']
  },
  {
    id: 2,
    name: 'Bondi Junction',
    address: '500 Oxford Street, Bondi Junction NSW 2022',
    phone: '+61 2 9234 5678',
    email: 'bondi@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Refill Station', 'Fresh Bakery']
  },
  {
    id: 3,
    name: 'Manly',
    address: '12 The Corso, Manly NSW 2095',
    phone: '+61 2 9345 6789',
    email: 'manly@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Smoothie Bar', 'Educational Workshops']
  },
  {
    id: 4,
    name: 'Melbourne Central',
    address: '211 La Trobe Street, Melbourne VIC 3000',
    phone: '+61 3 9456 7890',
    email: 'melbourne@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 9:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 5:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Refill Station', 'Coffee Bar', 'Nut Butter Station']
  },
  {
    id: 5,
    name: 'Brisbane',
    address: '123 Adelaide Street, Brisbane QLD 4000',
    phone: '+61 7 3456 7890',
    email: 'brisbane@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 7:00 PM',
      tuesday: '8:00 AM - 7:00 PM',
      wednesday: '8:00 AM - 7:00 PM',
      thursday: '8:00 AM - 7:00 PM',
      friday: '8:00 AM - 7:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 4:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1546113699-e16b23494807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Wellness Corner', 'Fresh Bakery']
  },
  {
    id: 6,
    name: 'Perth',
    address: '892 Hay Street, Perth WA 6000',
    phone: '+61 8 9567 8901',
    email: 'perth@scoopwholefoods.com',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 9:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: '11:00 AM - 4:00 PM',
    },
    image: 'https://images.unsplash.com/photo-1621665421558-831f91fd0500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    mapUrl: 'https://maps.google.com',
    features: ['Bulk Foods', 'Eco-Friendly Products', 'Cooking Classes', 'Nutritionist On-Site']
  },
];

// Store locations by state
const storeLocations = [
  { state: 'All Locations', count: stores.length },
  { state: 'New South Wales', count: 3 },
  { state: 'Victoria', count: 1 },
  { state: 'Queensland', count: 1 },
  { state: 'Western Australia', count: 1 },
];

function StoresPage() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedStore, setSelectedStore] = useState(null);

  // Filter stores based on selected location
  const filteredStores = selectedLocation === 'All Locations'
    ? stores
    : stores.filter(store => {
        if (selectedLocation === 'New South Wales' && (store.name.includes('Sydney') || store.name.includes('Bondi') || store.name.includes('Manly'))) {
          return true;
        }
        if (selectedLocation === 'Victoria' && store.name.includes('Melbourne')) {
          return true;
        }
        if (selectedLocation === 'Queensland' && store.name.includes('Brisbane')) {
          return true;
        }
        if (selectedLocation === 'Western Australia' && store.name.includes('Perth')) {
          return true;
        }
        return false;
      });

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    window.scrollTo({
      top: document.getElementById('store-details').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Stores</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Visit one of our locations to experience package-free shopping and discover our range of wholesome products
          </p>
        </div>
      </div>

      {/* Store Locations Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {storeLocations.map((location) => (
              <button
                key={location.state}
                onClick={() => setSelectedLocation(location.state)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedLocation === location.state
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {location.state} ({location.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStores.map((store) => (
            <motion.div
              key={store.id}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer ${
                selectedStore && selectedStore.id === store.id ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => handleStoreSelect(store)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{store.name}</h3>
                <div className="flex items-start space-x-2 mb-2">
                  <FiMapPin className="text-amber-500 mt-1" />
                  <p className="text-gray-600">{store.address}</p>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <FiPhone className="text-amber-500" />
                  <p className="text-gray-600">{store.phone}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {store.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {store.features.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      +{store.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Store Details */}
      <div id="store-details" className="pt-8">
        {selectedStore ? (
          <div className="bg-amber-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={selectedStore.image} 
                      alt={selectedStore.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-3xl font-bold mb-4">{selectedStore.name}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <FiMapPin className="text-amber-500 mt-1" />
                        <div>
                          <h3 className="font-semibold">Address</h3>
                          <p className="text-gray-600">{selectedStore.address}</p>
                          <a 
                            href={selectedStore.mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:text-amber-700 text-sm inline-block mt-1"
                          >
                            View on map
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <FiPhone className="text-amber-500 mt-1" />
                        <div>
                          <h3 className="font-semibold">Contact</h3>
                          <p className="text-gray-600">{selectedStore.phone}</p>
                          <p className="text-gray-600 flex items-center">
                            <FiMail className="mr-1" /> {selectedStore.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <FiClock className="text-amber-500 mt-1" />
                        <div>
                          <h3 className="font-semibold">Hours</h3>
                          <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                            <div>
                              <p><span className="font-medium">Monday:</span> {selectedStore.hours.monday}</p>
                              <p><span className="font-medium">Tuesday:</span> {selectedStore.hours.tuesday}</p>
                              <p><span className="font-medium">Wednesday:</span> {selectedStore.hours.wednesday}</p>
                              <p><span className="font-medium">Thursday:</span> {selectedStore.hours.thursday}</p>
                            </div>
                            <div>
                              <p><span className="font-medium">Friday:</span> {selectedStore.hours.friday}</p>
                              <p><span className="font-medium">Saturday:</span> {selectedStore.hours.saturday}</p>
                              <p><span className="font-medium">Sunday:</span> {selectedStore.hours.sunday}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedStore.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-amber-50 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Select a Store</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Click on any of our locations above to view detailed information about that store.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Store Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">The Scoop Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Self-Serve Shopping</h3>
              <p className="text-gray-600">
                Bring your own containers or purchase reusable ones in-store. Fill them with exactly what you need, reducing waste and saving money.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our staff are passionate about wholefood nutrition and sustainability. They're always ready to answer questions and offer advice.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Regular Events</h3>
              <p className="text-gray-600">
                Join us for workshops, cooking demonstrations, and community events that celebrate healthy eating and sustainable living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Soon */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Opening Soon</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            We're expanding! New Scoop Wholefoods stores are coming soon to Adelaide and Canberra.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-gray-700 p-8 rounded-lg max-w-md">
              <h3 className="text-2xl font-bold mb-4">Adelaide</h3>
              <p className="mb-4">Rundle Mall, Adelaide SA 5000</p>
              <p className="text-amber-400 font-semibold">Opening September 2023</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg max-w-md">
              <h3 className="text-2xl font-bold mb-4">Canberra</h3>
              <p className="mb-4">Canberra Centre, Canberra ACT 2601</p>
              <p className="text-amber-400 font-semibold">Opening November 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Have a Question?</h2>
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" 
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="store" className="block text-gray-700 font-medium mb-2">Store Location</label>
                <select 
                  id="store" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Select a store</option>
                  {stores.map(store => (
                    <option key={store.id} value={store.name}>{store.name}</option>
                  ))}
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" 
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StoresPage; 