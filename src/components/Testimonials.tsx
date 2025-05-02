import React, { useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'Royal Communications transformed our marketing strategy completely. Their team took the time to understand our business goals and delivered results that exceeded our expectations.',
      author: 'Sarah Kamau',
      position: 'CEO, Nairobi Tech Solutions',
    },
    {
      text: 'Working with Royal Communications has been a game-changer for our brand. Their expertise in digital marketing helped us reach new audiences and significantly increase our online presence.',
      author: 'Michael Omondi',
      position: 'Marketing Director, EastAfrica Retailers',
    },
    {
      text: 'The team at Royal Communications provided exceptional service from day one. Their strategic approach to our PR campaign resulted in increased media coverage and brand recognition.',
      author: 'Priya Shah',
      position: 'Founder, Mombasa Startups',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Don't just take our word for it. Here's what our clients have to say
            about working with Royal Communications Ltd.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-blue-900 text-white p-8 md:p-12 rounded-lg shadow-lg">
            <svg
              className="h-12 w-12 text-yellow-500 mb-6 opacity-50"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl mb-6 font-serif">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-yellow-500">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-blue-900 p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-blue-900 p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Bindi: Expanding Access to Educational Materials in Rwanda
          </h3>
          <p className="text-gray-700 mb-4">
            The Bindi Initiative is a social impact project aimed at combating
            literacy challenges in Rwanda by improving access to quality
            educational materials for underserved communities. By collecting
            and redistributing 1,000 gently used books, Bindi seeks to empower
            young learners and promote a culture of reading.
          </p>
          <p className="text-gray-700 mb-4">
            Target communities include Musanze District and Kibeho Sector,
            where literacy rates are below the national average. Through book
            drives, community distribution, and literacy workshops, Bindi aims
            to support over 500 children in its first year and contribute to
            Rwanda's goal of achieving universal literacy by 2030.
          </p>
          <p className="text-gray-700">
            Join us in making a difference by donating books or partnering with
            us to expand the reach of this impactful initiative.
          </p>
        </div>
      </div>
    </section>
  );
}