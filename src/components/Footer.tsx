
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-saath-50 bg-gray900 border-t border-gray-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <span className="text-2xl font-bold text-saath-900">
                  <span className="text-saath-600">Saath</span>Pay
                </span>
              </a>
            </div>
            <p className="text-gray-600 mb-6">
              Bridging the gap between credit card owners and non-holders, providing innovative financial tools for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-saath-600 flex items-center justify-center text-white hover:bg-saath-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-saath-600 flex items-center justify-center text-white hover:bg-saath-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-saath-600 flex items-center justify-center text-white hover:bg-saath-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-saath-600 flex items-center justify-center text-white hover:bg-saath-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-saath-600 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-saath-600 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-saath-600 transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Data Protection</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors">Refund Policy</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-saath-600 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Finance Street, Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-saath-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">+91 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-saath-600 mr-3 flex-shrink-0" />
                <span className="text-gray-600">support@saathpay.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SaathPay. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors text-sm">
                Security
              </a>
              <a href="#" className="text-gray-600 hover:text-saath-600 transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
