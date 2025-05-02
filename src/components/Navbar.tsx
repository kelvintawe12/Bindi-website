import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './common/Logo';
import { Button } from './common/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/bindi-initiative', label: 'Bindi' },
    { to: '/about', label: 'About' },
    { to: '/stories', label: 'Stories' },
    { to: '/donate', label: 'Donate' },
  ];

  // Animation variants for mobile menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  // Animation variants for links
  const linkVariants = {
    hover: {
      scale: 1.1,
      opacity: 0.8,
      transition: { duration: 0.2 },
    },
    initial: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-4 flex justify-between items-center max-w-7xl">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            link.label === 'Donate' ? (
              <Link key={link.to} to={link.to}>
                <Button
                  variant="primary"
                  className="px-6 py-2 text-sm font-semibold font-poppins bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-colors"
                >
                  {link.label}
                </Button>
              </Link>
            ) : (
              <motion.div key={link.to} variants={linkVariants} whileHover="hover" initial="initial">
                <Link
                  to={link.to}
                  className="font-poppins font-medium text-white hover:text-yellow-500 transition-colors px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-blue-900/95 backdrop-blur-sm pb-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) =>
                link.label === 'Donate' ? (
                  <Link key={link.to} to={link.to} onClick={closeMenu}>
                    <Button
                      variant="primary"
                      className="w-full text-left text-sm font-semibold font-poppins bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-colors"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ) : (
                  <motion.div
                    key={link.to}
                    variants={linkVariants}
                    whileHover="hover"
                    initial="initial"
                  >
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className="font-poppins font-medium text-white hover:text-yellow-500 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}