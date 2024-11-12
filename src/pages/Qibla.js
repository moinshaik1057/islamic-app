import React from "react";
import ComingSoon from "../components/Cards/ComingSoon";
import QiblaImg from '../assets/images/qibla.png';


const Qibla = () => {
    return(
        <>
            <div class="container mt-6 text-center">
                <img src={QiblaImg} alt="Qibla" className="img-fluid mb-3" width={100} height={100} /> <br></br>
                <ComingSoon />
                {/* <p>This feature is under development and it will be available soon.</p> */}
                
             </div>
                    
                    
            
            
        </>
    )
};

export default Qibla;