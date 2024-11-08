import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/icons/nabawimosque.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/islamic-app" className='navbar-brand'>
        <img src={Icon} className='img-fluid' alt='app icon' width={30} height={30} />
         &nbsp; Islamic App
        </Link>
        {/* <a className="navbar-brand" href="/islamic-app">Islamic App</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/islamic-app"><i class="bi bi-house-fill"></i> Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/quran"><i class="bi bi-book-fill"></i> Quran</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/qibla"><i class="bi bi-compass-fill"></i> Qibla</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar"><i class="bi bi-calendar-day-fill"></i> Calendar</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
