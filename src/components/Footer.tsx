import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Initiative Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-yellow-500">Bindi</span> Literacy Initiative
            </h2>
            <p className="mb-4">
              Expanding access to educational materials in Rwanda to combat
              literacy challenges and empower underserved communities.
            </p>
            <p>
              By redistributing 1,000 books, Bindi aims to reduce educational
              inequalities and promote a culture of reading.
            </p>
          </div>
          {/* Key Activities */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Key Activities
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Organize book collection drives at ALU.</li>
              <li>Sort and package books into starter kits.</li>
              <li>
                Distribute materials to schools in Musanze and Kibeho with
                optional literacy workshops.
              </li>
              <li>Track impact and share beneficiary stories.</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0 text-yellow-500"
                />
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon
                  size={20}
                  className="mr-3 flex-shrink-0 text-yellow-500"
                />
                <span>+250 700 000 000</span>
              </div>
              <div className="flex items-center">
                <MailIcon
                  size={20}
                  className="mr-3 flex-shrink-0 text-yellow-500"
                />
                <span>info@bindiinitiative.org</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Bindi Initiative. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
