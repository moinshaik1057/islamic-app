import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            alert('Password reset link sent to your email');
        } catch (error) {
            console.error('Error sending reset email', error);
        }
    };

    return (
        <>
        <div className="mt-3 position-absolute w-50 top-50 start-50 translate-middle">
        <form className='input-group ' onSubmit={handleSubmit}>
            <input
                className='form-control'
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className='input-group-text'>Send Reset Link</button>
        </form>
        
        <p>Already have an account? <Link to="/islamic-app"> Login</Link></p>
      </div>
      </>
        
    );
};

export default ForgotPassword;