// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid bg-light'>
      <footer className='row'>
        <p className='col-sm-4 mb-0 text-sm-start'>Copyright &copy; 2024 Islam Hub</p>
        <Link to="/terms" className='col-sm-2'>Terms of Service</Link>
        <Link to="/privacy" className='col-sm-2'>Privacy Policy</Link>
        <Link to="/about" className='col-sm-2'>About Us</Link>
        <Link to="/contact" className='col-sm-2'>Contact Us</Link>
        <a className='text-cente text-sm-en col-sm-12' href="https://www.flaticon.com/free-animated-icons/star" title="star animated icons">Icons by Freepik - Flaticon</a>
      </footer>
    </div>
  );
};

export default Footer;
