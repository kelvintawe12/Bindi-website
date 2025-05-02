import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './common/Logo';
import { Button } from './common/Button';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            Home
          </a>
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            Services
          </a>
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            Our Process
          </a>
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            Portfolio
          </a>
          <a href="#" className="font-medium hover:text-yellow-500 transition-colors">
            Contact
          </a>
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
      {isMenuOpen && <div className="md:hidden bg-blue-900 pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Home
            </a>
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              About
            </a>
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Services
            </a>
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Our Process
            </a>
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Portfolio
            </a>
            <a href="#" className="font-medium hover:text-yellow-500 transition-colors py-2">
              Contact
            </a>
            <Button variant="primary" className="w-full text-left">
              Donate
            </Button>
          </nav>
        </div>}
    </header>;
}