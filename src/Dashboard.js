import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import image from './static/Welcome2.png';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { teamData } = location.state || {}; // Get team data from state
    const [showWelcome, setShowWelcome] = useState(true);
    const [imageUrls, setImageUrls] = useState({ image1: '', image2: '' });
    
    useEffect(() => {
        if(!teamData){
            navigate('/')
        }
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://dhruva-hackathon-rohithgowdam.up.railway.app/api/images/${teamData.teamID}`); // eslint-disable-next-lin
                setImageUrls({
                    image1: response.data[0], // Assuming the first image is person1.jpeg
                    image2: response.data[1]  // Assuming the second image is person2.jpeg
                });
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, []);

    const handleWelcomeClick = () => {
        setShowWelcome(false);
    };
    
    const handleUpload = () => {
        window.location.href = 'https://example.com/upload'; // Replace with your actual upload link
    };
    
    const handleDownload = () => {
        const backendURL = 'https://dhruva-hackathon-rohithgowdam.up.railway.app/api/download'; // Adjust based on your backend server URL
        const url = `${backendURL}/${teamData.problemStatement}`;
        axios({
            url,
            method: 'GET',
            responseType: 'blob', // Important for file download
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `Statement-(${teamData.problemStatement}).zip`); // Provide the filename
                document.body.appendChild(link);
                link.click();
                link.remove();
            })
            .catch((error) => {
                console.error('Error downloading the file:', error);
            });
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
                    <div className="team-name-container">
                        <h2 className="team-name">{teamData?.teamName}</h2>
                    </div>
                    <div className="team-members">
                        <div className="member-card">
                            <img src={imageUrls.image1} alt={`${teamData?.person1} profile`} className="member-image" />
                            <h3 className="member-name">{teamData?.person1}</h3>
                            <p className="member-description">{teamData?.caption1}</p>
                            <button className="know-more-button">Know More</button>
                        </div>
                        <div className="member-card">
                            <img src={imageUrls.image2} alt={`${teamData?.person2} profile`} className="member-image" />
                            <h3 className="member-name">{teamData?.person2}</h3>
                            <p className="member-description">{teamData?.caption2}</p>
                            <button className="know-more-button">Know More</button>

                        </div>
                    </div>
                    <div className="button-group">
                        <button className="download-button" onClick={handleDownload}>Download File</button>
                        <button className="upload-button" onClick={handleUpload}>Upload File</button>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Dashboard;
