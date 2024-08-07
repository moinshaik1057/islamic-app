import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrayerTimes } from '../../redux/prayerSlice';
import { fetchIslamicDate } from '../../redux/islamicDateSlice';

const IslamicDateCard = () => {
    const weather = useSelector((state) => state.weather);

    const dispatch = useDispatch();
    const [location, setLocation] = useState({ lat: null, lon: null });

    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
    const islamicDate = useSelector((state) => state.islamicDate.date);
    const islamicDateLoading = useSelector((state) => state.islamicDate.loading);
    const islamicDateError = useSelector((state) => state.islamicDate.error);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lon: longitude });
            },
            (error) => {
                console.error('Error getting geolocation:', error);
            }
        );
    }, []);

    useEffect(() => {
        if (location.lat && location.lon) {
            dispatch(fetchPrayerTimes({ lat: location.lat, lon: location.lon }));
            dispatch(fetchIslamicDate());
        }
    }, [location, dispatch]);

    if (islamicDateLoading) return <div>Loading Islamic date...</div>;
    if (islamicDateError) return <div>Error fetching Islamic date: {islamicDateError}</div>;

    return (
        <div className="card p-2 rounded-1 w-100 mb-1" style={{ fontSize: 10 }}>
            {islamicDate && (
                <div className='d-flex justify-content-between fw-semibold'>
                    <div>{islamicDate.day} {islamicDate.month.en} {islamicDate.year}</div>
                    <div> {weather.cityName} </div>
                    <div> {formattedDate} </div>
                    
                </div>
            )}
        </div>
    );
};

export default IslamicDateCard;
