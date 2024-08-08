import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './static/logo.png';

const LoginIllustration = () => (
    <div className="login-illustration">
        <img src={logo} alt="Login Illustration" />
    </div>
);
const LoginForm = () => { 
    const[userEmail,setuserEmail]=useState('');
    const[teamName,setteamName]=useState('');
    const navigate = useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const logindata={userEmail,teamName};
        try{
            const response=await fetch('https://dhruva-hackathon-rohithgowdam.up.railway.app/api/auth/login',{
                method: 'POST',
                headers:{
                    'Content-type':'application/json'
                },
                    body:JSON.stringify(logindata),
            });
            if(response.ok){
                const data=await response.json();
                console.log("Login successfully")
                navigate('/dashboard', { state: { teamData: data.team } });
            }
            else{
                alert("Login failed!! Try again");
                setuserEmail('');
                setteamName('');            
            }
        }catch(error){
            console.log(error);
        }
    };
    return(
    <div className="login-form">
        <h2 className='loginCaption1'>Welcome to Team dhRuva Hackathon! 👋</h2>
        <form onSubmit={handlesubmit}>
            <div className="form-group">
                <label htmlFor="userEmail" className='loginCaption'><b>userEmail</b></label>
                <input type="email" id="userEmail" value={userEmail} onChange={(e)=>setuserEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="teamName" className='loginCaption'><b>Team Name</b></label>
                <input type="password" id="teamName" value={teamName} onChange={(e)=>setteamName(e.target.value)} required />
            </div>
            <br />
            <button type="submit">SIGN IN</button>
        </form>
    </div>
)};

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
            <div className="login-container">
                {step > 0 && <LoginIllustration />}
                {step > 1 && <LoginForm />}
            </div>
        </div>
    );
}

export default LoginPage;
