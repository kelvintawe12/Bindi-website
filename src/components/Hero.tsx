import React from 'react';

const Hero: React.FC = () => {
  // Sample progress state for the book collection goal (0-1000 books)
  const collectedBooks: number = 250; // This could be dynamic via props or state
  const progressPercentage: number = (collectedBooks / 1000) * 100;

  return (
    <section className="w-full bg-blue-800 text-white" aria-labelledby="hero-heading">
      <div
        className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.9)), url('https://images.unsplash.com/photo-1621155346337-1d15f879a18f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Empowering Rwanda’s Future Through{' '}
          <span className="text-green-400">Literacy</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8">
          The Bindi Literacy Initiative is collecting 1000 books to bring quality
          educational materials to underserved schools in Rwanda, fostering a love
          for reading and reducing educational inequalities.
        </p>
        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="text-sm font-medium mb-2 text-left">
            Progress: {collectedBooks}/1000 Books Collected
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-400 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#donate"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Donate books to the Bindi Literacy Initiative"
          >
            Donate Books
          </a>
          <a
            href="https://www.linkedin.com/company/bindi-initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Follow Bindi Literacy Initiative on LinkedIn"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;