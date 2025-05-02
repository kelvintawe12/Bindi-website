import React, { useState, useEffect } from 'react';

// Array of background images for the slideshow (Unsplash placeholders)
const backgroundImages: string[] = [
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/35600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const Hero: React.FC = () => {
  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Sample progress state for book collection goal
  const collectedBooks: number = 250; // Dynamic via props/API in production
  const progressPercentage: number = (collectedBooks / 1000) * 100;

  // Slideshow effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [isPaused]);

  return (
    <section
      className="w-full bg-blue-800 text-white relative overflow-hidden"
      aria-labelledby="hero-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow Background */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.9)), url('${image}')`,
          }}
          aria-hidden={index !== currentImageIndex}
        />
      ))}
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg"
        >
          Empowering Rwanda’s Future Through{' '}
          <span className="text-yellow-400">Literacy</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-shadow-sm">
          The Bindi Literacy Initiative is collecting 1000 books to bring quality
          educational materials to underserved schools in Rwanda, fostering a love
          for reading and reducing educational inequalities.
        </p>
        <p className="text-sm italic text-green-200 mb-8">
          “Every book donated opens a new chapter for a child’s future.”
        </p>
        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8" aria-live="polite">
          <div className="text-sm font-medium mb-2 text-left">
            Progress: {collectedBooks}/1000 Books Collected
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-400 h-full rounded-full animate-pulse-progress"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#donate"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 animate-bounce-in"
            aria-label="Donate books to the Bindi Literacy Initiative"
          >
            Donate Books
          </a>
          <a
            href="https://www.linkedin.com/company/bindi-initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white animate-bounce-in"
            aria-label="Follow Bindi Literacy Initiative on LinkedIn"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
      {/* Subtle Overlay Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h2v2H0zM4 4h2v2H4zM8 8h2v2H8zM12 12h2v2h-2zM16 16h2v2h-2z" fill="%23FFFFFF"/%3E%3C/svg%3E')`,
        }}
        aria-hidden="true"
      />
    </section>
  );
};

// Inline CSS for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .text-shadow-lg {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .text-shadow-sm {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  .animate-pulse-progress {
    animation: pulseProgress 2s infinite;
  }
  @keyframes pulseProgress {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  .animate-bounce-in {
    animation: bounceIn 0.5s ease-out;
  }
  @keyframes bounceIn {
    0% { transform: scale(0.8); opacity: 0; }
    60% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;