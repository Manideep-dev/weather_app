import React from 'react';
import cloudyImage from './assets/cloudy.png';

function Header({ cityname }) {
  return (
    <>
      <div className="header">
        Weather App
        <img className='weatherimage' src={cloudyImage} alt='weather_image' />
      </div>
    </>
  );
}

export default Header;