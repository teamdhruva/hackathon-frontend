import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { teamName } = location.state || {};

    const handleContinue = () => {
        navigate('/dashboard-content', { state: location.state });
    };

    return (
        <div className="welcome-screen">
            <h1>Welcome {teamName} to the Hackathon!</h1>
            <button onClick={handleContinue}>OK</button>
        </div>
    );
};

export default WelcomeScreen;
