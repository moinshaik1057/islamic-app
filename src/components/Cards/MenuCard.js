// import React from "react";
// import { GiOpenBook } from "react-icons/gi";
// import { BsFillCompassFill } from "react-icons/bs";
// //import { IoCalendar } from "react-icons/io5";

// const MenuCard = () => {
//     return (
//         <>
//             <div className="row mt-2 font-sm fw-semibold sticky-bottom">
//                 <div className="col-4">
//                     <a href="/">
//                     <div className="card text-center p-4">
//                        <span> <GiOpenBook /> </span> <span>Home</span> 
//                     </div></a>
//                 </div>

//                 <div className="col-4">
//                     <a href="/quranreader">
//                         <div className="card text-center p-4">
//                         <span> <GiOpenBook /> </span> <span>Quran</span> 
//                         </div>
//                     </a>
//                 </div>
//                 <div className="col-4">
//                     <div className="card text-center p-4">
//                     <span> <BsFillCompassFill /> </span> <span>Qibla</span>
//                     </div>
//                 </div>
//                 {/* <div className="col-4">
//                     <div className="card text-center p-4">
//                     <span> <IoCalendar /> </span> <span>Calendar</span>
//                     </div>
                    
//                 </div> */}
//             </div>
//         </>
//     );
// }

// export default MenuCard;

//========================================

// MenuCard.js
import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { BsFillCompassFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const MenuCard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/islamic-app');  // Redirect to the login page
    };


    return (
        <>
            <div className="row mt-2 font-sm fw-semibold ticky-bottom">
                <div className="col-6">
                    <Link to="/">
                        <div className="card text-center p-4">
                            <span> <GiOpenBook /> </span> <span>Home</span> 
                        </div>
                    </Link>
                </div>

                <div className="col-6">
                    <Link to="/quranreader">
                        <div className="card text-center p-4">
                            <span> <GiOpenBook /> </span> <span>Quran</span> 
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/qibla">
                        <div className="card text-center p-4">
                            <span> <BsFillCompassFill /> </span> <span>Qibla</span>
                        </div>
                    </Link>
                </div>
                <div className="col-6">
                        
                        <div className="card text-center p-4 cursor-pointer" onClick={handleLogout}>
                            <span> <FaPowerOff />
                            </span> <span>Logout</span>
                        </div>
                        
                    
                </div>
            </div>
        </>
    );
}

export default MenuCard;
