import React from "react";

const LoaderCard = () => {
    return(
//         <div className="card" aria-hidden="true">
//   <img src="..." className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title placeholder-glow">
//       <span className="placeholder col-6"></span>
//     </h5>
//     <p className="card-text placeholder-glow">
//       <span className="placeholder col-7"></span>
//       <span className="placeholder col-4"></span>
//       <span className="placeholder col-4"></span>
//       <span className="placeholder col-6"></span>
//       <span className="placeholder col-8"></span>
//     </p>
//     <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
//   </div>
// </div>
<div className="card p-2 rounded-1 w-100 mb-1" style={{ fontSize: 12 }}>
                <div className='d-flex justify-content-between fw-semibold'>
                    <span className='d-inline-block pt-1 ms-1'> 09 Noverber 2024 </span> 
                    <span className='d-inline-block pt-1 mx-2'>/</span> 
                    <span className='d-inline-block pt-1 ms-1'> 16 Jumadal-ul-oola 1446 </span>
                    
                </div></div>
    )
}

export default LoaderCard;