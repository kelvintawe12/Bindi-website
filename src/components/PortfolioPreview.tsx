import React from 'react';

export function PortfolioPreview() {
  const portfolioItems = [
    {
      title: 'Bindi Rural Reading Campaign',
      category: 'Reading Access',
      image: 'https://images.pexels.com/photos/159538/pexels-photo-159538.jpeg', // Children reading in a classroom
      description: `Bindi’s Rural Reading Campaign distributes 1000 gently used books to 50 rural schools in Rwanda, partnering with local NGOs and ALU students. This initiative has reached 8,000 students, fostering literacy and creating vibrant reading communities in underserved areas.`,
    },
    {
      title: 'Bindi Educator Empowerment Program',
      category: 'Teacher Training',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', // Team collaboration, representing training
      description: `Bindi’s Educator Empowerment Program trains teachers in modern literacy techniques across Kibeho and Musanze. With 300 educators trained, this program supports 15,000 students by equipping classrooms with engaging reading resources and methods.`,
    },
    {
      title: 'Bindi Village Library Project',
      category: 'Library Development',
      image: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg', // Community setting, representing libraries
      description: `Bindi’s Village Library Project establishes accessible libraries in rural Rwanda, serving 5,000 families. Launched in 2025, five new libraries provide free books, promoting lifelong learning and reducing educational disparities.`,
    },
    {
      title: 'Bindi Youth Literacy Ambassadors',
      category: 'Youth Programs',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg', // Students engaging, representing youth programs
      description: `Bindi’s Youth Literacy Ambassadors, led by ALU volunteers, inspire 6,000 students through reading clubs in 30 schools. This program encourages storytelling and peer learning, building literacy skills and confidence among Rwanda’s youth.`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-poppins">
            Bindi’s Literacy Mission
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 font-poppins">
            Explore Bindi’s initiatives that transform lives through literacy, bringing books and education to Rwanda’s children and communities.
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
                  <a
                    href=""
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/portfolio"
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
          </a>
        </div>
      </div>
    </section>
  );
}