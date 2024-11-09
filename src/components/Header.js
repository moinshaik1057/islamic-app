// import React from 'react';
// import { Link } from 'react-router-dom';
// import Icon from '../assets/icons/nabawimosque.png';

// const Header = () => {
//   return (
//     <>
    

//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container">
//     <Link to="/islamic-app" className='navbar-brand'>
//         <img src={Icon} className='img-fluid' alt='app icon' width={30} height={30} />
//          &nbsp; Islamic App
//         </Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div class="offcanvas-header">
//       <Link to="/islamic-app" className='navbar-brand'>
//         <img src={Icon} className='img-fluid' alt='app icon' width={30} height={30} />
//          &nbsp; Islamic App
//         </Link>
//         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div class="offcanvas-body">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/islamic-app"><i class="bi bi-house-fill"></i> Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/feedback"><i class="bi bi-chat-right-dots-fill"></i> Feedback</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/quran"><i class="bi bi-book-fill"></i> Quran</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/qibla"><i class="bi bi-compass-fill"></i> Qibla</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/calendar"><i class="bi bi-calendar-day-fill"></i> Calendar</Link>
//             </li>
//           </ul>
        
//       </div>
//     </div>
//   </div>
// </nav>
//     </>
//   );
// };

// export default Header;

// ==========================================================================================

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/icons/nabawimosque.png';

const Header = () => {
  const offcanvasRef = useRef(null);

  useEffect(() => {
    const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      offcanvasElement.bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
    }
  }, []);

  const handleLinkClick = () => {
    if (offcanvasRef.current && offcanvasRef.current.bsOffcanvas) {
      offcanvasRef.current.bsOffcanvas.hide();
    }

    // Remove the backdrop manually
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/islamic-app" className="navbar-brand">
          <img src={Icon} className="img-fluid" alt="app icon" width={30} height={30} />
          &nbsp; Islamic App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          ref={offcanvasRef}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link to="/islamic-app" className="navbar-brand">
              <img src={Icon} className="img-fluid" alt="app icon" width={30} height={30} />
              &nbsp; Islamic App
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/islamic-app" onClick={handleLinkClick}>
                  <i className="bi bi-house-fill"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback" onClick={handleLinkClick}>
                  <i className="bi bi-chat-right-dots-fill"></i> Feedback
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/quran" onClick={handleLinkClick}>
                  <i className="bi bi-book-fill"></i> Quran
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/qibla" onClick={handleLinkClick}>
                  <i className="bi bi-compass-fill"></i> Qibla
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar" onClick={handleLinkClick}>
                  <i className="bi bi-calendar-day-fill"></i> Calendar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
