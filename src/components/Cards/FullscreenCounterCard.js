// import React, { useState } from 'react';
// import { BsFillPatchPlusFill } from "react-icons/bs";
// import { BsFillPatchMinusFill } from "react-icons/bs";
// import { BsArrowCounterclockwise } from "react-icons/bs";
// import { MdFullscreenExit } from "react-icons/md";

// const FullscreenCounterCard = ({ count, increment, decrement, reset, exitFullscreen }) => {
//     return (
//         <div className="fullscreen-card">
//             <div className="card-body text-center">
//                 <h6 className="card-title d-flex justify-content-between">
//                     <span>Tasbeeh Counter</span>
//                     <span onClick={exitFullscreen}><MdFullscreenExit /></span>
//                 </h6>
//                 <div className="d-flex justify-content-center align-items-center flex-column">
//                     <p className="card-text fs-1 fw-bold">{count}/100</p>
//                     <div>
//                         <button className="btn btn-danger m-2" onClick={decrement}>
//                             <BsFillPatchMinusFill />
//                         </button>
//                         <button className="btn btn-success m-2" onClick={reset}>
//                             <BsArrowCounterclockwise />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FullscreenCounterCard;

import React from 'react';
//import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdFullscreenExit } from "react-icons/md";

const FullscreenCounterCard = ({ count, increment, decrement, reset, exitFullscreen }) => {
    return (
        <div className="fullscreen-card">
            <div className="card-body text-center">
                <h6 className="card-title d-flex justify-content-between">
                    <span>Tasbeeh Counter</span>
                    
                </h6>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <p className="card-text fs-1 fw-bold">{count}/100</p>
                    <div>
                        <button 
                            className="btn btn-danger m-2" 
                            onClick={(e) => {
                                e.stopPropagation();
                                decrement();
                            }}
                        >
                            <BsFillPatchMinusFill />
                        </button>
                        <button 
                            className="btn btn-success m-2" 
                            onClick={(e) => {
                                e.stopPropagation();
                                reset();
                            }}
                        >
                            <BsArrowCounterclockwise />
                        </button>
                    </div>
                    <div>
                        <span
                        onClick={(e) => {
                                e.stopPropagation();
                                exitFullscreen();
                            }}
                        className='fs-6 fw-semibold'>Exit Full Screen <MdFullscreenExit /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullscreenCounterCard;
