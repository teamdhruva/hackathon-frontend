import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import image from './static/Welcome2.png'

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { teamData } = location.state || {}; // Get team data from state
    const [showWelcome, setShowWelcome] = useState(true);

    const handleWelcomeClick = () => {
        setShowWelcome(false);
    };

    return (
        <div className="dashboard-container">
            {showWelcome ? (
                <div className="welcome-screen" onClick={handleWelcomeClick}>
                    <div className="image-container">
                        <img src={image} alt="Welcome" className="welcome-image" />
                        <h1 className="welcome-text">
                            <span className="letter" style={{ animationDelay: `0s` }}>W</span>
                            <span className="letter" style={{ animationDelay: `0.1s` }}>e</span>
                            <span className="letter" style={{ animationDelay: `0.2s` }}>l</span>
                            <span className="letter" style={{ animationDelay: `0.3s` }}>c</span>
                            <span className="letter" style={{ animationDelay: `0.4s` }}>o</span>
                            <span className="letter" style={{ animationDelay: `0.5s` }}>m</span>
                            <span className="letter" style={{ animationDelay: `0.6s` }}>e</span>
                            <span className="letter" style={{ animationDelay: `0.7s` }}>&nbsp;</span>
                            {teamData?.teamName.split('').map((letter, index) => (
                                <span key={index} className="letter" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                                    {letter}
                                </span>
                            ))}
                            <span className="letter" style={{ animationDelay: `${0.8 + teamData?.teamName.length * 0.1}s` }}>&nbsp;</span>
                            <span className="letter" style={{ animationDelay: `${0.9 + teamData?.teamName.length * 0.1}s` }}>t</span>
                            <span className="letter" style={{ animationDelay: `${1.0 + teamData?.teamName.length * 0.1}s` }}>o</span>
                            <span className="letter" style={{ animationDelay: `${1.1 + teamData?.teamName.length * 0.1}s` }}>&nbsp;</span>
                            <span className="letter" style={{ animationDelay: `${1.2 + teamData?.teamName.length * 0.1}s` }}>t</span>
                            <span className="letter" style={{ animationDelay: `${1.3 + teamData?.teamName.length * 0.1}s` }}>h</span>
                            <span className="letter" style={{ animationDelay: `${1.4 + teamData?.teamName.length * 0.1}s` }}>e</span>
                            <span className="letter" style={{ animationDelay: `${1.5 + teamData?.teamName.length * 0.1}s` }}>&nbsp;</span>
                            <span className="letter" style={{ animationDelay: `${1.6 + teamData?.teamName.length * 0.1}s` }}>H</span>
                            <span className="letter" style={{ animationDelay: `${1.7 + teamData?.teamName.length * 0.1}s` }}>a</span>
                            <span className="letter" style={{ animationDelay: `${1.8 + teamData?.teamName.length * 0.1}s` }}>c</span>
                            <span className="letter" style={{ animationDelay: `${1.9 + teamData?.teamName.length * 0.1}s` }}>k</span>
                            <span className="letter" style={{ animationDelay: `${2.0 + teamData?.teamName.length * 0.1}s` }}>a</span>
                            <span className="letter" style={{ animationDelay: `${2.1 + teamData?.teamName.length * 0.1}s` }}>t</span>
                            <span className="letter" style={{ animationDelay: `${2.2 + teamData?.teamName.length * 0.1}s` }}>h</span>
                            <span className="letter" style={{ animationDelay: `${2.3 + teamData?.teamName.length * 0.1}s` }}>o</span>
                            <span className="letter" style={{ animationDelay: `${2.4 + teamData?.teamName.length * 0.1}s` }}>n</span>
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="dashboard-content">
                    <h2>{teamData?.teamName}</h2>
                    <div className="team-members">
                        <div className="member">
                            <h3>{teamData?.person1}</h3>
                            <p>{teamData?.caption1}</p>
                        </div>
                        <div className="member">
                            <h3>{teamData?.person2}</h3>
                            <p>{teamData?.caption2}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
