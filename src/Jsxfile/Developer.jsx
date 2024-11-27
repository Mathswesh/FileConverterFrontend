import React from 'react';
import Agnivesh from '../images/agnivesh.png';
import Ayush from '../images/ayush.png';
import '../css/developer.css';

export const Developer = () => {
  return (
    <div className="developer-page">
      <div className="developer-container">
        <div className="developer-card-wrapper">

            <div className="developer-card">
            <img src={Ayush} alt="Ayush Patel" className="developer-image" />
            <h2 className="developer-name">Ayush Patel</h2>
            <p className="developer-role">Frontend Developer</p>
            <div className="developer-actions">
                <a href="#" className="btn btn-contact">Contact</a>
                <a href="#" className="btn btn-portfolio">Portfolio</a>
            </div>
            </div>

        </div>
        <div className="developer-card-wrapper">

            <div className="developer-card">
            <img src={Agnivesh} alt="Agnivesh Patel" className="developer-image" />
            <h2 className="developer-name">Agnivesh Patel</h2>
            <p className="developer-role">Backend Developer</p>
            <div className="developer-actions">
                <a href="#" className="btn btn-contact">Contact</a>
                <a href="#" className="btn btn-portfolio">Portfolio</a>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};