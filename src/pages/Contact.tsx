import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
}

const Contact = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | Nivedya';
  }, []);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

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
              Get in <span className="text-primary-600">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              Have a project in mind? We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-primary-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Our Location</h4>
                      <p className="text-neutral-600">
                        123 Design Street<br />
                        Creative City, 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email Us</h4>
                      <a
                        href="mailto:info@nivedya.com"
                        className="text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        info@nivedya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Call Us</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.129-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="Twitter"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-lg border border-neutral-200">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name <span className="text-error-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.name ? 'border-error-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Your name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address <span className="text-error-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.email ? 'border-error-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Your email address"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="text"
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.phone ? 'border-error-500' : 'border-neutral-300'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Your phone number"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        {...register('service')}
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="branding">Branding</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject <span className="text-error-600">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.subject ? 'border-error-500' : 'border-neutral-300'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="What's this about?"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-error-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message <span className="text-error-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.message ? 'border-error-500' : 'border-neutral-300'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="Tell us about your project"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message should be at least 10 characters',
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send className="mr-2" size={20} />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Location"
            subtitle="Find us on the map"
            center
          />
          <div className="rounded-lg overflow-hidden shadow-md h-96 w-full">
            {/* Placeholder for map - in a real project, you'd integrate Google Maps or similar */}
            <div className="bg-neutral-200 w-full h-full flex items-center justify-center">
              <p className="text-neutral-600">Google Maps would be integrated here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;