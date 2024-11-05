import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectAuth } from '../../redux/authSlice';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../assets/icons/app-logo.png';
import PrayerTimesCard from '../Cards/PrayerTimesCard';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData.email, formData.password));
  };

  if (auth.isAuthenticated) {
    return <p>Welcome, {auth.user.username}!</p>; // Redirect or show authenticated content
  }
  

  return (
    <>
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='border border-1 border-success border-opacity-25 p-4 shadow rounded'>
            <div className='mb-3'>
              <h2 className='text-center'>
                <img src={Logo} alt="Islamic App Logo" width="40" height="40" className="d-inline-block" />
                Islamic App
              </h2>
            </div>

            <PrayerTimesCard />

            <form className='' onSubmit={onSubmit}>
              <h4 className='text-center mt-2'>Login</h4>
              <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="email" name="email" value={formData.email} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name="password" value={formData.password} onChange={onChange} required />
              </div>
              <div className='d-flex justify-content-around'>
                
                   <Link to="/islamic-app/forgotpwd" className='text-black'> <i class="bi bi-exclamation-circle"></i> Forgot password </Link>
                
                <button className='btn btn-success w-50' type="submit" disabled={auth.loading}>
                  {auth.loading ? 'Logging in...' : 'Login'}
                </button>
                
              </div>
              {auth.error && (
                <p className='text-danger'>{typeof auth.error === 'object' ? auth.error.msg : auth.error}</p>
              )}

              <hr />
              <div className="mt-3 text-center">
                <p>Don't have an account? <Link to="/islamic-app/register" className='link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'> <i class="bi bi-person-fill-up"></i> Sign Up</Link> </p>
                <p> <Link to="/islamic-app/contact" className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'> <i class="bi bi-chat-right-dots"></i> Suggestions/Feedback </Link> </p>
              </div>
            </form>
            <div className="text-center small">Islamic App &copy; All rights reserved {new Date().getFullYear()}
            </div>

          </div>
        </div>
        <div className='col-sm-4'>
        
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Login;
