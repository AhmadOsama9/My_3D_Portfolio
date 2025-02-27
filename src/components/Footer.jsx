import React from 'react';
import { navigation } from '../data';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-neutral-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-sm text-neutral-400 hover:text-primary-500 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-neutral-100 mb-4">Social Links</h4>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/ahmedosama975/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AhmadOsama9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-neutral-100 mb-4">Contact Me</h4>
            <ul className="text-sm text-neutral-400 space-y-2">
              <li>
                Email:{' '}
                <a
                  href="mailto:ahmedosamaa975@gmail.com"
                  className="text-primary-500 hover:underline"
                >
                  ahmedosama.dev@outlook.com
                </a>
              </li>
              <li>Phone: +20 1022-866-424</li>
            </ul>
          </div>

          
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-neutral-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ahmed Osama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;