// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Quran from './pages/Quran';
// import NamesOfAllah from './pages/NamesOfAllah';
// // Import other pages as needed

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/quran" element={<Quran />} />
//         <Route path="/names-of-allah" element={<NamesOfAllah />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

// =======================================================================

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Qibla from './pages/Qibla';
import Calendar from './pages/Calendar';
import NamesOfAllah from './pages/NamesOfAllah';
import FeedbackForm from './components/Form';
// Import other pages as needed

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/islamic-app" element={<Home />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/qibla" element={<Qibla />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/names-of-allah" element={<NamesOfAllah />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default AppRoutes;