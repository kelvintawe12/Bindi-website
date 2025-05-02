import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '../components/common/Button';
import { BookOpen, MapPin, Globe, ArrowRight } from 'lucide-react';
import Head from 'next/head';

const About: React.FC = () => {
  const slideshowImages = [
    {
      url: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
      alt: 'Children reading books',
    },
    {
      url: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      alt: 'Rwandan classroom',
    },
    {
      url: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
      alt: 'Literacy event in Rwanda',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const stats = [
    { value: 850, label: 'Books Collected', suffix: '' },
    { value: 400, label: 'Children Reached', suffix: '+' },
    { value: 3, label: 'Schools Served', suffix: '' },
  ];

  return (
    <>
      <Head>
        <title>Bindi Literacy Initiative | About</title>
        <meta name="description" content="Discover Bindi’s journey from Cameroon to Rwanda, empowering youth through literacy." />
      </Head>
      <main className="bg-gray-50">
        {/* Hero Section with Slideshow */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {slideshowImages.map((image, index) => (
              <motion.img
                key={image.url}
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6 drop-shadow-2xl tracking-tight"
            >
              Bindi: Empowering Through Education
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl font-poppins text-gray-200 max-w-3xl mx-auto mb-10 leading-loose"
            >
              From Cameroon’s classrooms to Rwanda’s future, we’re building a literacy movement.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/donate"
                variant="gradient"
                size="lg"
                ariaLabel="Donate books to Bindi"
                className="transform hover:scale-105 transition-all shadow-lg"
              >
                Donate Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/volunteer"
                variant="outline"
                size="lg"
                ariaLabel="Volunteer with Bindi"
                className="border-green-300 text-green-300 hover:bg-green-300 hover:text-gray-900 transform hover:scale-105 transition-all shadow-lg"
              >
                Volunteer Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="#mission"
                variant="gradient"
                size="lg"
                ariaLabel="Learn more about Bindi’s mission"
                className="transform hover:scale-105 transition-all shadow-lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            {/* Slideshow Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-green-400 scale-125' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gradient-to-b from-gray-100 to-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-800 text-center mb-12">
              Our Impact at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:shadow-xl transition-all"
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    className="text-4xl font-bold font-poppins text-green-600"
                  />
                  <p className="text-gray-600 font-poppins text-lg mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          id="mission"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="flex items-center mb-6">
                  <BookOpen className="h-12 w-12 text-green-600 mr-4 transform hover:scale-110 transition-transform" />
                  <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-800">
                    Our Roots in Cameroon
                  </h2>
                </div>
                <p className="text-gray-600 font-poppins text-lg leading-loose mb-6">
                  Bindi began as an educational venture creating culturally relevant activity and coloring books for children in Cameroon. Our engaging materials sparked creativity and learning, setting the stage for our expansion into Rwanda to tackle literacy challenges head-on.
                </p>
                <div className="flex gap-4">
                  <Button
                    href="/stories"
                    variant="gradient"
                    size="md"
                    ariaLabel="Read stories from Bindi’s journey"
                    className="transform hover:scale-105 transition-all"
                  >
                    Read Stories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    href="#rwanda"
                    variant="outline"
                    size="md"
                    ariaLabel="Learn about Bindi’s work in Rwanda"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Next Chapter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <img
                  src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
                  alt="Children in a classroom"
                  className="w-full rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
          <hr className="mt-16 border-t-2 border-gradient-to-r from-green-500 to-blue-600" />
        </motion.section>

        {/* Rwanda Section */}
        <motion.section
          id="rwanda"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gray-100"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="flex items-center mb-6">
                  <MapPin className="h-12 w-12 text-green-600 mr-4 transform hover:scale-110 transition-transform" />
                  <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-800">
                    Rwanda: A New Chapter
                  </h2>
                </div>
                <p className="text-gray-600 font-poppins text-lg leading-loose mb-6">
                  In Rwanda, 38% of the population lives below the poverty line, and literacy rates in areas like Musanze (63%) trail the national average. Bindi’s initiative is collecting and redistributing 1000 books to underserved schools, empowering over 500 children with the tools to thrive.
                </p>
                <div className="flex gap-4">
                  <Button
                    href="/impact"
                    variant="gradient"
                    size="md"
                    ariaLabel="See Bindi’s impact in Rwanda"
                    className="transform hover:scale-105 transition-all"
                  >
                    Our Impact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    href="#vision"
                    variant="outline"
                    size="md"
                    ariaLabel="Learn about Bindi’s vision"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Our Vision
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <img
                  src="/images/map-rwanda.png"
                  alt="Map highlighting Musanze and Kibeho"
                  className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
          <hr className="mt-16 border-t-2 border-gradient-to-r from-green-500 to-blue-600" />
        </motion.section>

        {/* Vision Section */}
        <motion.section
          id="vision"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-12 w-12 text-green-600 mr-4 transform hover:scale-110 transition-transform" />
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-gray-800">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 font-poppins text-lg leading-loose max-w-4xl mx-auto mb-10">
              We envision a Rwanda where every child can read, imagine, and grow. By supporting universal literacy by 2030, Bindi aligns with Sustainable Development Goal 4 (Quality Education), fostering a brighter future for communities in Musanze, Kibeho, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/donate"
                variant="gradient"
                size="lg"
                ariaLabel="Join Bindi’s mission by donating"
                className="transform hover:scale-105 transition-all shadow-lg"
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                ariaLabel="Contact Bindi for more information"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all shadow-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white text-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-6">
              Be Part of the Literacy Movement
            </h2>
            <p className="text-lg font-poppins text-gray-200 max-w-2xl mx-auto mb-10">
              Your support can transform lives. Donate books, volunteer, or share our mission today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                ariaLabel="Donate books to Bindi"
                className="bg-white text-green-700 hover:bg-gray-100 transform hover:scale-105 transition-all"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/volunteer"
                variant="outline"
                size="lg"
                ariaLabel="Volunteer with Bindi"
                className="border-white text-white hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all"
              >
                Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/stories"
                variant="primary"
                size="lg"
                ariaLabel="Explore Bindi’s stories"
                className="bg-white text-blue-700 hover:bg-gray-100 transform hover:scale-105 transition-all"
              >
                Our Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default About;