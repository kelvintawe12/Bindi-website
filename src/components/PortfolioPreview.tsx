import React from 'react';
import { Link } from 'react-router-dom';

export function PortfolioPreview() {
  const portfolioItems = [
    {
      title: 'Bindi Book Drive: 1000 Books for Rwanda',
      category: 'Literacy Programs',
      image: '/bindi.jpg', // Children reading in a classroom
      description: `The Bindi Book Drive aims to collect and distribute 1000 gently used books to 50 underprivileged schools across Rwanda. Partnering with local NGOs and ALU students, this initiative has already reached 5,000 students, fostering a love for reading and improving literacy rates in rural communities.`,
      route: '/blog',
    },
    {
      title: 'Bindi Teacher Training Workshops',
      category: 'Educational Resources',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', // Team collaborating, representing training
      description: `Bindi’s Teacher Training Workshops empower educators with innovative literacy teaching methods. Conducted in Kibeho and Musanze, these workshops have trained 200 teachers, equipping them with tools to create engaging reading environments and support 10,000 students.`,
      route: '/blog',
    },
    {
      title: 'Bindi Community Libraries',
      category: 'Community Engagement',
      image: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg', // Community setting, representing libraries
      description: `Bindi establishes community libraries in rural Rwanda to provide free access to books. With three libraries opened in 2025, this project serves 3,000 families, promoting lifelong learning and reducing educational inequalities in underserved areas.`,
      route: '/blog',
    },
    {
      title: 'Bindi Student Reading Clubs',
      category: 'Volunteer Initiatives',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg', // Students engaging, representing reading clubs
      description: `Bindi’s Student Reading Clubs, led by ALU student volunteers, encourage peer-to-peer learning through interactive storytelling and reading activities. Operating in 20 schools, these clubs have engaged 4,000 students, building confidence and literacy skills.`,
      route: '/blog',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-poppins">
            Bindi’s Literacy Impact
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 font-poppins">
            Explore Bindi’s transformative projects that empower Rwanda’s children and communities through literacy and education.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-yellow-500 text-sm font-medium mb-2 block font-poppins">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2 font-poppins">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-white text-sm mb-4 font-poppins">
                      {item.description}
                    </p>
                  )}
                  <Link
                    to={item.route}
                    className="inline-flex items-center text-white hover:text-yellow-500 transition-colors font-poppins"
                    aria-label={`View case study for ${item.title}`}
                  >
                    View Case Study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/bindi"
            className="inline-flex items-center text-blue-900 hover:text-yellow-500 font-medium transition-colors font-poppins"
            aria-label="View all Bindi projects"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}