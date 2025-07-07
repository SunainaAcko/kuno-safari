import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface ContactFormData {
  name: string;
  email: string;
  country: string;
  message: string;
  phone:string;
}

const ContactSection = () => {
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
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-soft p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name
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
                  Email Address
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

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.country ? 'border-error-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="Country of Residence"
                  {...register('country', { required: 'country is required' })}
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-error-600">{errors.country.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.phone ? 'border-error-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="We need a phone number in case the operator cannot reach you by email."
                  {...register('phone', { required: 'phone is required' })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message ? 'border-error-500' : 'border-neutral-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  placeholder="You will receive the best response from the tour operator if you introduce yourself and share the reasons for your interest in this tour."
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
          </motion.div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-neutral-600 mb-8">
                Feel free to reach out to us with any questions or inquiries. We're here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Our Location</h4>
                    <p className="text-neutral-600">
                      123 Design Street, Creative City, 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email Us</h4>
                    <a
                      href="contact.findingfauna@gmail.com"
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                     contact.findingfauna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Call Us</h4>
                    <a
                      href="tel:+916161671283"
                      className="text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                     +91 6161671283
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="font-semibold text-lg mb-3">Business Hours</h4>
              <ul className="space-y-2">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;