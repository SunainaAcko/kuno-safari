import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Working with Nivedya was a game-changer for our company. Their attention to detail and creative approach to design helped us stand out in a crowded market. The website they created for us has significantly increased our conversion rates and user engagement.',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'Innovate Solutions',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'Nivedya delivered beyond our expectations. Their team took the time to understand our business goals and translated them into a stunning website that perfectly represents our brand. Their ongoing support has been exceptional.',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Creative Director',
      company: 'Design Hub',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      text: 'As a design professional myself, I have high standards. Nivedya not only met but exceeded them. Their collaborative approach and technical expertise made the development process smooth and enjoyable. I highly recommend their services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear from some of our satisfied clients."
          center
        />

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Quotation mark decoration */}
            <div className="absolute -top-10 -left-10 text-primary-200">
              <Quote size={80} />
            </div>

            {/* Testimonial slider */}
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <Quote size={20} />
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-neutral-600 text-sm">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-neutral-700 italic text-lg leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary-600' : 'bg-neutral-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;