import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className='container mt-5'>
    <h1>&nbsp;</h1>
      <h1>Terms of Service</h1>
      
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Islam Hub (“we,” “us,” or “our”). By using our application, 
          you agree to abide by these Terms of Service, which outline the rules 
          and expectations for using the app and accessing its content. This app 
          is designed to offer users access to Salaah timings, Islamic dates, 
          moon phases, temperature information, a Tashbeeh counter, Qibla direction, 
          and an Islamic calendar.
        </p>
      </section>
      
      <section>
        <h2>2. Acceptance of Terms</h2>
        <p>
          By downloading, accessing, or using Islam Hub, you agree to these Terms of Service. 
          If you do not agree, please refrain from using the app. We reserve the right to update 
          or modify these Terms at any time, and continued use of the app after such changes 
          indicates your acceptance.
        </p>
      </section>
      
      <section>
        <h2>3. User Responsibilities</h2>
        <p>
          <strong>Accuracy of Information:</strong> Users are responsible for providing 
          accurate information (such as location for Salaah timings) to ensure the app’s 
          functionality is optimized.
        </p>
        <p>
          <strong>Respectful Use:</strong> Users agree to use the app for its intended purposes 
          and respect the app's content, which is religiously oriented and intended to serve the 
          Islamic community.
        </p>
        <p>
          <strong>Account Security:</strong> If the app includes a user account feature, 
          it is your responsibility to maintain the security of your account credentials.
        </p>
      </section>
      
      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All content on Islam Hub, including text, graphics, logos, and icons, is the property 
          of Islam Hub or its content suppliers and is protected by applicable intellectual 
          property laws. Users may not reproduce, modify, or distribute any of this content 
          without our written permission.
        </p>
      </section>
      
      <section>
        <h2>5. Privacy and Data Collection</h2>
        <p>
          Your privacy is important to us. Please refer to our <Link to="/privacy">Privacy Policy</Link> for details on the information we collect, how we use it, and how we protect it. 
          By using this app, you consent to the collection and use of your information as outlined 
          in the Privacy Policy.
        </p>
      </section>
      
      <section>
        <h2>6. Prohibited Activities</h2>
        <p>The following actions are prohibited on Islam Hub:</p>
        <ul>
          <li>Engaging in fraudulent, abusive, or illegal activity.</li>
          <li>Accessing or attempting to access other users' accounts without authorization.</li>
          <li>Using the app to distribute inappropriate or offensive content.</li>
        </ul>
      </section>
      
      <section>
        <h2>7. Third-Party Services and Links</h2>
        <p>
          This app may include links to or integrate third-party services, such as mapping or weather 
          services, to enhance functionality. Islam Hub is not responsible for the practices or 
          policies of third-party services, and you should review their terms and privacy policies 
          independently.
        </p>
      </section>
      
      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          Islam Hub is provided “as-is,” and we do not guarantee uninterrupted service or 
          error-free functionality. We disclaim any liability for any damages, data loss, 
          or issues arising from using this app, including inaccuracies in information related 
          to prayer times, Qibla direction, or other religious data.
        </p>
      </section>
      
      <section>
        <h2>9. Governing Law and Jurisdiction</h2>
        <p>
        These Terms are governed by the laws of India. For users in the European Union, we comply with GDPR regulations. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
        </p>
      </section>
      
      <section>
        <h2>10. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate any user’s access to the app if they 
          violate these Terms of Service.
        </p>
      </section>
      
      <section className='mb-5'>
        <h2>11. Contact Us</h2>
        <p>
          For questions or feedback about these Terms of Service, please contact us at <a href="mailto:isalamhub@gmail.com">isalamhub@gmail.com</a>.
        </p>
      </section>
      
    </div>
  );
};

export default TermsOfService;
