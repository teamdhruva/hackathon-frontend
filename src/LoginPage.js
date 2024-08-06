import React from 'react';
import './LoginPage.css';
// import image from './static/loginbg.png'
import logo from './static/logo.png'

const LoginPage = () => {
    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-illustration">
                    <img src={logo} alt="Login Illustration" />
                </div>
                <div className="login-form">
                    <h2 className='loginCaption1'>Welcome to Team dhRuva Hackathon! 👋</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email" className='loginCaption'><b>Email</b></label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='loginCaption'><b>Password</b></label>
                            <input type="password" id="password" required />
                        </div>
                        <br/>
                        <button type="submit">SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;