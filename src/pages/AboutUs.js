import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='container mt-5'>
    <h1>&nbsp;</h1>
      <h1>About Us</h1>
      
      <section>
        <h2>Our Mission</h2>
        <p>
          Welcome to Islam Hub Our mission is to offer a reliable and user-friendly platform 
          to support the spiritual and daily needs of Muslims worldwide. We believe in making 
          Islamic information and tools accessible to all, helping individuals maintain their 
          religious practices and stay connected to their faith.
        </p>
      </section>
      
      <section>
        <h2>What We Offer</h2>
        <p>
          Islam Hub is a comprehensive app dedicated to enhancing the Islamic lifestyle. 
          Our app features include:
        </p>
        <ul>
          <li><strong>Salaah Timings:</strong> Accurate prayer timings based on your location, helping you stay on time for daily prayers.</li>
          <li><strong>Islamic Calendar:</strong> Keep track of important Islamic dates and events throughout the year.</li>
          <li><strong>Moon Phases:</strong> Follow the lunar calendar with our moon phase updates.</li>
          <li><strong>Qibla Direction:</strong> Easily find the Qibla direction for your location to assist in prayer.</li>
          <li><strong>Tashbeeh Counter:</strong> A digital tool for counting dhikr, supporting your spiritual practice anytime, anywhere.</li>
          <li><strong>City Temperature:</strong> Get real-time weather updates to plan your day better.</li>
        </ul>
      </section>
      
      <section>
        <h2>Why Choose Us?</h2>
        <p>
          We are committed to creating an intuitive, accurate, and dependable app that respects 
          the values and needs of the Muslim community. Our human-centered approach ensures that 
          every feature is designed with care, accuracy, and ease of use in mind.
        </p>
        <p>
          Islam Hub aims to be more than just an app—it’s a companion to help you stay on track 
          with your spiritual journey and connect deeply with your faith, wherever you are in the world.
        </p>
      </section>
      
      <section>
        <h2>Our Team</h2>
        <p>
          Our team is made up of dedicated developers, designers, and Islamic scholars who work 
          together to ensure our app provides accurate information and a seamless user experience. 
          We are constantly working to improve the app based on user feedback and emerging technologies.
        </p>
      </section>
      
      <section className='mb-5'>
        <h2>Get in Touch</h2>
        <p>
          We’d love to hear from you! Whether you have <Link to="/feedback">questions, feedback, or suggestions</Link>, feel
          free to reach out. Contact us at <a href="mailto:isalamhub@gmail.com">isalamhub@gmail.com</a>, and follow us on social media
          to stay updated on new features and improvements.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
