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
    //const cityName = useSelector((state) => state.weather.cityName);
    const [ishraaqTime, setIshraaqTime] = useState(null);
    const [chaasthTime, setChaasthTime] = useState(null);

    //const islamicDate = useSelector((state) => state.islamicDate.date);
    const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
    const islamicDateError = useSelector((state) => state.islamicDate.error);

    //console.log(prayerTimes);

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
    
            // Add 10 minutes to the sunrise time to calculate Ishraaq time
            sunriseDate.setMinutes(sunriseDate.getMinutes() + 20);
    
            const newHours = sunriseDate.getHours().toString().padStart(2, '0');
            const newMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
            const ishraaq = `${newHours}:${newMinutes}`;

            // Add 100 minutes to the sunrise time to calculate Ishraaq time
            sunriseDate.setMinutes(sunriseDate.getMinutes() + 100);
    
            const newHoursChasth = sunriseDate.getHours().toString().padStart(2, '0');
            const newMinutesChasth = sunriseDate.getMinutes().toString().padStart(2, '0');
            const chaasth = `${newHoursChasth}:${newMinutesChasth}`;
    
            // Convert to AM/PM format
            const ishraaqFormatted = convertToAMPM(ishraaq);
            const chaasthFormatted = convertToAMPM(chaasth);
    
            // Set the formatted Ishraaq time in the state
            setIshraaqTime(ishraaqFormatted);
            setChaasthTime(chaasthFormatted);
        }
    }, [prayerTimes]);

    const convertToAMPM = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const convertedHours = hours % 12 || 12;
        return `${convertedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (loading || islamicDateLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (islamicDateError) return <div>Error: {islamicDateError}</div>;
    console.log(prayerTimes);
    //console.log(ishraaqTime);
    return (
        <>

            
                {/* {islamicDate && (
                <div className='card p-2 rounded-1 w-100' style={{fontSize: 10}}>
                
                    
                        {islamicDate.day} {islamicDate.month.en} {islamicDate.year} / {cityName}
                    
                </div>)} */}
            
            <div className="card w-100 p-0 mb-1">
            {/* <h5 className="card-title">Prayer Times {cityName}</h5> */}
            
                
                {prayerTimes ? (
                <div className="table-responsive rounded p-1">
                    <table className="table table-sm table-borderless table-secondar rounded-2 mb-0 text-center font-sm">
                    <thead>
                            <tr>
                                {/* <th className='bg-warning'>Tahajjud</th>
                                <td>{convertToAMPM(prayerTimes.Lastthird)}</td> */}
                                <th>Ishraaq</th>
                                <td colSpan='2'>{ishraaqTime}</td>
                                <th>Chaasth</th>
                                <td colSpan='2'>{chaasthTime}</td>
                            </tr></thead>
                        <thead className='bg-secondary'>
                            <tr>
                                <th>Fazr</th>
                                <th><a href='home' className='link-offset-3 text-reset'>Sunrise</a></th>
                                <th>Zohar</th>
                                <th>Asr</th>
                                <th>Magrib</th>
                                <th>Isha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="fw-semibold">
                                <td>{convertToAMPM(prayerTimes.Fajr)}</td>
                                <td className="fw-bold">{convertToAMPM(prayerTimes.Sunrise)}</td>
                                <td>{convertToAMPM(prayerTimes.Dhuhr)}</td>
                                <td>{convertToAMPM(prayerTimes.Asr)}</td>
                                <td>{convertToAMPM(prayerTimes.Maghrib)}</td>
                                <td>{convertToAMPM(prayerTimes.Isha)}</td>
                            </tr>
                            <tr>
                                <td colSpan='6' className='text-bg-warning fw-medium'>
                                    Tahajjud timing will start from 1 hour after Isha to 30 minutes Before fazr
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
                    
                ) : (
                    <p className='text-center mt-1'>Prayer times not available.</p>
                )}
            
        </div>
        </>
    );
};

export default PrayerTimesCard;

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

//     const islamicDate = useSelector((state) => state.islamicDate.date);
//     const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
//     const islamicDateError = useSelector((state) => state.islamicDate.error);

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
//             const [hours, minutes] = prayerTimes.Sunrise.split(':').map(Number);
//             let sunriseDate = new Date();
//             sunriseDate.setHours(hours, minutes);
//             sunriseDate.setMinutes(sunriseDate.getMinutes() + 10);

//             const newHours = sunriseDate.getHours().toString().padStart(2, '0');
//             const newMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
//             setIshraaqTime(`${newHours}:${newMinutes}`);
//         }
//     }, [prayerTimes]);

//     if (loading || islamicDateLoading) return <div>Loading...</div>;
//     if (error || islamicDateError) return <div>Error: {error || islamicDateError}</div>;

//     return (
//         <div className="card w-100">
//             <div className='card-header'>
//                 <h5 className="card-title">Prayer Times {cityName}</h5>
//                 {islamicDate && (
//                     <p className='card-subtitle mb-2 text-muted'>Islamic Date: {islamicDate.day} {islamicDate.month.en} {islamicDate.year}</p>
//                 )}
//             </div>
//             <div className="card-body">
//                 {prayerTimes ? (
//                     <ul className='list-group'>
//                         <li className='list-group-item'>Tahajjud: {prayerTimes.Lastthird}</li>
//                         <li className='list-group-item'>Fajr: {prayerTimes.Fajr}</li>
//                         <li className='list-group-item'>Sunrise: {prayerTimes.Sunrise}</li>
//                         <li className='list-group-item'>Ishraaq: {ishraaqTime}</li>
//                         <li className='list-group-item bg-warning'>Chaasth: {prayerTimes.Chaasth}</li>
//                         <li className='list-group-item'>Dhuhr: {prayerTimes.Dhuhr}</li>
//                         <li className='list-group-item'>Asr: {prayerTimes.Asr}</li>
//                         <li className='list-group-item'>Sunset: {prayerTimes.Sunset}</li>
//                         <li className='list-group-item'>Maghrib: {prayerTimes.Maghrib}</li>
//                         <li className='list-group-item bg-warning'>Awwabeen: {prayerTimes.Awwabeen}</li>
//                         <li className='list-group-item'>Isha: {prayerTimes.Isha}</li>
//                     </ul>
//                 ) : (
//                     <p>Prayer times not available.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PrayerTimesCard;

