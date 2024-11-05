import React from 'react';
import { useSelector } from 'react-redux';
import moonPhaseIcons from '../../utils/moonPhases';

const Galaxy = () => {
    const weather = useSelector((state) => state.weather);

    if (!weather || !weather.current || !weather.daily || weather.daily.length < 2) return null;

    const dayData = weather.daily[0];
    const { temp, feels_like, weather: weatherDetails } = weather.current;
    const { moonrise, moonset, moon_phase } = dayData;

    const formatTime = (timestamp) => {
        return timestamp ? new Date(timestamp * 1000).toLocaleTimeString() : 'N/A';
    };

    const getMoonPhaseDetails = (phase) => {
        if (phase === 0 || phase === 1) return { name: 'New Moon', icon: moonPhaseIcons[0] };
        if (phase > 0 && phase < 0.25) return { name: 'Waxing Crescent', icon: moonPhaseIcons[0.1] };
        if (phase === 0.25) return { name: 'First Quarter', icon: moonPhaseIcons[0.25] };
        if (phase > 0.25 && phase < 0.5) return { name: 'Waxing Gibbous', icon: moonPhaseIcons[0.2] };
        if (phase === 0.5) return { name: 'Full Moon', icon: moonPhaseIcons[0.5] };
        if (phase > 0.5 && phase < 0.75) return { name: 'Waning Gibbous', icon: moonPhaseIcons[0.3] };
        if (phase === 0.75) return { name: 'Last Quarter', icon: moonPhaseIcons[0.75] };
        if (phase > 0.75 && phase < 1) return { name: 'Waning Crescent', icon: moonPhaseIcons[0.4] };
        return { name: 'Unknown', icon: moonPhaseIcons[0.5] }; // Fallback to full moon if phase not found
    };

    const roundTemperature = (temp) => {
        return Math.round(temp);
    };

    const { name: moonPhaseName, icon: moonPhaseIcon } = getMoonPhaseDetails(moon_phase);

    return (
        <div className="col-sm-3 rounded-0 mb-2 mb-sm-0 card align-self-strech">
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <div className="d-flex">
                            {weatherDetails && weatherDetails[0] && (
                                <img src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}.png`} alt="weather icon" />
                            )}
                            <h6 className="align-self-center text-center">{roundTemperature(temp)}℃ </h6>
                        </div>
                        <p className="font-sm-2 mb-0 align-self-center">Feels like: {roundTemperature(feels_like)}℃</p>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3 align-self-center">
                                <img src={moonPhaseIcon} alt={moonPhaseName} />
                            </div>
                            <div className="col-9 font-sm">
                                <div className="table-responsive">
                                    <table className="table table-sm table-borderless mb-0 font-sm-2">
                                        <tbody className="fw-semibold">
                                            <tr>
                                                <th>Moonrise</th>
                                                <td>:</td>
                                                <td>{formatTime(moonrise)}</td>
                                            </tr>
                                            <tr>
                                                <th>Moonset</th>
                                                <td>:</td>
                                                <td>{formatTime(moonset)}</td>
                                            </tr>
                                            <tr>
                                                <th>Moon Phase</th>
                                                <td>:</td>
                                                <td>{moonPhaseName}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galaxy;