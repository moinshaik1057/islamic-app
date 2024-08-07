import React from 'react';
import { useSelector } from 'react-redux';
import moonPhaseIcons from '../../utils/moonPhases';
//import { WiCelsius } from "react-icons/wi";

const WeatherCard = () => {
    const weather = useSelector((state) => state.weather);
    console.log(weather);

    if (!weather || !weather.current || !weather.daily || weather.daily.length < 2) return null;

    const dayData = weather.daily[0];
    // const { sunrise, temp, feels_like, sunset, weather: weatherDetails } = weather.current;
    // const { dt, moonrise, moonset, moon_phase } = dayData;

    const { temp, feels_like, weather: weatherDetails } = weather.current;
    const { moonrise, moonset, moon_phase } = dayData;

    console.log(feels_like);

    const formatTime = (timestamp) => {
        return timestamp ? new Date(timestamp * 1000).toLocaleTimeString() : 'N/A';
    };

    // const formatDate = (timestamp) => {
    //     return timestamp ? new Date(timestamp * 1000).toLocaleDateString() : 'N/A';
    // };

    const getMoonPhaseIcon = (phase) => {
        const iconName = moonPhaseIcons[phase] || 'full-moon.png'; // Fallback to a default icon if phase not found
        return `/moon-phases/${iconName}`;
    };

    const roundTemperature = (temp) => {
        return Math.round(temp);
    };

    return (
        <div className="card w-100">
            <div className="card-body">
                <div className='row'>
                    <div className='col-4'>
                        <div className='d-flex'>
                        {weatherDetails && weatherDetails[0] && (
                        <img src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}.png`} alt="weather icon" />
                        )}
                        <h6 className='align-self-center text-center'>{roundTemperature(temp)}℃ </h6></div>
                        <p className='font-sm-2 mb-0 align-self-centr'>Feels like: {roundTemperature(feels_like)}℃</p>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-3 align-self-center'>
                                <img src={getMoonPhaseIcon(moon_phase)} alt="moon phase icon" />
                            </div>
                            <div className='col-9 font-sm'>
                                <div className='table-responsive'>
                                    <table className='table table-sm table-borderless mb-0 font-sm-2'>
                                        <tbody className='fw-semibold'>
                                            <tr>
                                                <th>Moonrise</th> <td>:</td> <td>{formatTime(moonrise)}</td>
                                            </tr>
                                            <tr>
                                                <th>Moonset</th> <td>:</td> <td>{formatTime(moonset)}</td>
                                            </tr>
                                            <tr>
                                                <th>Moon Phase</th> <td>:</td> <td>{moon_phase !== null && moon_phase !== undefined ? moon_phase : 'N/A'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <p className='mb-0'>Moonrise: {formatTime(moonrise)}</p> */}
                                {/* <p className='mb-0'>Moonset: {formatTime(moonset)}</p> */}
                                {/* <p className='mb-0'>Moon Phase: {moon_phase !== null && moon_phase !== undefined ? moon_phase : 'N/A'}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h5 className="card-title">Current Weather in {weather.cityName}</h5> */}
                {/* <p>Date: {formatDate(dt)}</p> */}
                {/* <p>Sunrise: {formatTime(sunrise)}</p> */}
                {/* <p>Sunset: {formatTime(sunset)}</p> */}
                
                
                
            </div>
        </div>
    );
};

export default WeatherCard;
