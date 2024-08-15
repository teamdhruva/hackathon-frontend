import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Ensure to include the CSS for the Samsung animation
import logo from './static/logo.png';
import Navbar from './Navbar'

const LoginIllustration = () => (
    <div className="login-illustration">
        <img src={logo} alt="Login Illustration" />
    </div>
);

const SamsungLoadingAnimation = () => (
    <div className="samsung-loading-animation">
        <div className="circle"></div>
    </div>
);

const LoginForm = () => { 
    const [userEmail, setUserEmail] = useState('');
    const [teamName, setTeamName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading animation
        const loginData = { userEmail, teamName };
        try {
            const response = await fetch('https://dhruva-hackathon-rohithgowdam.up.railway.app/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(loginData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Login successfully");
                navigate('/dashboard', { state: { teamData: data.team } });
            } else {
                alert("Login failed!! Try again");
                setUserEmail('');
                setTeamName('');            
            }
        } catch (error) {
            console.log(error);
            alert("Connect to Internet")
        } finally {
            setIsLoading(false); // Stop loading animation
        }
    };

    return(  
        <div className="login-form">
            <h2 className='loginCaption1'>Welcome to Team dhRuva Hackathon! 👋</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userEmail" className='loginCaption'><b>User Email</b></label>
                    <input type="email" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="teamName" className='loginCaption'><b>Team Name</b></label>
                    <input type="password" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
                </div>
                <br />
                {isLoading ? (
                    <SamsungLoadingAnimation />
                ) : (
                    <button type="submit"><b>SIGN IN</b></button>
                )}
            </form>
        </div>
    );
};

const LoginPage = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 500); // Adjust timing as needed
        const timer2 = setTimeout(() => setStep(2), 500); // Adjust timing as needed

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="login-background">
            <Navbar/>
            <div className="login-container">
                {step > 0 && <LoginIllustration />}
                {step > 1 && <LoginForm />}
            </div>
        </div>
    );
}

export default LoginPage;
