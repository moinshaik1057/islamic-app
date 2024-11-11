// // searchCityCard.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../../redux/weatherSlice';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';

// const SearchCityCard = () => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const dispatch = useDispatch();

//     const handleInputChange = async (e) => {
//         const value = e.target.value;
//         setQuery(value);

//         if (value.length > 2) {
//             const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=2&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
//             //const citydata = response.data;
//             setSuggestions(response.data);
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
//         <div className="card w-100 p-0 mb-2 mb-sm-1">
//             <div className="card-body p-0">
//                 {/* <h5 className="card-title">Search City</h5> */}

//                 <div className="search-container">
//                 <span className="search-icon-right">&#128269;</span>
//                     <input
//                         type="text"
//                         className="search-input-right form-control"
//                         value={query}
//                         onChange={handleInputChange}
//                         placeholder="Search City"
//                     />
                    
//                 </div>

                

                
//                 <ul className="list-group">
//                     {suggestions.map((suggestion) => (
//                         <li key={suggestion.lat} className="list-group-item" onClick={() => handleSelectSuggestion(suggestion)}>
//                             {suggestion.name}, {suggestion.state}, {suggestion.country}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SearchCityCard;

//======================================= Search City and Suggestions functionality with Google places api ==========
// import React, { useState } from 'react';
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng,
// } from 'react-places-autocomplete';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../../redux/weatherSlice';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';

// const SearchCityCard = () => {
//     const [address, setAddress] = useState('');
//     const dispatch = useDispatch();

//     const handleSelect = async (address) => {
//         setAddress(address);

//         try {
//             const results = await geocodeByAddress(address);
//             const { lat, lng } = await getLatLng(results[0]);
//             dispatch(fetchWeather({ lat, lon: lng }));
//             dispatch(fetchPrayerTimes({ lat, lon: lng }));
//         } catch (error) {
//             console.error('Error', error);
//         }
//     };

//     return (
//         <div className="card w-100 p-0 mb-2 mb-sm-1">
//             <div className="card-body p-0">
//                 <PlacesAutocomplete
//                     value={address}
//                     onChange={setAddress}
//                     onSelect={handleSelect}
//                 >
//                     {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                         <div className="search-container">
//                             <input
//                                 {...getInputProps({
//                                     placeholder: 'Search City',
//                                     className: 'search-input-right form-control',
//                                 })}
//                             />
//                             <ul className="list-group">
//                                 {loading && <li>Loading...</li>}
//                                 {suggestions.map(suggestion => {
//                                     const className = suggestion.active
//                                         ? 'list-group-item active'
//                                         : 'list-group-item';
//                                     return (
//                                         <li
//                                             {...getSuggestionItemProps(suggestion, {
//                                                 className,
//                                             })}
//                                         >
//                                             {suggestion.description}
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     )}
//                 </PlacesAutocomplete>
//             </div>
//         </div>
//     );
// };

// export default SearchCityCard;

// =====================================================================================================

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/weatherSlice';
import { fetchPrayerTimes } from '../../redux/prayerSlice';

const SearchCityCard = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);
    const dispatch = useDispatch();

    // Handle input change and fetch suggestions from Mapbox API
    const handleInputChange = async (e) => {
        const value = e.target.value;
        setQuery(value);
        setIsSuggestionSelected(false);

        if (value.length > 2) {
            try {
                const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json`, {
                    params: {
                        access_token: process.env.REACT_APP_MAPBOX_API_KEY,
                        limit: 2,
                    },
                });
                setSuggestions(response.data.features);
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    // Handle the selection of a suggestion
    const handleSelectSuggestion = (suggestion) => {
        setQuery(suggestion.place_name); // Set the input to the selected suggestion
        setSuggestions([]); // Clear suggestions after selection
        setIsSuggestionSelected(true); // Mark as suggestion selected
        const [lon, lat] = suggestion.center;
        dispatch(fetchWeather({ lat, lon }));
        dispatch(fetchPrayerTimes({ lat, lon }));
    };

    return (
        <div className="card w-100 p-0 mb-2 mb-sm-1">
            <div className="card-body p-0">
                <div className="search-container">
                    <span className="search-icon-right">&#128269;</span>
                    <input
                        type="text"
                        className="search-input-right form-control"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search City"
                    />
                </div>

                <ul className="list-group">
                    {suggestions.length > 0 && !isSuggestionSelected ? (
                        suggestions.map((suggestion) => (
                            <li
                                key={suggestion.id}
                                className="list-group-item"
                                onClick={() => handleSelectSuggestion(suggestion)}
                                id="searchCity"
                            >
                                {suggestion.place_name}
                            </li>
                        ))
                    ) : (
                        query.length > 2 && !isSuggestionSelected && suggestions.length === 0 && (
                            <li className="list-group-item">
                                No suggestions found for "{query}"
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SearchCityCard;

// ============================================================================================

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from '../../redux/weatherSlice';
// import { fetchPrayerTimes } from '../../redux/prayerSlice';

// const SearchCityCard = () => {
//     const [query, setQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);
//     const dispatch = useDispatch();

//     // Fetch and set current city on component mount
//     useEffect(() => {
//         const fetchCurrentCity = async (lat, lon) => {
//             try {
//                 const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json`, {
//                     params: {
//                         access_token: process.env.REACT_APP_MAPBOX_API_KEY,
//                         limit: 1,
//                     },
//                 });
//                 if (response.data.features.length > 0) {
//                     const placeName = response.data.features[0].context[3].text + ', Andhra Pradesh, India';
//                     console.log(placeName);
//                     setQuery(placeName);
//                     dispatch(fetchWeather({ lat, lon }));
//                     dispatch(fetchPrayerTimes({ lat, lon }));
//                 }
//             } catch (error) {
//                 console.error('Error fetching current city:', error);
//             }
//         };

//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     fetchCurrentCity(latitude, longitude);
//                 },
//                 (error) => {
//                     console.error('Error getting current location:', error);
//                 }
//             );
//         }
//     }, [dispatch]);

//     // Handle input change and fetch suggestions from Mapbox API
//     const handleInputChange = async (e) => {
//         const value = e.target.value;
//         setQuery(value);
//         setIsSuggestionSelected(false);

//         if (value.length > 2) {
//             try {
//                 const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json`, {
//                     params: {
//                         access_token: process.env.REACT_APP_MAPBOX_API_KEY,
//                         limit: 2,
//                     },
//                 });
//                 setSuggestions(response.data.features);
//             } catch (error) {
//                 console.error('Error fetching city suggestions:', error);
//                 setSuggestions([]);
//             }
//         } else {
//             setSuggestions([]);
//         }
//     };

//     // Handle the selection of a suggestion
//     const handleSelectSuggestion = (suggestion) => {
//         setQuery(suggestion.place_name); // Set the input to the selected suggestion
//         setSuggestions([]); // Clear suggestions after selection
//         setIsSuggestionSelected(true); // Mark as suggestion selected
//         const [lon, lat] = suggestion.center;
//         dispatch(fetchWeather({ lat, lon }));
//         dispatch(fetchPrayerTimes({ lat, lon }));
//     };

//     return (
//         <div className="card w-100 p-0 mb-2 mb-sm-1">
//             <div className="card-body p-0">
//                 <div className="search-container">
//                     <span className="search-icon-right">&#128269;</span>
//                     <input
//                         type="text"
//                         className="search-input-right form-control"
//                         value={query}
//                         onChange={handleInputChange}
//                         placeholder="Search City"
//                     />
//                 </div>

//                 <ul className="list-group">
//                     {suggestions.length > 0 && !isSuggestionSelected ? (
//                         suggestions.map((suggestion) => (
//                             <li
//                                 key={suggestion.id}
//                                 className="list-group-item"
//                                 onClick={() => handleSelectSuggestion(suggestion)}
//                             >
//                                 {suggestion.place_name}
//                             </li>
//                         ))
//                     ) : (
//                         query.length > 2 && !isSuggestionSelected && suggestions.length === 0 && (
//                             <li className="list-group-item">
//                                 No suggestions found for "{query}"
//                             </li>
//                         )
//                     )}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SearchCityCard;
