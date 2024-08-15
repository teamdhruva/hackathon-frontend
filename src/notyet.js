import React from 'react';
import './notyet.css';
import Navbar from './Navbar'; 

const NotYet = () => {
  return (
    <div className="notyet-container">
        <Navbar />
      <div className="warning-sign">
        <div className="sign-border">
          <h1 className="notyet-caption">Area 51</h1>
          <p className="notyet-subcaption">No entry here till Aug 20</p>
        </div>
      </div>
    </div>
  );
};

export default NotYet;
