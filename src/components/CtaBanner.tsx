import React from 'react';
export function CtaBanner() {
  return <section className="py-16 bg-coral-500 text-white w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Partner with Royal Communications Ltd. for innovative marketing
          solutions that drive real results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-coral-500 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-coral-500 px-8 py-3 rounded-md font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>;
}