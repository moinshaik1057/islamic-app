import React from 'react';
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdFullscreenExit } from "react-icons/md";

const FullscreenCounterCard = ({ count, increment, decrement, reset, exitFullscreen }) => {
    return (
        <div className="fullscreen-card">
            <div className="card-body text-center">
                <h6 className='px-3'>Click/Touch anywhere on the screen to count</h6>
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
                            <i class="bi bi-dash-circle"></i>
                        </button>
                        <button 
                            className="btn btn-secondary m-2" 
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
                        className='fs-6 fw-semibold fixed-top mt-1 mx-3 btn btn-warning'>Exit Full Screen <MdFullscreenExit /></span>
                    </div>
                    <button className='round-button shadow mt-3'>Count</button>
                </div>
            </div>
        </div>
    );
};

export default FullscreenCounterCard;
