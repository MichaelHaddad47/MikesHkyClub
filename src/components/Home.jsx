import React, { useState } from 'react';
import './Home.css';
import homepagebackground from '../assets/homepagebackground.png';

const Home = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  const handleMouseMove = (e) => {
    const image = document.querySelector('.home-background');
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;

    image.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <img src={homepagebackground} alt="Background" className="home-background" />
      <button className="lang-switch" onClick={toggleLanguage}>
        {language}
      </button>
      <div className="home-content">
        <div 
          className="home-box gradient-box bordered-box"
          onMouseMove={(e) => {
            const box = e.target;
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            box.style.background = `linear-gradient(${x * 360}deg, #1e90ff, #00bfff)`;
          }}
        >
          {language === 'EN' ? 'Buy your equipment today!' : 'Achetez votre équipement aujourd\'hui!'}
        </div>
        <div className="home-box gradient-box smaller-box bordered-box">
          {language === 'EN' ? '#1 Certified company' : '#1 Entreprise certifiée'}
        </div>
      </div>
    </div>
  );
};

export default Home;
