import React from 'react';
export function Hero() {
  return <section className="w-full bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center" style={{
      backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.9)), url('https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Elevate Your Brand With{' '}
          <span className="text-yellow-500">Strategic Marketing</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10">
          Royal Communications Ltd. delivers personalized, results-driven
          marketing solutions to help your business stand out and thrive in a
          competitive market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-md font-medium transition-transform hover:scale-105">
            Get a Quote
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md font-medium transition-colors">
            Our Services
          </button>
        </div>
      </div>
    </section>;
}