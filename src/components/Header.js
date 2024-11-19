// import React from 'react';
// import { Link } from 'react-router-dom';
// import Icon from '../assets/icons/nabawimosque.png';

// const Header = () => {
//   return (
//     <>
    

//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container">
//     <Link to="/islamic-app" className='navbar-brand'>
//         <img src={Icon} className='img-fluid' alt='app icon' width={30} height={30} />
//          &nbsp; Islamic App
//         </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div className="offcanvas-header">
//       <Link to="/islamic-app" className='navbar-brand'>
//         <img src={Icon} className='img-fluid' alt='app icon' width={30} height={30} />
//          &nbsp; Islamic App
//         </Link>
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/islamic-app"><i className="bi bi-house-fill"></i> Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/feedback"><i className="bi bi-chat-right-dots-fill"></i> Feedback</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/quran"><i className="bi bi-book-fill"></i> Quran</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/qibla"><i className="bi bi-compass-fill"></i> Qibla</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/calendar"><i className="bi bi-calendar-day-fill"></i> Calendar</Link>
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

// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Icon from '../assets/icons/nabawimosque.png';
// //import Logo from '../assets/images/IslamicLogo.png';
// //import Moon from '../assets/images/8251620.jpg';

// const Header = () => {
//   const offcanvasRef = useRef(null);

//   useEffect(() => {
//     const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
//     const offcanvasElement = offcanvasRef.current;
//     if (offcanvasElement) {
//       offcanvasElement.bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
//     }
//   }, []);

//   const handleLinkClick = () => {
//     if (offcanvasRef.current && offcanvasRef.current.bsOffcanvas) {
//       offcanvasRef.current.bsOffcanvas.hide();
//     }

//     // Remove the backdrop manually
//     const backdrop = document.querySelector('.offcanvas-backdrop');
//     if (backdrop) {
//       backdrop.remove();
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
//       <div className="container">
//         <Link to="/islamic-app" className="navbar-brand">
//           <img src={Icon} className="img-fluid" alt="app icon" width={30} height={30} />
//           &nbsp; Islam Hub
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="offcanvas offcanvas-start"
//           ref={offcanvasRef}
//           tabIndex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <div className="offcanvas-header">
//             <Link to="/islamic-app" className="navbar-brand">
//               <img src={Icon} className="img-fluid" alt="app icon" width={30} height={30} />
//               &nbsp; Islamic App
//             </Link>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/islamic-app" onClick={handleLinkClick}>
//                   <i className="bi bi-house-fill"></i> Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/feedback" onClick={handleLinkClick}>
//                   <i className="bi bi-chat-right-dots-fill"></i> Feedback
//                 </Link>
//               </li>
//               {/* <li className="nav-item">
//                 <Link className="nav-link" to="/quran" onClick={handleLinkClick}>
//                   <i className="bi bi-book-fill"></i> Quran
//                 </Link>
//               </li> */}
//               <li className="nav-item">
//                 <Link className="nav-link" to="/qibla" onClick={handleLinkClick}>
//                   <i className="bi bi-compass-fill"></i> Qibla
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/calendar" onClick={handleLinkClick}>
//                   <i className="bi bi-calendar-day-fill"></i> Calendar
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about" onClick={handleLinkClick}>
//                   <i className="bi bi-calendar-day-fill"></i> About Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// =============================================================================================================

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

      // Add an event listener to remove the backdrop when offcanvas is hidden
      offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
      });
    }

    // Clean up the event listener on component unmount
    return () => {
      if (offcanvasElement) {
        offcanvasElement.removeEventListener('hidden.bs.offcanvas', () => {
          const backdrop = document.querySelector('.offcanvas-backdrop');
          if (backdrop) {
            backdrop.remove();
          }
        });
      }
    };
  }, []);

  const handleLinkClick = () => {
    if (offcanvasRef.current && offcanvasRef.current.bsOffcanvas) {
      offcanvasRef.current.bsOffcanvas.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
      <div className="container">
        <Link to="/islamic-app" className="navbar-brand d-none">
          <img src={Icon} className="img-fluid" alt="app icon" width={30} height={30} />
          &nbsp; Islam Hub
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
              {/* <li className="nav-item">
                <Link className="nav-link" to="/feedback" onClick={handleLinkClick}>
                  <i className="bi bi-chat-right-dots-fill"></i> Feedback
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/qibla" onClick={handleLinkClick}>
                  <i className="bi bi-compass-fill"></i> Qibla
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/calendar" onClick={handleLinkClick}>
                  <i className="bi bi-calendar-day-fill"></i> Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                <i className="bi bi-info-circle-fill"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleLinkClick}>
                <i className="bi bi-chat-right-text-fill"></i> Contact Us
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
