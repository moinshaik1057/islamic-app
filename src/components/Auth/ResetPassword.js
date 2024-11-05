import { useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token'); // Retrieve the token from the URL

    // const handleSubmit = async (e) => {
    //     console.log(token);
    //     console.log(newPassword);
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/api/auth/reset-password', { token, newPassword });
    //         console.log('Sending data:', {token, newPassword});
    //         alert('Password has been reset successfully');
    //     } catch (error) {
    //         console.error('Error resetting password', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if token and newPassword are provided
        if (!token || !newPassword) {
            alert("Please provide both the token and a new password.");
            return;
        }
    
        console.log("Token:", token);
        console.log("New Password:", newPassword);
    
        try {
            console.log("Sending data:", { token, newPassword });
            const response = await axios.post('http://localhost:5000/api/auth/reset-password', { token, newPassword });
    
            // If successful, show success message
            alert('Password has been reset successfully');
            console.log('Response:', response.data);
    
        } catch (error) {
            // Detailed error handling
            if (error.response) {
                // Server responded with a status other than 200
                console.error("Error resetting password:", error.response.data);
                alert(error.response.data.msg || 'An error occurred while resetting the password.');
            } else {
                // Something went wrong with the request setup
                console.error("Error resetting password:", error.message);
                alert('Failed to send reset request. Please try again later.');
            }
        }
    };
    

    return (
        <form className='position-absolute start-50 top-50 translateX-middle' onSubmit={handleSubmit}>
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;