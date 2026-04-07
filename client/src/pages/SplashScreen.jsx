import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import './SplashScreen.css';

const SplashScreen = () => {
  useEffect(() => {
    // Simulate a delay before potentially navigating
    const timer = setTimeout(() => {
      console.log('Splash screen timeout - ready to proceed');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen">
      {/* Background with texture */}
      <div className="splash-bg">
        <div className="mesh-overlay"></div>
      </div>

      <div className="splash-content">
        {/* Animated Icon */}
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="logo-box">
            <QrCode className="icon" size={60} strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div 
          className="text-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="title">Billix</h1>
          <p className="tagline">Quick Scan, Effortless Checkout</p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div 
          className="loader-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="spinner"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
