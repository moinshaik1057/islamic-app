import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrayerTimes } from '../../redux/prayerSlice';

const PrayerTimesCard = ({ location, city }) => {
  const dispatch = useDispatch();
  const prayerTimes = useSelector((state) => state.prayer.timings);
  const prayerStatus = useSelector((state) => state.prayer.status);
  const prayerError = useSelector((state) => state.prayer.error);

  useEffect(() => {
    if (location.latitude && location.longitude && prayerStatus === 'idle') {
      dispatch(fetchPrayerTimes({ coordinates: location }));
    }
  }, [dispatch, location, prayerStatus]);

  useEffect(() => {
    if (city && prayerStatus === 'idle') {
      dispatch(fetchPrayerTimes({ city }));
    }
  }, [dispatch, city, prayerStatus]);

  if (prayerStatus === 'loading') {
    return <div>Loading prayer times...</div>;
  }

  if (prayerStatus === 'failed') {
    return <div>Error: {prayerError}</div>;
  }

  return (
    <div className="card w-100">
      <div className="card-header">
        <h3 className="card-title">Prayer Times for {city}</h3>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Fajr: {prayerTimes.Fajr}</li>
          <li className="list-group-item">Dhuhr: {prayerTimes.Dhuhr}</li>
          <li className="list-group-item">Asr: {prayerTimes.Asr}</li>
          <li className="list-group-item">Maghrib: {prayerTimes.Maghrib}</li>
          <li className="list-group-item">Isha: {prayerTimes.Isha}</li>
        </ul>
      </div>
    </div>
  );
};

export default PrayerTimesCard;
