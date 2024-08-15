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
            <li>You are welcome to ask any doubts to the organizer related to coding only or about the question statements if you find it ambiguous. No astronomy related questions will be entertained.</li>
          </ul>
        </div>

        <div className="section mu-category">
          <h2 className="section-title">Mu Category</h2>
          <ul className="instruction-list">
            <li>The zip file consists of a folder named data within it you will find all the relevant data to the questions mentioned in the Problem_Statement.ipynb file</li>
            <li>In 2 hours, you people are expected to solve the questions and arrive at most appropriate answers.</li>
            <li>After you are done, please upload your file as "answers-[TEAM NAME].ipynb" from the link provided within the login portal</li>
            <li>Upload your file as "answers-[TEAM NAME].ipynb" on the portal.</li>
            <li>The team scoring most answers correct will be awarded first in the Mu category. In case of tie, the method used to arrive at answer will be considered and even if that ends up in tie, the first place will be shared.</li>
          </ul>
        </div>

        <div className="section eta-category">
          <h2 className="section-title">ETA Category</h2>
          <ul className="instruction-list">
            <li>The zip file consists of a folder named data within it you will find all the relevant data to the questions mentioned in the Problem_Statement.ipynb file. YOU CAN BE CREATIVE IN USING THE TRAIN_DATA.CSV FILE. IT IS NOT COMPULSORY TO USE THAT FILE TO ANSWER THE QUESTIONS, IT IS LEFT TO YOU.</li>
            <li>In 2 hours, you people are expected to solve the questions and arrive at most appropriate answers. And be ready for a small presentation of 5 mins explaining your approach for the answers you arrived at. No need to make an additional ppt, you may use the the ipynb file for presentation.</li>
            <li>Be ready for a 5-minute presentation explaining your approach.</li>
            <li>After you are done, please upload your file as "answers-[TEAM NAME].ipynb" from the link provided within the login portal</li>
            <li>The team scoring most answers correct with the correct approach will be awarded first in the ETA category. In case of tie, the efficient approach to arrive at answer will be considered and even if that ends up in tie, the first place will be shared.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
