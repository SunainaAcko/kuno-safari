import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import SectionHeading from '../components/ui/SectionHeading';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className=" p-6 flex flex-col h-full bg-gray-100 items-center"

    >
     <img className="h-12 w-15 flex justify-center rounded-lg bg-primary-100 text-primary-600 mb-4" src={icon} alt={title} />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-neutral-600 mb-4 ">{description}</p>
      <Link
        to="/services"
        className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
      >
        Book now
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path
            d="M4.16699 10H15.8337"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8337 5L15.8337 10L10.8337 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const packages = [
    {
      icon:'src/public/feature_1.jpg',
      title: 'Professional guides',
      description: 'Share your feature information here to attract new clients. Provide a brief summary to help visitors understand the context and background.',
    },
    {
      icon:'src/public/feature_1.jpg',
      title: 'Expert-Led Expeditions',
      description: 'Embark on thoughtfully crafted safaris led by experienced naturalists, ensuring optimal wildlife viewing and a deeper understanding of Kunos biodiversity.',
    },
    {
      icon:'src/public/feature_1.jpg',
      title: 'Exclusive Wildlife Access',
      description: 'Benefit from our deep understanding of Kuno, granting you access to prime wildlife viewing locations and increasing your chances of remarkable sightings.',
    },
    {
      icon:'src/public/feature_1.jpg',
      title: 'Unmatched Value for Money',
      description: 'Experience exceptional wildlife encounters and top-notch service without compromising your budget, making your Kuno adventure truly worthwhile.',
    },
    {
      icon:'src/public/feature_1.jpg',
      title: 'Beyond Just Safari',
      description: 'Immerse yourself in Kunos culture and nature with optional activities, creating a holistic and enriching travel experience beyond the traditional game drive.',
    },

    {
      icon:'src/public/feature_1.jpg',
      title: 'Positive Impact',
      description: 'By choosing us, you directly support local communities and conservation initiatives, contributing to the long-term well-being of Kunos ecosystem and its people.',
    },
      {
      icon:'src/public/feature_1.jpg',
      title: 'Capture, Learn & Inspire',
      description: 'Our safaris offer incredible photographic opportunities, foster a deeper appreciation for nature, and aim to inspire conservation awareness in every traveler.',
    },
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Why safari with Finding Fauna"
          subtitle="Choosing Finding Fauna means opting for an exceptional wildlife experience that stands out from the rest. Here’s why adventurers, families, and nature lovers trust us to explore the wild wonders of Kuno National Park"
          center
        />

        <div className="relative my-8">
          <div className="overflow-x-auto">
            <div
              className="flex gap-4 overflow-x-auto scroll-smooth"
              ref={scrollContainerRef}
              style={{
                maxWidth: '100%',
                overflowX: 'auto',
              }}
            >
              {packages.map((pkge, index) => (
                <div
                  key={index}
                  className="
                    min-w-[85vw] max-w-[85vw] 
                    sm:min-w-[350px] sm:max-w-[350px] 
                    md:min-w-[300px] md:max-w-[300px] 
                    lg:min-w-[340px] lg:max-w-[340px] 
                    flex-shrink-0
                    bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center
                  "
                >
                  <ServiceCard
                    icon={pkge.icon}
                    title={pkge.title}
                    description={pkge.description}
                    delay={index + 1}
                  />
                </div>
              ))}
            </div>

            {/* Left Scroll Button */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
              aria-label="Scroll Left"
              style={{ transform: 'translateY(-50%)' }}
            >
              &#8592;
            </button>

            {/* Right Scroll Button */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
              aria-label="Scroll Right"
              style={{ transform: 'translateY(-50%)' }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;