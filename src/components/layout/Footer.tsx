import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Finding Fauna</h4>
            <p className="text-neutral-300 mb-4">
              Creating beautiful digital experiences that inspire and engage.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Web Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  UI/UX Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  Digital Marketing
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@nivedya.com" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  info@nivedya.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Nivedya. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;