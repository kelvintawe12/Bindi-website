import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './common/Logo';
import { Button } from './common/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/Binidi-Initiative" className="hover:text-yellow-500">
            Bindi
          </Link>
          <Link to="/about" className="font-medium hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link to="/blog" className="font-medium hover:text-yellow-500 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium hover:text-yellow-500 transition-colors">
            Contact
          </Link>
          <Link to="/donate" className="font-medium hover:text-yellow-500 transition-colors">
            Donate
          </Link>
          <Link to="/volunteer" className="font-medium hover:text-yellow-500 transition-colors">
            Volunteer
          </Link>
          <Link to="/impact" className="font-medium hover:text-yellow-500 transition-colors">
            Impact
          </Link>
          <Link to="/stories" className="font-medium hover:text-yellow-500 transition-colors">
            Stories
          </Link>
          <Link to="/events" className="font-medium hover:text-yellow-500 transition-colors">
            Events
          </Link>
          <Link to="/partners" className="font-medium hover:text-yellow-500 transition-colors">
            Partners
          </Link>
          <Link to="/resources" className="font-medium hover:text-yellow-500 transition-colors">
            Resources
          </Link>
          <Link to="/home" className="font-medium hover:text-yellow-500 transition-colors">
            Home
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button variant="primary">Donate</Button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            <Link to="/" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Home
            </Link>
            <Link to="/Binidi-Initiative" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Bindi
            </Link>
            <Link to="/about" className="font-medium hover:text-yellow-500 transition-colors py-2">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Contact
            </Link>
            <Button variant="primary" className="w-full text-left">
              Donate
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
