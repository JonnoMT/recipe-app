import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}

export default Layout; 