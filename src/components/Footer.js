// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid fixed-bottom bg-light'>
      <footer className='d-flex justify-content-between'>
        <p className='mb-0 text-center text-sm-start'>Copyright &copy; 2024 Islamic App</p>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <a className='text-cente text-sm-en' href="https://www.flaticon.com/free-animated-icons/star" title="star animated icons">Animated icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  );
};

export default Footer;
