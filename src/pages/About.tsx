import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Check, Award, Users, Clock, Zap, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | Nivedya';
  }, []);

  const team = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Jamie Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Taylor Kim',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Jordan Smith',
      role: 'Marketing Specialist',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const values = [
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients.',
    },
    {
      icon: <Award size={24} />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to problem-solving.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Passion',
      description: 'We love what we do and it shows in our work.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Reliability',
      description: 'We deliver on our promises and meet deadlines.',
    },
    {
      icon: <Check size={24} />,
      title: 'Integrity',
      description: 'We conduct our business with honesty and transparency.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-primary-600">Finding Fauna</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              We are a passionate team of designers and developers dedicated to creating exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading title="Our Story">
                <motion.hr
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border-t-4 border-primary-500 my-6"
                />
              </SectionHeading>
              
              <p className="text-neutral-600 mb-6">
                Founded in 2015, Nivedya began with a simple mission: to help businesses succeed in the digital world through innovative design and technology solutions. What started as a small team of passionate creatives has grown into a full-service digital agency serving clients across various industries.
              </p>
              
              <p className="text-neutral-600 mb-6">
                Our journey has been defined by a commitment to excellence, a passion for creativity, and a deep understanding of the digital landscape. We've evolved with the changing times, embracing new technologies and methodologies while staying true to our core values.
              </p>
              
              <p className="text-neutral-600">
                Today, we pride ourselves on our ability to blend artistic vision with technical expertise, creating digital experiences that not only look beautiful but also drive results for our clients. Our team of experienced professionals works collaboratively to deliver solutions that exceed expectations and help businesses thrive in an increasingly digital world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team collaborating"
                className="rounded-lg shadow-md w-full"
              />
              
              {/* Year badges */}
              <div className="absolute top-0 left-0 -mt-6 -ml-6 bg-primary-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-bold">Since 2015</span>
              </div>
              
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 bg-white py-4 px-6 rounded-lg shadow-lg">
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">10+</p>
                    <p className="text-sm text-neutral-600">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">150+</p>
                    <p className="text-sm text-neutral-600">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">50+</p>
                    <p className="text-sm text-neutral-600">Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and relationships."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented people behind our success."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        {/* Social icons would go here */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-neutral-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg opacity-90 mb-8"
            >
              Let's create something amazing together. Reach out to discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-neutral-100 transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;