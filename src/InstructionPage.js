import React from 'react';
import './InstructionPage.css';
import Navbar from './Navbar'; 

const InstructionPage = () => {
  return (
    <div className="instruction-page">
      <Navbar />
      <div className="container">
        <h1 className="title">Hackathon Instructions</h1>

        <div className="section general-instructions">
          <h2 className="section-title">General Instructions</h2>
          <ul className="instruction-list">
            <li>The hackathon has two categories: Mu and ETA. Mu contains questions related to Galaxy Cluster Analysis and ETA contains questions related to Exoplanet Detection.</li>
            <li>The duration of the hackathon is 2 hours.</li>
            <li>Please verify your category with the organizers before starting to attempt the questions.</li>
            <li>NO CHANGE OF CATEGORY IS ALLOWED.</li>
            <li>You are allowed to access internet for any research purposes during hackathon --may it be related to coding or astronomy</li>
            <li>You may ask coding-related questions to the organizer.</li>
          </ul>
        </div>

        <div className="section mu-category">
          <h2 className="section-title">Mu Category</h2>
          <ul className="instruction-list">
            <li>The zip file consists of a folder named data within it.</li>
            <li>Solve the questions in the Problem_Statement.ipynb file.</li>
            <li>Explain the solutions in a 5-minute presentation.</li>
            <li>Upload your file as "answers-[TEAM NAME].ipynb" on the portal.</li>
            <li>The team with the most correct answers will be awarded first.</li>
          </ul>
        </div>

        <div className="section eta-category">
          <h2 className="section-title">ETA Category</h2>
          <ul className="instruction-list">
            <li>The zip file consists of a folder named data within it.</li>
            <li>Solve the questions in the Problem_Statement.ipynb file.</li>
            <li>Be ready for a 5-minute presentation explaining your approach.</li>
            <li>Upload your file as "answers-[TEAM NAME].ipynb" on the portal.</li>
            <li>The team with the most correct answers and approach will be awarded first.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
