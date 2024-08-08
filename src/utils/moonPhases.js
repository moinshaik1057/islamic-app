// // moonPhases.js
// // Map moon phase values to corresponding icons (assuming you have these icons)
// // const moonPhaseIcons = {
// //     0: '🌑',  // New moon
// //     0.25: '🌓',  // First quarter
// //     0.5: '🌕',  // Full moon
// //     0.75: '🌗',  // Last quarter
// //     // Add more phases as necessary
// //     0.1: '🌒',  // Waxing crescent
// //     0.2: '🌔',  // Waxing gibbous
// //     0.3: '🌖',  // Waning gibbous
// //     0.4: '🌘',  // Waning crescent
// // };

// const moonPhaseIcons = {
//     0: 'new-moon.png',  // New moon
//     0.12: 'first-quarter.png',  // First quarter Change this icon
//     0.25: 'first-quarter.png',  // First quarter Change this icon
//     0.5: 'full-moon.png',  // Full moon
//     0.75: 'last-quarter.png',  // Last quarter
//     // Add more phases as necessary
//     0.1: 'waxing-crescent.png',  // Waxing crescent
//     0.2:'waxing-gibbous.png',  // Waxing gibbous
//     0.3: 'waning-gibbous.png',  // Waning gibbous
//     0.4: 'waning-crescent.png',  // Waning crescent
// };

// export default moonPhaseIcons;


import newMoonImage from '../assets/moon-phases/new-moon.png';
import firstQuarterImage from '../assets/moon-phases/first-quarter.png';
import fullMoonImage from '../assets/moon-phases/full-moon.png';
import lastQuarterImage from '../assets/moon-phases/last-quarter.png';
import waxingCrescentImage from '../assets/moon-phases/waxing-crescent.png';
import waxingGibbousImage from '../assets/moon-phases/waxing-gibbous.png';
import waningGibbousImage from '../assets/moon-phases/waning-gibbous.png';
import waningCrescentImage from '../assets/moon-phases/waning-crescent.png';

const moonPhaseIcons = {
    0: newMoonImage,  // New moon
    0.12: firstQuarterImage,  // First quarter
    0.25: firstQuarterImage,  // First quarter
    0.5: fullMoonImage,  // Full moon
    0.75: lastQuarterImage,  // Last quarter
    0.1: waxingCrescentImage,  // Waxing crescent
    0.2: waxingGibbousImage,  // Waxing gibbous
    0.3: waningGibbousImage,  // Waning gibbous
    0.4: waningCrescentImage,  // Waning crescent
};

export default moonPhaseIcons;
