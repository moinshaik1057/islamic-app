import React from 'react';
import FeedbackForm from '../components/Form';

const ContactUs = () => {
  return (
    <div className='container mt-5'>
        <h1>&nbsp;</h1>
      
      <div className='row'>
        <div className='col-sm-6'>
        
      <h1>Contact Us</h1>
        <section>
        <h2>We’d Love to Hear From You!</h2>
        <p>
          If you have any questions, feedback, or suggestions about [App Name], please don't 
          hesitate to reach out. Our team is here to support you.
        </p>
      </section>
      
      <section>
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@[appname].com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Islamic Center St., City, Country</p>
      </section>
        </div>
        <div className='col-sm-6'>
        <FeedbackForm />
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
