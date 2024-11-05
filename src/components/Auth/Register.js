import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, selectAuth } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/app-logo.png';


const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData.username, formData.email, formData.password));
    const reguser = formData.username;
    console.log(reguser);
  };

  if (auth.isAuthenticated) {
    return <p>Welcome, {auth.user.username}!</p>; // Redirect or show authenticated content
  }

  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 border border-1 border-success border-opacity-25 p-4 shadow rounded'>
            <div className='mb-3'>
              <h2 className='text-center'>
                <img src={Logo} alt="Islamic App Logo" width="40" height="40" className="d-inline-block" />
                Islamic App
              </h2>
            </div>

            <form onSubmit={onSubmit} className=''>
              <h4 className='mb-3 text-center'>Sign Up</h4>
              <div className='mb-3'>
                <label className='form-label'>Username:</label>
                <input className='form-control' type="text" name="username" value={formData.username} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input className='form-control' type="email" name="email" value={formData.email} onChange={onChange} required />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name="password" value={formData.password} onChange={onChange} required />
              </div>
              <div className='text-center'>
                <button className='w-25  mb-2 btn btn-primary' type="submit" disabled={auth.loading}>
                  {auth.loading ? 'Signing Up...' : 'Sign Up'}
                </button>

                <div class="SignUpForm_text__UNhtT SignUpForm_term_text__ILXa9 font-sm">By signing up you agree to our <a href="https://www.w3schools.com/about/about_copyright.asp" target="_blank" rel="noopener noreferrer">Terms of Service </a>and <a href="https://www.w3schools.com/about/about_privacy.asp" target="_blank" rel="noopener noreferrer">Privacy Policy</a></div>
                
              </div>
              
              {auth.error && <p>{auth.error}</p>}

              <hr />

              <div className="mt-3">
                <p className='text-center'>Already have an account? <Link to="/islamic-app"> Login</Link></p>
              </div>
            </form>

            
        </div>
        <div className='col-sm-4'></div>
      </div>
      <div className='row'>
      <div className='col-sm-4'></div>
        <div className='col-sm-4'>
        <div class="d-flex gap-3 w-50 mx-auto mt-3">
                <a href="https://www.youtube.com/@w3schools" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                <a href="https://www.linkedin.com/company/w3schools.com/" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                <a href="https://discord.gg/6Z7UaRbUQM" aria-label="Discord"><i class="bi bi-discord"></i></a>
                <a href="https://www.facebook.com/w3schoolscom/" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/w3schools.com_official/" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              </div>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </div>
    
    </>
  );
};

export default Register;