// searchCityCard.js

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/weatherSlice';
import { fetchPrayerTimes } from '../../redux/prayerSlice';

const SearchCityCard = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
            setSuggestions(response.data);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectSuggestion = (suggestion) => {
        setQuery(suggestion.name);
        setSuggestions([]);
        const { lat, lon } = suggestion;
        dispatch(fetchWeather({ lat, lon }));
        dispatch(fetchPrayerTimes({ lat, lon }));
    };

    return (
        <div className="card w-100 p-0 mb-2 mb-sm-1">
            <div className="card-body p-0">
                {/* <h5 className="card-title">Search City</h5> */}

                <div class="search-container">
                <span class="search-icon-right">&#128269;</span>
                    <input
                        type="text"
                        className="search-input-right form-control"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search City"
                    />
                    
                </div>

                

                
                <ul className="list-group">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.lat} className="list-group-item" onClick={() => handleSelectSuggestion(suggestion)}>
                            {suggestion.name}, {suggestion.country}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchCityCard;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../../redux/weatherSlice';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';

// const SearchCityCard = () => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const dispatch = useDispatch();

//     const handleInputChange = async (e) => {
//         const value = e.target.value;
//         setQuery(value);

//         if (value.length > 2) {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
//                 setSuggestions(response.data);
//                 setError(null);
//             } catch (err) {
//                 setError('Failed to fetch suggestions');
//                 setSuggestions([]);
//             } finally {
//                 setLoading(false);
//             }
//         } else {
//             setSuggestions([]);
//         }
//     };

//     const handleSelectSuggestion = (suggestion) => {
//         setQuery(suggestion.name);
//         setSuggestions([]);
//         const { lat, lon } = suggestion;
//         dispatch(fetchWeather({ lat, lon }));
//         dispatch(fetchPrayerTimes({ lat, lon }));
//     };

//     return (
//         <div className="card w-100 p-0 mb-2 mb-sm-0">
//             <div className="card-body p-0">
//                 <input
//                     type="text"
//                     className="form-control"
//                     value={query}
//                     onChange={handleInputChange}
//                     placeholder="Search City"
//                 />
//                 {loading && <div>Loading...</div>}
//                 {error && <div className="text-danger">{error}</div>}
//                 <ul className="list-group">
//                     {suggestions.map((suggestion) => (
//                         <li key={suggestion.lat} className="list-group-item" onClick={() => handleSelectSuggestion(suggestion)}>
//                             {suggestion.name}, {suggestion.country}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SearchCityCard;

