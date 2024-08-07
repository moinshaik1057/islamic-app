import axios from 'axios';

const NOMINATIM_API_URL = 'https://nominatim.openstreetmap.org';

// Function to get city suggestions
export const getCitySuggestions = async (query) => {
  try {
    const response = await axios.get(`${NOMINATIM_API_URL}/search`, {
      params: {
        q: query,
        format: 'json',
        addressdetails: 1,
        limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    throw error;
  }
};

// Function to reverse geocode coordinates to get city name
export const reverseGeocode = async (latitude, longitude) => {
  try {
    const response = await axios.get(`${NOMINATIM_API_URL}/reverse`, {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
        addressdetails: 1,
      },
    });
    const address = response.data.address;
    console.log('Reverse Geocode Response:', address); // Debug information
    return address.city || address.town || address.village || address.hamlet || 'Unknown';
  } catch (error) {
    console.error('Error reverse geocoding coordinates:', error);
    throw error;
  }
};
