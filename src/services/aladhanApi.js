import axios from 'axios';

const getPrayerTimes = async (lat, lon) => {
    try {
        const response = await axios.get('http://api.aladhan.com/v1/timings', {
            params: {
                latitude: lat,
                longitude: lon,
                method: 2 // You can change the method as per your requirement
            }
        });
        
        if (response.data && response.data.data && response.data.data.timings) {
            console.log(response.data.data.timings);
            return response.data.data.timings;
        } else {
            throw new Error('Invalid response structure from Aladhan API');
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        throw error;
    }
};

export default getPrayerTimes;