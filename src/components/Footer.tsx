import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="ml-2 text-xl font-bold">WebPro</span>
            </div>
            <p className="text-gray-400 mb-4">Helping small businesses in Nigeria establish a professional online presence at an affordable price.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Domain & Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Logo Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">SEO Optimization</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition duration-300">Benefits</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition duration-300">Process</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-blue-400"></i>
                +234 801 234 5678
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                hello@webpro.ng
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-blue-400"></i>
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} WebPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
