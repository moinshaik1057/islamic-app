// import React, { useState } from 'react';
// import { BsFillPatchPlusFill } from "react-icons/bs";
// import { BsFillPatchMinusFill } from "react-icons/bs";
// import { BsArrowCounterclockwise } from "react-icons/bs";
// import { MdFullscreen } from "react-icons/md";
// import FullscreenCounterCard from './FullscreenCounterCard';

// const CounterCard = () => {
//     const [count, setCount] = useState(0);
//     const [isFullscreen, setIsFullscreen] = useState(false);

//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);

//     const enterFullscreen = () => {
//         setIsFullscreen(true);
//         document.documentElement.requestFullscreen();
//     };

//     const exitFullscreen = () => {
//         setIsFullscreen(false);
//         if (document.fullscreenElement) {
//             document.exitFullscreen();
//         }
//     };

//     const handleScreenClick = () => {
//         if (isFullscreen) {
//             increment();
//         }
//     };

//     return (
//         <>
//             {isFullscreen ? (
//                 <div onClick={handleScreenClick}>
//                     <FullscreenCounterCard
//                         count={count}
//                         increment={increment}
//                         decrement={decrement}
//                         reset={reset}
//                         exitFullscreen={exitFullscreen}
//                     />
//                 </div>
//             ) : (
//                 <div className="card w-100">
//                     <div className="card-body">
//                         <h6 className="card-title d-flex justify-content-between">
//                             <span>Tasbeeh Counter</span>
//                             <span onClick={enterFullscreen}><MdFullscreen /></span>
//                         </h6>
//                         <div className="d-flex justify-content-between">
//                             <button className="border-0 bg-transparent fs-4 text-warning" onClick={decrement}>
//                                 <BsFillPatchMinusFill />
//                             </button>
//                             <p className="card-text w-25 align-self-center mb-0 fw-bold">{count}/100</p>
//                             <button className="border-0 bg-transparent fs-4 text-success" onClick={increment}>
//                                 <BsFillPatchPlusFill />
//                             </button>
//                             <button className="border-0 bg-transparent fs-4 text-danger" onClick={reset}>
//                                 <BsArrowCounterclockwise />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default CounterCard;

import React, { useState } from 'react';
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdFullscreen } from "react-icons/md";
import FullscreenCounterCard from './FullscreenCounterCard';

const CounterCard = () => {
    const [count, setCount] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        triggerAnimation();
    };

    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    const enterFullscreen = () => {
        setIsFullscreen(true);
        document.documentElement.requestFullscreen();
    };

    const exitFullscreen = () => {
        setIsFullscreen(false);
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    const handleScreenClick = () => {
        if (isFullscreen) {
            increment();
        }
    };

    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300); // Match the duration of the CSS animation
    };

    return (
        <>
            {isFullscreen ? (
                <div onClick={handleScreenClick}>
                    <FullscreenCounterCard
                        count={count}
                        increment={increment}
                        decrement={decrement}
                        reset={reset}
                        exitFullscreen={exitFullscreen}
                    />
                </div>
            ) : (
                <div className="card w-100">
                    <div className="card-body">
                        <h6 className="card-title d-flex justify-content-between">
                            <span>Tasbeeh Counter</span>
                            {/* <span>Subhanallah</span> */}
                            <span onClick={enterFullscreen} className='font-sm-3 btn btn-success btn-sm rounded-pill'>Full Screen <MdFullscreen /></span>
                        </h6>
                        <div className="d-flex justify-content-between">
                            <button className="border-0 bg-transparent fs-4 text-danger" onClick={reset}>
                                <BsArrowCounterclockwise />
                            </button>
                            <button className="border-0 bg-transparent fs-4 text-warning" onClick={decrement}>
                                <BsFillPatchMinusFill />
                            </button>
                            <p className={`card-text w-25 align-self-center mb-0 fw-bold ${isAnimating ? 'animated-number' : ''}`}>
                                {count}/100
                            </p>
                            <button className="border-0 bg-transparent fs-4 text-success" onClick={increment}>
                                <BsFillPatchPlusFill />
                            </button>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CounterCard;
