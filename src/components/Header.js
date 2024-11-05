import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { selectAuth, logout } from '../redux/authSlice'; 
import { useNavigate } from "react-router-dom";
import Logo from '../assets/icons/app-logo.png';
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/islamic-app');  // Redirect to the login page
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/islamic-app">
            <img src={Logo} alt="Islamic App Logo" width="30" height="30" className="d-inline-block align-top" />
            Islamic App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/islamic-app" className='nav-link active'><span>Home</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/quranreader" className='nav-link'><span>Quran</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/qibla">Qibla</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
            </ul>
            <div className="me-0">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item me-2">
                  <ul className="navbar-nav fw-semibold">
                    <li className="nav-item">{user?.username || 'Guest'}</li>
                  </ul>
                </li>
                <li className="nav-item dropstart font-sm">
                  <a className="nav-link dropdown-toggle p-0" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsPersonCircle />
                  </a>
                  <ul className="dropdown-menu font-sm">
                    <li>
                      <Link to="/profile" className='dropdown-item fw-semibold'>
                        <i className="bi bi-person-fill"></i> Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className='dropdown-item fw-semibold'>
                        <i className="bi bi-key-fill"></i> Change Password
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li onClick={handleLogout} className='cursor-pointer'>
                      <span className="dropdown-item fw-semibold"><i className="bi bi-box-arrow-right"></i> Logout</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
