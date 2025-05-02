import { useState } from 'react';
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
    { to: '/home', label: 'Home' },
    { to: '/bindi', label: 'Bindi' },
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/donate', label: 'Donate' },
  ];

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
                  className="px-6 py-2 text-sm font-semibold font-poppins bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                >
                  {link.label}
                </Button>
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="font-poppins font-medium text-white hover:text-yellow-500 hover:scale-110 transition-all duration-200 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
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
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) =>
              link.label === 'Donate' ? (
                <Link key={link.to} to={link.to} onClick={closeMenu}>
                  <Button
                    variant="primary"
                    className="w-full text-left text-sm font-semibold font-poppins bg-yellow-500 text-blue-900 hover:bg-yellow-400 hover:scale-105 transition-all duration-200"
                  >
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="font-poppins font-medium text-white hover:text-yellow-500 hover:scale-110 transition-all duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}