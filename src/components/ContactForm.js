import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/app-logo.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email address is invalid';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Here you can handle form submission, e.g., send data to server or an email API
    console.log('Form submitted:', formData);

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                      <div className="contact-form border border-success-subtle p-4 mt-3 rounded shadow-sm">
                      <div className='mb-3'>
              <h2 className='text-center'>
                <img src={Logo} alt="Islamic App Logo" width="40" height="40" className="d-inline-block" />
                Islamic App
              </h2>
            </div>
                          <h4 className='text-center'>Submit your Suggestion/Query</h4>
                          {isSubmitted && <p>Thank you! Your message has been sent.</p>}
                          <form onSubmit={handleSubmit}>
                              <div className='mb-3'>
                                  <label className='form-label'>Name</label>
                                  <input
                                      className='form-control'
                                      type="text"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      required
                                  />
                                  {errors.name && <p className="error">{errors.name}</p>}
                              </div>

                              <div className='mb-3'>
                                  <label className='form-label'>Email:</label>
                                  <input
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      className='form-control'
                                      required
                                  />
                                  {errors.email && <p className="error">{errors.email}</p>}
                              </div>

                              <div className='mb-3'>
                                  <label className='form-label'>Subject:</label>
                                  <input
                                      type="text"
                                      name="subject"
                                      value={formData.subject}
                                      onChange={handleChange}
                                      className='form-control'
                                      required
                                  />
                                  {errors.subject && <p className="error">{errors.subject}</p>}
                              </div>

                              <div className='mb-3'>
                                  <label className='form-label'>Message:</label>
                                  <textarea
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      className='form-control'
                                      required
                                  />
                                  {errors.message && <p className="error">{errors.message}</p>}
                              </div>
                              <div className='justify-content-center d-flex gap-3'>
                              <Link to="/islamic-app/register" className='btn btn-outline-success'> Sign Up</Link>
                              <Link to="/islamic-app/" className='btn btn-outline-success'> Login</Link>
                                <button type="submit" className='btn btn-primary w-25'>Submit</button>
                              </div>
                              
                          </form>
                      </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactForm;