import React from "react";
import ComingSoon from "../components/Cards/ComingSoon";
import CalendarIcon from '../assets/images/calendar.gif';
import IslamicFullCalendar from "./IslamicFullCalendar";

const Calendar = () => {
    return(
        <>
        <div className="container mt-6 text-center bg-white rounded border border-success-subtle shadow-sm w-50 d-none">
            <img src={CalendarIcon} alt="Qibla" className="img-fluid mb-3" width={100} height={100} /> <br></br>
            <ComingSoon />
            {/* <p>This feature is under development and it will be available soon.</p> */}
            
         </div>

         <IslamicFullCalendar />
                
                
        
        
    </>
    )
};

export default Calendar;