import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/footer.css';

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className='footer'>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <p className="text-gray-400 text-sm">
                We are committed to providing excellent services to convert the file for your system so you can easily manage your work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className='nav-link' onClick={() => handleLinkClick('/')}>Home</a>
                </li>
                <li>
                  <a href="#" className='nav-link' onClick={() => handleLinkClick('/service')}>Service</a>
                </li>
                <li>
                  <a href="#" className='nav-link' onClick={() => handleLinkClick('/developer')}>Contact Us</a>
                </li>
                <li>
                  <a href="#" className='nav-link' onClick={() => handleLinkClick('/privacyandpolicy')}>Privacy and Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-gray-400 text-sm">We are Team A</p>
              <p className="text-gray-400 text-sm">Email: mathswesh@gmail.com</p>
              <p className="text-gray-400 text-sm">Phone: +9999999999</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">&copy; 2024 Converter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};