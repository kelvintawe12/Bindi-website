import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">Royal</span> Communications
            </h2>
            <p className="mb-4">
              Elevating brands and empowering growth through personalized,
              results-driven marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                About
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Our Process
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Portfolio
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon size={20} className="mr-3 mt-1 flex-shrink-0 text-yellow-500" />
                <span>Nairobi Thika Road, Kenya</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={20} className="mr-3 flex-shrink-0 text-yellow-500" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center">
                <MailIcon size={20} className="mr-3 flex-shrink-0 text-yellow-500" />
                <span>info@royalcommunications.co.ke</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Royal Communications Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}