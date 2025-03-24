import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Layout() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration errors by not rendering motion components until client-side
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="fixed w-full z-50 bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-amber-600">Scoop</span>
                <span className="ml-1 text-2xl font-light text-gray-800">Wholefoods</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow pt-16"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 