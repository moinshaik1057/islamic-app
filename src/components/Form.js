// import React, { useState } from 'react';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //const urlold = 'https://script.google.com/macros/library/d/1EUSCLwu4zTJINVPXlHUUP4X150vNAtAIpRgsPuWMRXV0GNXzUxg2H1Mk/1';
//   const urlnew = 'https://script.google.com/macros/s/AKfycbygkKRdntvfFn-l_50thY0qGefzmHDoz3xB0PobtCdTV56xrGodd1-mSzfvCviRifsF/exec';

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(urlnew, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//       mode: 'no-cors'
//     })
//       .then(() => setStatus('Thank you for your feedback!'))
//       .catch(() => setStatus('Submission failed. Try again.'));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </label>
//       <label>
//         Message:
//         <textarea name="message" value={formData.message} onChange={handleChange} required />
//       </label>
//       <button type="submit">Submit</button>
//       {status && <p>{status}</p>}
//     </form>
//   );
// };

// export default FeedbackForm;

// =====================================================================================================
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const url = 'https://script.google.com/macros/s/AKfycbygkKRdntvfFn-l_50thY0qGefzmHDoz3xB0PobtCdTV56xrGodd1-mSzfvCviRifsF/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      mode: 'no-cors',
    })
      .then(() => {
        setStatus('Thank you for your feedback!');
        setShowToast(true); // Show toast with success message
        setFormData({ name: '', email: '', message: '' }); // Clear form

        // Automatically hide toast after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        setStatus('Submission failed. Try again.');
        setShowToast(true); // Show toast with error message

        // Automatically hide toast after 3 seconds
        setTimeout(() => setShowToast(false), 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <h4 className="mb-3">Feedback Form</h4>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className='text-center'>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button></div>
      </form>

      {/* Toast Message */}
      {showToast && (
        <div
          className="toast-container position-fixed top-50 start-50 translate-middle p-3"
          style={{ zIndex: 1050 }}
        >
          <div className="toast align-items-center text-bg-success border-0 shadow show" role="alert">
            <div className="d-flex">
              <div className="toast-body">
                {status}
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                aria-label="Close"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
