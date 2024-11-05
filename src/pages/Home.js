import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import { selectAuth } from '../redux/authSlice'; // Import the auth selector

// Components
//import Header from '../components/Header.js';
import SearchCityCard from '../components/Cards/SearchCityCard.js';
import PrayerTimesCard from '../components/Cards/PrayerTimesCard.js';
import IslamicDateCard from '../components/Cards/IslamicDateCard.js';
import Galaxy from '../components/Cards/Galaxy.js';
import CounterCard from '../components/Cards/CounterCard.js';

// Bootstrap CSS link
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    
// Access the authenticated user from Redux
const { user, isAuthenticated } = useSelector(selectAuth);

// console.log("User: ", user);  // Add this to check user data
// console.log("Is Authenticated: ", isAuthenticated);  // Add this to check auth status

    return (
        <>
        
        <div className="container-fluid">
            <div className="row d-flex">
                <div className='col-sm-12 d-sm-none'>
                    {/* Display a welcome message with the user's name */}
                    {isAuthenticated && user ? (
                        <div className='text-center fw-semibold'>Assalamualaikum, {user.username}! </div>
                        
                    ) : (
                        <h2>Assalamualaikum, Guest!</h2>
                    )}
                </div>
                <div className="col-sm-3 card rounded-0 mb-1 mb-sm-0 align-self-strech flex-column justify-content-around">
                    <SearchCityCard /> 
                    <IslamicDateCard />                    
                </div>
                <PrayerTimesCard /> 
                <CounterCard />
                <Galaxy />


                {/* <div className="col-sm-3 align-self-strech"><PrayerTimesCard /> </div>
                <div className="col-sm-3 align-self-strech"><CounterCard /> </div>
                <div className="col-sm-3 align-self-strech"><Galaxy /></div>                 */}
                
            </div>
        </div>
        </>
    );
};

export default Home;