
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const IslamicFullCalendar = () => {
//   const [calendar, setCalendar] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Set month and year to fetch data
//   const month = new Date().getMonth() + 1; // Example: November
//   const year = new Date().getFullYear(); // Example: 2024


//   useEffect(() => {
//     const fetchHijriCalendar = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
//         );
//         setCalendar(response.data.data); // Data from API
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch the calendar.");
//         setLoading(false);
//       }
//     };

//     fetchHijriCalendar();
//   }, [month, year]);

//   return (
//     <div className='mt-6'>
//       <h2> Calendar for {year}, Month: {month}</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Gregorian Date</th>
//               <th>Hijri Date</th>
//               <th>Hijri Month</th>
//               <th>Weekday</th>
//             </tr>
//           </thead>
//           <tbody>
//             {calendar.map((day, index) => (
//               <tr key={index}>
//                 <td>{day.gregorian.date}</td>
//                 <td>{day.hijri.day}</td>
//                 <td>{day.hijri.month.en}</td>
//                 <td>{day.hijri.weekday.en}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default IslamicFullCalendar;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../styles/Calendar.css';

// const IslamicFullCalendar = () => {
//   const [calendar, setCalendar] = useState([]);
//   const [month, setMonth] = useState(new Date().getMonth() + 1); // Current Gregorian month
//   const [year, setYear] = useState(new Date().getFullYear()); // Current Gregorian year
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // const fetchCalendar = async () => {
//     //   try {
//     //     const response = await axios.get(
//     //       `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
//     //     );
//     //     const fetchedData = response.data.data;

//     //     // Transform data to a calendar grid format
//     //     const firstDay = new Date(fetchedData[0].gregorian.date).getDay(); // Day of the week (0 = Sunday)
//     //     const daysInMonth = fetchedData.length;
//     //     const weeks = [];
//     //     let currentWeek = Array(firstDay).fill(null); // Padding for first week

//     //     fetchedData.forEach((day, index) => {
//     //       currentWeek.push(day);
//     //       if (currentWeek.length === 7 || index === daysInMonth - 1) {
//     //         weeks.push(currentWeek);
//     //         currentWeek = [];
//     //       }
//     //     });

//     //     setCalendar(weeks);
//     //   } catch (error) {
//     //     setError("Failed to fetch the Hijri calendar.");
//     //   }
//     // };

//     const fetchCalendar = async () => {
//         try {
//           const response = await axios.get(`https://api.aladhan.com/v1/gToHCalendar/11/2024`, {
//             params: {
//               adjustment: 0, // Optional adjustment parameter
//             },
//           });
          
//           const fetchedData = response.data.data;
      
//           // Parse the first day's Gregorian date to determine its day of the week
//           const firstDayOfMonth = new Date(fetchedData[0].gregorian.date).getDay();
      
//           // Days in the month
//           const daysInMonth = fetchedData.length;
      
//           // Prepare calendar weeks
//           const weeks = [];
//           let currentWeek = Array(firstDayOfMonth).fill(null); // Empty cells for padding
      
//           fetchedData.forEach((day, index) => {
//             currentWeek.push(day);
//             if (currentWeek.length === 7 || index === daysInMonth - 1) {
//               weeks.push(currentWeek);
//               currentWeek = [];
//             }
//           });
      
//           setCalendar(weeks);
//         } catch (error) {
//           setError("Failed to fetch the Hijri calendar.");
//         }
//       };
      
//     fetchCalendar();
//   }, [month, year]);

//   // Move to the previous month
//   const handlePrevMonth = () => {
//     if (month === 1) {
//       setMonth(12);
//       setYear(year - 1);
//     } else {
//       setMonth(month - 1);
//     }
//   };

//   // Move to the next month
//   const handleNextMonth = () => {
//     if (month === 12) {
//       setMonth(1);
//       setYear(year + 1);
//     } else {
//       setMonth(month + 1);
//     }
//   };

//   return (
//     <div className='mt-6'>
//       <h2>
//         Calendar for {month}-{year}
//       </h2>
//       <div>
//         <button onClick={handlePrevMonth}>Previous</button>
//         <button onClick={handleNextMonth}>Next</button>
//       </div>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-sm-12'>
//                 <table className="calendar">
//           <thead>
//             <tr>
//               <th>Sun</th>
//               <th>Mon</th>
//               <th>Tue</th>
//               <th>Wed</th>
//               <th>Thu</th>
//               <th>Fri</th>
//               <th>Sat</th>
//             </tr>
//           </thead>
//           <tbody>
//             {calendar.map((week, i) => (
//               <tr key={i}>
//                 {week.map((day, j) => (
//                   <td key={j}>
//                     {day ? (
//                       <div>
//                         <span>{day.gregorian.day}</span> {/* Gregorian date */}
//                         <br />
//                         <small>{day.hijri.day}</small> {/* Hijri date */}
//                       </div>
//                     ) : null}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//                 </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IslamicFullCalendar;

// ==================================================================================

// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css"; // React-Calendar default styles
// import "../styles/CustomCalendar.css"; // Custom styles for Hijri calendar

// const IslamicFullCalendar = () => {
//   const [hijriData, setHijriData] = useState({});
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [error, setError] = useState(null);

//   // Fetch Hijri calendar data when the month changes
//   useEffect(() => {
//     const fetchHijriCalendar = async () => {
//       const month = currentDate.getMonth() + 1; // Get the current Gregorian month
//       const year = currentDate.getFullYear(); // Get the current Gregorian year

//       try {
//         const response = await axios.get(
//           `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
//         );
       
          
//         const fetchedData = response.data.data;

//         // // Create a mapping of Gregorian dates to Hijri dates
//         // const hijriMapping = {};
//         // fetchedData.forEach((day) => {
//         //   hijriMapping[day.gregorian.date] = day.hijri;
//         // });

//         // Create a mapping of Gregorian dates to Hijri dates
//         const hijriMapping = fetchedData.reduce((map, day) => {
//             const gregorianDate = day.gregorian.date; // Ensure this is in YYYY-MM-DD format
//             const hijriDate = {
//             day: day.hijri.day,
//             month: day.hijri.month,
//             year: day.hijri.year,
//             };
//             map[gregorianDate] = hijriDate;
//             return map;
//         }, {});
  

//         setHijriData(hijriMapping);
//       } catch (error) {
//         console.error("Error fetching Hijri calendar:", error);
//         setError("Failed to fetch Hijri calendar.");
//       }
//     };

//     // const fetchHijriCalendar = async () => {
//     //     const month = currentDate.getMonth() + 1; // Get the current Gregorian month
//     //     const year = currentDate.getFullYear(); // Get the current Gregorian year
      
//     //     try {
//     //       const response = await axios.get(
//     //         `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}?adjustment=-2`
//     //       );
//     //       const fetchedData = response.data.data;
      
//     //       // Create a mapping of Gregorian dates to adjusted Hijri dates
//     //       const hijriMapping = {};
//     //       fetchedData.forEach((day) => {
//     //         hijriMapping[day.gregorian.date] = day.hijri;
//     //       });
      
//     //       setHijriData(hijriMapping);
//     //     } catch (error) {
//     //       console.error("Error fetching Hijri calendar:", error);
//     //       setError("Failed to fetch Hijri calendar.");
//     //     }
//     //   };
      
//     fetchHijriCalendar();
//   }, [currentDate]);

//   // Handle month/year change
//   const handleActiveDateChange = ({ activeStartDate }) => {
//     setCurrentDate(activeStartDate);
//   };

//   // Render Hijri date in the calendar tile
//   const renderTileContent = ({ date, view }) => {
//     if (view === "month") {
//       const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
//       const hijriDate = hijriData[formattedDate];

//       return hijriDate ? (
//         <div className="tile-content">
//           <span className="gregorian-date">{date.getDate()}</span>
//           <span className="hijri-date">{hijriDate.day}</span>
//         </div>
//       ) : (
//         <span className="gregorian-date">{date.getDate()}</span>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="mt-6">
//       <h2> Calendar</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <Calendar
//           onActiveStartDateChange={handleActiveDateChange}
//           tileContent={renderTileContent}
//           value={currentDate}
//         />
//       )}
//     </div>
//   );
// };

// export default IslamicFullCalendar;

// ==================================================================================

// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css"; // React-Calendar default styles
// import "../styles/CustomCalendar.css"; // Custom styles for Hijri calendar

// const IslamicFullCalendar = () => {
//   const [hijriData, setHijriData] = useState([]); // Store the entire response data
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [error, setError] = useState(null);

//   // Fetch Hijri calendar data
//   useEffect(() => {
//     const fetchHijriCalendar = async () => {
//       const month = currentDate.getMonth() + 1; // Get the current Gregorian month
//       const year = currentDate.getFullYear(); // Get the current Gregorian year

//       try {
//         const response = await axios.get(
//           `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
//         );
//         setHijriData(response.data.data); // Save the API response
//       } catch (error) {
//         console.error("Error fetching Hijri calendar:", error);
//         setError("Failed to fetch Hijri calendar.");
//       }
//     };

//     fetchHijriCalendar();
//   }, [currentDate]);

//   // Handle month/year change
//   const handleActiveDateChange = ({ activeStartDate }) => {
//     setCurrentDate(activeStartDate);
//   };

//   // Render Hijri date in the calendar tile
// //   const renderTileContent = ({ date, view }) => {
// //     if (view === "month") {
// //       const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
// //       const hijriDate = hijriData.find(
// //         (day) => day.gregorian.date === formattedDate
// //       );

// //       return hijriDate ? (
// //         <div className="tile-content">
// //           <span className="gregorian-date">{date.getDate()}</span>
// //           <span className="hijri-date">{hijriDate.hijri.day}</span>
// //         </div>
// //       ) : (
// //         <span className="gregorian-date">{date.getDate()}</span>
// //       );
// //     }
// //     return null;
// //   };

// const renderTileContent = ({ date, view }) => {
//     if (view === "month") {
//       const dayOfMonth = date.getDate(); // Get the day of the month (1-31)
//       const hijriDate = hijriData[dayOfMonth - 1]; // Subtract 1 since array is zero-indexed
  
//       return hijriDate ? (
//         <div className="tile-content">
//           <span className="gregorian-date">{date.getDate()}</span>
//           <span className="hijri-date">{hijriDate.hijri.day}</span>
//         </div>
//       ) : (
//         <span className="gregorian-date">{date.getDate()}</span>
//       );
//     }
//     return null;
//   };
  



// return (
//     <div className="mt-6">
//       <h2>Islamic Calendar</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <Calendar
//           onActiveStartDateChange={handleActiveDateChange}
//           tileContent={renderTileContent}
//           value={currentDate}
//         />
//       )}
//     </div>
//   );
// };

// export default IslamicFullCalendar;


// ================================================================================================

// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css"; // React-Calendar default styles
// import "../styles/CustomCalendar.css"; // Custom styles for Hijri calendar

// const IslamicFullCalendar = () => {
//   const [hijriData, setHijriData] = useState([]); // Store all dates for the current month
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [error, setError] = useState(null);

//   // Fetch Hijri calendar data
//   useEffect(() => {
//     const fetchHijriCalendar = async () => {
//       const month = currentDate.getMonth() + 1; // Current Gregorian month
//       const year = currentDate.getFullYear(); // Current Gregorian year

//       try {
//         const response = await axios.get(
//           `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
//         );
//         setHijriData(response.data.data); // Save the API response
//       } catch (error) {
//         console.error("Error fetching Hijri calendar:", error);
//         setError("Failed to fetch Hijri calendar.");
//       }
//     };

//     fetchHijriCalendar();
//   }, [currentDate]);

//   // Handle month/year change
//   const handleActiveDateChange = ({ activeStartDate }) => {
//     setCurrentDate(activeStartDate);
//   };

//   // Render Hijri date in the calendar tile
//   const renderTileContent = ({ date, view }) => {
//     if (view === "month") {
//       const dayOfMonth = date.getDate(); // Day of the month (1-31)
//       const hijriDate = hijriData[dayOfMonth - 1]; // Get corresponding Hijri date

//       return hijriDate ? (
//         <div className="tile-content">
//           {/* <span className="gregorian-date">{date.getDate()}</span> */}
//           <span className="hijri-date">{hijriDate.hijri.day}</span>
//         </div>
//       ) : (
//         <span className="gregorian-date">{date.getDate()}</span>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="position-absolute start-50 top-50 translate-middle">
//       <h2>Calendar</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <Calendar
//           onActiveStartDateChange={handleActiveDateChange}
//           tileContent={renderTileContent}
//         />
//       )}
//     </div>
//   );
// };

// export default IslamicFullCalendar;

// ================================================================================================

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css"; // React-Calendar default styles
import "../styles/CustomCalendar.css"; // Custom styles for Hijri calendar

const IslamicFullCalendar = () => {
  //Calendar Header
  const monthGradients = {
    0: "january", // January
    1: "february", // February
    2: "march", // March
    3: "april", // April
    4: "may", // May
    5: "june", // June
    6: "july", // July
    7: "august", // August
    8: "september", // September
    9: "october", // October
    10: "november", // November
    11: "december", // December
  };
  
  
  
  // =====================
  const [hijriData, setHijriData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hijriMonth, setHijriMonth] = useState("");
  const [hijriYear, setHijriYear] = useState("");
  const [error, setError] = useState(null);

  // Calendar Header
  const currentMonth = currentDate.getMonth();
  const headerClass = monthGradients[currentMonth];

  // Fetch Hijri calendar data
  useEffect(() => {
    const fetchHijriCalendar = async () => {
      const month = currentDate.getMonth() + 1; // Current Gregorian month
      const year = currentDate.getFullYear(); // Current Gregorian year

      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
        );
        const data = response.data.data;

        // Set Hijri data
        setHijriData(data);

        // Set Hijri month name (use the first date in the response to determine the month)
        if (data.length > 0) {
          setHijriMonth(data[0].hijri.month.en); // English name of the Hijri month
          setHijriYear(data[0].hijri.year); // Year of the Hijri

        }
      } catch (error) {
        console.error("Error fetching Hijri calendar:", error);
        setError("Failed to fetch Hijri calendar.");
      }
    };

    fetchHijriCalendar();
  }, [currentDate]);

  // Handle month/year change
  const handleActiveDateChange = ({ activeStartDate }) => {
    setCurrentDate(activeStartDate);
  };

  // Reset to today's date
  const handleTodayClick = () => {
    setCurrentDate(new Date());
  };

  // Render Hijri date in the calendar tile
  const renderTileContent = ({ date, view }) => {
    if (view === "month") {
      const dayOfMonth = date.getDate(); // Day of the month (1-31)
      const hijriDate = hijriData[dayOfMonth - 1]; // Get corresponding Hijri date

      return hijriDate ? (
        <div className="tile-content">
          <span className="hijri-date">{hijriDate.hijri.day}</span>
        </div>
      ) : (
        <span className="gregorian-date">{date.getDate()}</span>
      );
    }
    return null;
  };

  return (
    <div className="position-absolute start-50 top-50 translate-middle">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="">
          {/* Calendar Header */}
          <div className={`calendar-header p-3 rounded rounded-bottom-0 ${headerClass}`}>
            {hijriMonth && <h4>{hijriMonth} {hijriYear}</h4>}
            <h5>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h5>
             
          </div>

          {/* Calendar Component */}
          <Calendar
            onActiveStartDateChange={handleActiveDateChange}
            tileContent={renderTileContent}
          />

          {/* "Today" Button */}
          <div className="today-button-container" style={{ marginTop: "10px", textAlign: "center" }}>
            <button onClick={handleTodayClick} style={{ padding: "5px 15px", fontSize: "16px" }}>
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IslamicFullCalendar;
