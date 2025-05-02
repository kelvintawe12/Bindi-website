import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800 mb-4">
            Bindi: Empowering Through Education
          </h1>
          <p className="text-lg font-poppins text-gray-600 max-w-2xl mx-auto">
            From Cameroon’s classrooms to Rwanda’s future, we’re building a literacy movement.
          </p>
        </motion.section>

        {/* Origins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
              Our Origins in Cameroon
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              Bindi began as an educational venture creating culturally relevant activity and coloring books for children in Cameroon. Our engaging materials sparked creativity and learning, setting the stage for our expansion into Rwanda to tackle literacy challenges.
            </p>
          </div>
          <img
            src="/images/classroom.jpg"
            alt="Cameroon classroom"
            className="md:w-1/2 rounded-lg shadow-md object-cover"
          />
        </motion.section>

        {/* Rwanda Initiative */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-center"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
              Rwanda: A New Chapter
            </h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              In Rwanda, 38% of people live below the poverty line, and literacy rates in areas like Musanze (63%) lag behind. Bindi’s initiative aims to collect and redistribute 1000 books to underserved schools, empowering 500+ children with the tools to thrive.
            </p>
          </div>
          <div className="md:w-1/2">
            <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <img
              src="/images/map-rwanda.png"
              alt="Musanze and Kibeho"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold font-poppins text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 font-poppins max-w-3xl mx-auto mb-8">
            We envision a Rwanda where every child can read, imagine, and grow. By supporting universal literacy by 2030, Bindi aligns with Sustainable Development Goal 4 (Quality Education).
          </p>
          <Button variant="primary" size="lg" href="/donate">
            Join Our Mission
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default About;