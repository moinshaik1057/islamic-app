// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Auth/Login.js';
// import Register from './components/Auth/Register.js';
// import Home from './pages/Home';
// import QuranReader from './components/Cards/QuranReader.js';


// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/quranreader" element={<QuranReader />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

//==========================================

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectAuth } from './redux/authSlice.js';

// import Login from './components/Auth/Login.js';
// import Register from './components/Auth/Register.js';
// import Home from './pages/Home';
// import QuranReader from './components/Cards/QuranReader.js';

// const AppRoutes = () => {
//     const { isAuthenticated } = useSelector(selectAuth);

//     return (
//         <Router>
//             <Routes>
//                 {!isAuthenticated ? (
//                     <>
//                         <Route path="/" element={<Register />} />
//                         <Route path="/login" element={<Login />} />
//                         {/* <Route path="*" element={<Navigate to="/login" />} /> */}
//                     </>
//                 ) : (
//                     <>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/quranreader" element={<QuranReader />} />
//                         <Route path="*" element={<Navigate to="/" />} />
//                     </>
//                 )}
//             </Routes>
//         </Router>
//     );
// };

// export default AppRoutes;

//================================
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // No BrowserRouter here
import { useSelector } from 'react-redux';
import { selectAuth } from './redux/authSlice.js';

import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import ForgotPassword from './components/Auth/fogotPassword.js';
import ResetPassword from './components/Auth/ResetPassword.js';
import ContactForm from './components/ContactForm.js';
import Home from './pages/Home';
import QuranReader from './components/Cards/QuranReader.js';
import Users from './pages/Users.js';


const AppRoutes = () => {
    const { isAuthenticated } = useSelector(selectAuth);

    return (
        <Routes>
            {!isAuthenticated ? (
                <>
                    <Route path="/islamic-app/register" element={<Register />} />
                    <Route path="/islamic-app/forgotpwd" element={<ForgotPassword />} />
                    <Route path="/islamic-app/resetpwd" element={<ResetPassword />} />
                    <Route path="/islamic-app/contact" element={<ContactForm />} />
                    <Route path="/islamic-app" element={<Login />} />
                </>
            ) : (
                <>
                    
                    <Route path="/islamic-app" element={<Home />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/quranreader" element={<QuranReader />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    
                    
                </>
            )}
        </Routes>
    );
};

export default AppRoutes;