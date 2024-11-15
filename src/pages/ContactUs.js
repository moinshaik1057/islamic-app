import React from 'react';
import FeedbackForm from '../components/Form';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className='container mt-5-half'>
              
      <div className='row'>
        <div className='col-sm-6'>
        
      <h1>Contact Us</h1>
        <section>
        <h4>We’d Love to Hear From You!</h4>
        <p>
          If you have any questions, feedback, or suggestions about Islam Hub, please don't 
          hesitate to reach out. Our team is here to support you.
        </p>
      </section>
      
      <section>
        
        <p><strong>Email:</strong> islamhub@gmail.com</p>
        {/* <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Islamic Center St., City, Country</p> */}
      </section>
        </div>
        <div className='col-sm-6'>
        <FeedbackForm />
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <div className=''>
            <Footer className="ixed-bottom" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
