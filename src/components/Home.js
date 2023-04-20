import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import img from "../images/harishma.jpeg"
import '../App.css';
import imgg from "../images/harishma2.jpeg"
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-header">
        
      <div>
      <h1 className="home-page-title">HARISHMA R</h1>
        <p className="home-page-subtitle">Web Developer</p>
        <p className="home-page-subtitle">Welcome to my personal portfolio!</p>
      </div>
        <div style={{paddingLeft: '20vh'}}>
          <img src={imgg}/>
        </div>
      </div>
    
    </div>
  );
};

export default HomePage;
