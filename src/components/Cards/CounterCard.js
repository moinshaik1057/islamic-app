import React, { useState } from 'react';
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsFillPatchMinusFill } from "react-icons/bs";
import { BsArrowCounterclockwise } from "react-icons/bs";


const CounterCard = () => {
    // Initialize the counter state
    const [count, setCount] = useState(0);

    // Handler to increment the counter
    const increment = () => {
        setCount(count + 1);
    };

    // Handler to decrement the counter
    const decrement = () => {
        setCount(count - 1);
    };

    // Handler to reset the counter
    const reset = () => {
        setCount(0);
    };

    return (
        <div className="card w-100">
            <div className="card-body">
                <h6 className="card-title">Tasbeeh Counter</h6>
                
                <div className="d-flex justify-content-between">
                    <button className="border-0 bg-transparent fs-4 text-warning" onClick={decrement}>
                        <BsFillPatchMinusFill />
                    </button>
                    <p className="card-text w-25 align-self-center mb-0 fw-bold">{count}/100</p>
                    <button className="border-0 bg-transparent fs-4 text-success" onClick={increment}>
                        <BsFillPatchPlusFill />
                    </button>
                    
                    <button className="border-0 bg-transparent fs-4 text-danger" onClick={reset}>
                        <BsArrowCounterclockwise />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CounterCard;