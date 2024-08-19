import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { BsFillCompassFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";

const MenuCard = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-4">
                    <div className="card text-center p-4">
                       <span> <GiOpenBook /> </span> <span>Quran</span> 
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center p-4">
                    <span> <BsFillCompassFill /> </span> <span>Qibla</span>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-center p-4">
                    <span> <IoCalendar /> </span> <span>Calendar</span>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default MenuCard;