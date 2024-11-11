// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';
// import { fetchIslamicDate } from '../../redux/islamicDateSlice';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const IslamicDateCard = () => {
//     //const weather = useSelector((state) => state.weather);
//     const dispatch = useDispatch();
//     const [location, setLocation] = useState({ lat: null, lon: null });
//     const [geoError, setGeoError] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const today = new Date();
//     // const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
//     const formattedDate = `${today.getDate()} ${today.toLocaleString('en-US', { month: 'long' })} ${today.getFullYear()}`;
//     const islamicDate = useSelector((state) => state.islamicDate.date);
//     const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
//     const islamicDateError = useSelector((state) => state.islamicDate.error);

//     useEffect(() => {
//         if (window.location.protocol === 'https:' && "geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ lat: latitude, lon: longitude });
//                     setGeoError(null);
//                 },
//                 (error) => {
//                     console.error('Error getting geolocation:', error);
//                     if (error.code === 1) { // User denied geolocation
//                         setShowModal(true);
//                     } else {
//                         setGeoError(`Error getting geolocation: ${error.message} (Code: ${error.code})`);
//                     }
//                 }
//             );
//         } else if (window.location.protocol !== 'https:') {
//             setGeoError('Geolocation requires HTTPS. Please access the site over HTTPS.');
//         } else {
//             setGeoError('Geolocation is not supported by your browser.');
//         }
//     }, []);

//     useEffect(() => {
//         if (location.lat && location.lon) {
//             dispatch(fetchPrayerTimes({ lat: location.lat, lon: location.lon }));
//             dispatch(fetchIslamicDate());
//         }
//     }, [location, dispatch]);

//     const handleModalClose = () => setShowModal(false);
//     // const handleEnableLocation = () => {
//     //     handleModalClose();
//     //     window.open('settings://location', '_blank');
//     // };

//     if (islamicDateLoading) return <div>Loading Islamic date...</div>;
//     if (islamicDateError) return <div>Error fetching Islamic date: {islamicDateError}</div>;

//     return (
//         <div className="card p-2 rounded-1 w-100 mb-1" style={{ fontSize: 12 }}>
//             {geoError && <div className="alert alert-warning">{geoError}</div>}
//             {islamicDate && (
//                 <div className='d-flex justify-content-between fw-semibold'>
//                     <span className='d-inline-block pt-1 ms-1'> {formattedDate} </span> <span className='d-inline-block pt-1 mx-2'>/</span> <span className='d-inline-block pt-1 ms-1'> {islamicDate.day} {islamicDate.month.en} {islamicDate.year} </span>
                    
//                 </div>
//             )}
//             <Modal show={showModal} onHide={handleModalClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Location Access Required</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Please enable location services on your device to get accurate prayer times and Islamic date information.
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleModalClose}>
//                         Cancel
//                     </Button>
//                     {/* <Button variant="primary" onClick={handleEnableLocation}>
//                         Enable Location
//                     </Button> */}
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default IslamicDateCard;

// =============================================================================

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrayerTimes } from '../../redux/prayerSlice';
import { fetchIslamicDate } from '../../redux/islamicDateSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const IslamicDateCard = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [geoError, setGeoError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.toLocaleString('en-US', { month: 'long' })} ${today.getFullYear()}`;
    const islamicDate = useSelector((state) => state.islamicDate.date);
    const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
    const islamicDateError = useSelector((state) => state.islamicDate.error);

    useEffect(() => {
        if (window.location.protocol === 'https:' && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                    setGeoError(null);
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                    if (error.code === 1) { 
                        setShowModal(true);
                    } else {
                        setGeoError(`Error getting geolocation: ${error.message} (Code: ${error.code})`);
                    }
                }
            );
        } else if (window.location.protocol !== 'https:') {
            setGeoError('Geolocation requires HTTPS. Please access the site over HTTPS.');
        } else {
            setGeoError('Geolocation is not supported by your browser.');
        }
    }, []);

    useEffect(() => {
        if (location.lat && location.lon) {
            dispatch(fetchPrayerTimes({ lat: location.lat, lon: location.lon }));
            dispatch(fetchIslamicDate());
        }
    }, [location, dispatch]);

    const handleModalClose = () => setShowModal(false);

    return (
        <div className="card p-2 rounded-1 w-100 mb-1" style={{ fontSize: 12 }}>
            {geoError && <div className="alert alert-warning">{geoError}</div>}

            {/* Display Placeholder if Loading */}
            {islamicDateLoading ? (
                <div className="d-flex justify-content-between fw-semibold">
                    <div className="placeholder-glow w-100">
                        <div className="placeholder col-6"></div>
                        <div className="placeholder col-6"></div>
                    </div>
                </div>
            ) : (
                islamicDate && (
                    <div className='d-flex justify-content-between fw-semibold'>
                        <span className='d-inline-block pt-1 ms-1'> {formattedDate} </span> 
                        <span className='d-inline-block pt-1 mx-2'>/</span> 
                        <span className='d-inline-block pt-1 ms-1'> {islamicDate.day} {islamicDate.month.en} {islamicDate.year} </span>
                    </div>
                )
            )}

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Location Access Required</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please enable location services on your device to get accurate prayer times and Islamic date information.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default IslamicDateCard;
