// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';
// import { fetchIslamicDate } from '../../redux/islamicDateSlice';

// const PrayerTimesCard = () => {
//     const dispatch = useDispatch();
//     const [location, setLocation] = useState({ lat: null, lon: null });

//     const prayerTimes = useSelector((state) => state.prayer.data);
//     const loading = useSelector((state) => state.prayer.loading);
//     const error = useSelector((state) => state.prayer.error);
//     const cityName = useSelector((state) => state.weather.cityName);
//     const [ishraaqTime, setIshraaqTime] = useState(null);
//     const [chaasthTime, setChaasthTime] = useState(null);
//     const [magribTime, setMagribTime] = useState(null);

//     //const islamicDate = useSelector((state) => state.islamicDate.date);
//     const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
//     const islamicDateError = useSelector((state) => state.islamicDate.error);

//     //console.log(prayerTimes);

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             const { latitude, longitude } = position.coords;
//             setLocation({ lat: latitude, lon: longitude });
//         });
//     }, []);

//     useEffect(() => {
//         if (location.lat && location.lon) {
//             dispatch(fetchPrayerTimes({ lat: location.lat, lon: location.lon }));
//             dispatch(fetchIslamicDate());
//         }
//     }, [location, dispatch]);

//     useEffect(() => {
//         if (prayerTimes && prayerTimes.Sunrise) {
//             //Define Sunrise time in hours and minutes
//             const [hours, minutes] = prayerTimes.Sunrise.split(':').map(Number);
//             let sunriseDate = new Date();
//             sunriseDate.setHours(hours, minutes);
    
//             // Add 10 minutes to the sunrise time to calculate Ishraaq time
//             sunriseDate.setMinutes(sunriseDate.getMinutes() + 20);
//             const newHours = sunriseDate.getHours().toString().padStart(2, '0');
//             const newMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
//             const ishraaq = `${newHours}:${newMinutes}`;

//             // Add 100 minutes to the sunrise time to calculate Chaasth time
//             sunriseDate.setMinutes(sunriseDate.getMinutes() + 100);
//             const newHoursChasth = sunriseDate.getHours().toString().padStart(2, '0');
//             const newMinutesChasth = sunriseDate.getMinutes().toString().padStart(2, '0');
//             const chaasth = `${newHoursChasth}:${newMinutesChasth}`;

//             //Defines Sunset time in hours and minutes
//             const [sunsethours, sunsetminutes] = prayerTimes.Sunset.split(':').map(Number);
//             let sunsetDate = new Date();
//             sunsetDate.setHours(sunsethours, sunsetminutes);

//             // Add 7 minutes to the sunset time to calculate Magrib time
//             sunsetDate.setMinutes(sunsetDate.getMinutes() + 7);
//             const magribHours = sunsetDate.getHours().toString().padStart(2, '0');
//             const magribMinutes = sunsetDate.getMinutes().toString().padStart(2, '0');
//             const newMagribTime = `${magribHours}:${magribMinutes}`;
    
//             // Convert to AM/PM format
//             //const ishraaqFormatted = convertToAMPM(ishraaq);
//             //const chaasthFormatted = convertToAMPM(chaasth);
//             const magribFormatted = convertToAMPM(newMagribTime);
    
//             // Set the formatted Ishraaq time in the state
//             setIshraaqTime(ishraaq);
//             setChaasthTime(chaasth);
//             setMagribTime(magribFormatted);
//         }
//     }, [prayerTimes]);

//     const convertToAMPM = (time) => {
//         const [hours, minutes] = time.split(':').map(Number);
//         const ampm = hours >= 12 ? 'PM' : 'AM';
//         const convertedHours = hours % 12 || 12;
//         return `${convertedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (loading || islamicDateLoading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (islamicDateError) return <div>Error: {islamicDateError}</div>;
//     return (
//         <>           
//             <div className="card w-100 mb-1">
//                 <h5 className="card-title ps-3 pt-3"> {cityName}</h5>
            
                
//                 {prayerTimes ? (
//                     <div className='row font-sm'>
//                         <div className="col-6 table-responsive rounded ps-4">
//                             <table class="table table-sm table-borderless rounded-2 mb-0">
//                                 <tbody>
//                                     <tr class="fw-semibold">
//                                         <th>Fajr</th>
//                                         <td>{prayerTimes.Fajr}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Zohr</th>
//                                         <td>{prayerTimes.Dhuhr}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Asr</th>
//                                         <td>{prayerTimes.Asr}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Maghrib</th>
//                                         <td>{magribTime}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Isha</th>
//                                         <td>{prayerTimes.Isha}</td>
//                                     </tr>

//                                 </tbody>
//                             </table>
//                         </div>

//                         <div className='col-6 table-responsive'>
//                             <table class="table table-sm table-borderless  rounded-2 mb-0">
//                                 <tbody>
//                                     <tr class="fw-semibold">
//                                         <th>Tulu <span className='font-sm'>(Sunrise)</span></th>
//                                         <td>{prayerTimes.Sunrise}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Ishraaq</th>
//                                         <td>{ishraaqTime}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Chaasth</th>
//                                         <td>{chaasthTime}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Guroob <span className='font-sm'>(Sunset)</span></th>
//                                         <td>{prayerTimes.Sunset}</td>
//                                     </tr>
//                                     <tr class="fw-semibold">
//                                         <th>Awwabeen</th>
//                                         <td>{prayerTimes.Maghrib}</td>
//                                     </tr>

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
                    
//                 ) : (
//                     <p className='text-center mt-1'>Prayer times not available.</p>
//                 )}
            
//         </div>
//         </>
//     );
// };

// export default PrayerTimesCard;

// ==========================================================================

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrayerTimes } from '../../redux/prayerSlice';
import { fetchIslamicDate } from '../../redux/islamicDateSlice';

const PrayerTimesCard = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState({ lat: null, lon: null });

    const prayerTimes = useSelector((state) => state.prayer.data);
    const loading = useSelector((state) => state.prayer.loading);
    const error = useSelector((state) => state.prayer.error);
    const cityName = useSelector((state) => state.weather.cityName);
    const [ishraaqTime, setIshraaqTime] = useState(null);
    const [chaasthTime, setChaasthTime] = useState(null);
    const [magribTime, setMagribTime] = useState(null);

    const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
    const islamicDateError = useSelector((state) => state.islamicDate.error);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lon: longitude });
        });
    }, []);

    useEffect(() => {
        if (location.lat && location.lon) {
            dispatch(fetchPrayerTimes({ lat: location.lat, lon: location.lon }));
            dispatch(fetchIslamicDate());
        }
    }, [location, dispatch]);

    useEffect(() => {
        if (prayerTimes && prayerTimes.Sunrise) {
            const [hours, minutes] = prayerTimes.Sunrise.split(':').map(Number);
            let sunriseDate = new Date();
            sunriseDate.setHours(hours, minutes);
    
            sunriseDate.setMinutes(sunriseDate.getMinutes() + 20);
            const ishraaq = `${sunriseDate.getHours().toString().padStart(2, '0')}:${sunriseDate.getMinutes().toString().padStart(2, '0')}`;

            sunriseDate.setMinutes(sunriseDate.getMinutes() + 100);
            const chaasth = `${sunriseDate.getHours().toString().padStart(2, '0')}:${sunriseDate.getMinutes().toString().padStart(2, '0')}`;

            const [sunsethours, sunsetminutes] = prayerTimes.Sunset.split(':').map(Number);
            let sunsetDate = new Date();
            sunsetDate.setHours(sunsethours, sunsetminutes);

            sunsetDate.setMinutes(sunsetDate.getMinutes() + 7);
            const magribTime = `${sunsetDate.getHours().toString().padStart(2, '0')}:${sunsetDate.getMinutes().toString().padStart(2, '0')}`;
    
            setIshraaqTime(ishraaq);
            setChaasthTime(chaasth);
            // setMagribTime(convertToAMPM(magribTime));
            setMagribTime(magribTime);
        }
    }, [prayerTimes]);

    // const convertToAMPM = (time) => {
    //     const [hours, minutes] = time.split(':').map(Number);
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     const convertedHours = hours % 12 || 12;
    //     return `${convertedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    // };

    // Placeholder display when loading
    if (loading || islamicDateLoading) {
        return (
            <div className="card w-100 mb-1">
                <h5 className="card-title ps-3 pt-3">
                    <div className="placeholder-glow">
                        <div className="placeholder col-6 rounded"></div>
                    </div>
                </h5>

                <div className="row font-sm">
                    <div className="col-6 table-responsive rounded ps-4">
                        <table className="table table-sm table-borderless rounded-2 mb-0">
                            <tbody>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6 rounded"></div></th>
                                    <td><div className="placeholder col-6 rounded"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6 rounded"></div></th>
                                    <td><div className="placeholder col-6 rounded"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6 rounded"></div></th>
                                    <td><div className="placeholder col-6 rounded"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6 rounded"></div></th>
                                    <td><div className="placeholder col-6 rounded"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6 rounded"></div></th>
                                    <td><div className="placeholder col-6 rounded"></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-6 table-responsive">
                        <table className="table table-sm table-borderless rounded-2 mb-0">
                            <tbody>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6"></div></th>
                                    <td><div className="placeholder col-6"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6"></div></th>
                                    <td><div className="placeholder col-6"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6"></div></th>
                                    <td><div className="placeholder col-6"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6"></div></th>
                                    <td><div className="placeholder col-6"></div></td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th><div className="placeholder col-6"></div></th>
                                    <td><div className="placeholder col-6"></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    // Display data when loaded
    if (error || islamicDateError) return <div>Error: {error || islamicDateError}</div>;

    return (
        <div className="card w-100 mb-1">
            <h5 className="card-title ps-3 pt-3"> {cityName}</h5>

            {prayerTimes ? (
                <div className="row font-sm">
                    <div className="col-6 table-responsive rounded ps-4">
                        <table className="table table-sm table-borderless rounded-2 mb-0">
                            <tbody>
                                <tr className="fw-semibold">
                                    <th>Fajr</th>
                                    <td>{prayerTimes.Fajr}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Zohr</th>
                                    <td>{prayerTimes.Dhuhr}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Asr</th>
                                    <td>{prayerTimes.Asr}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Maghrib</th>
                                    <td>{magribTime}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Isha</th>
                                    <td>{prayerTimes.Isha}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-6 table-responsive">
                        <table className="table table-sm table-borderless rounded-2 mb-0">
                            <tbody>
                                <tr className="fw-semibold">
                                    <th>Tulu <span className="font-sm">(Sunrise)</span></th>
                                    <td>{prayerTimes.Sunrise}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Ishraaq</th>
                                    <td>{ishraaqTime}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Chaasth</th>
                                    <td>{chaasthTime}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Guroob <span className="font-sm">(Sunset)</span></th>
                                    <td>{prayerTimes.Sunset}</td>
                                </tr>
                                <tr className="fw-semibold">
                                    <th>Awwabeen</th>
                                    <td>{prayerTimes.Maghrib}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-1">Prayer times not available.</p>
            )}
        </div>
    );
};

export default PrayerTimesCard;
