import React from 'react';
import './PhoneMockup.css';

const PhoneMockup = ({ imageSrc, title, description, className = '' }) => {
  return (
    <div className={`phone-container ${className}`}>
      <div className="phone-frame">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <img 
            src={imageSrc} 
            alt={title} 
            className="phone-image"
            loading="lazy"
          />
        </div>
        <div className="phone-home-indicator"></div>
      </div>
      {title && (
        <h4 className="phone-title">{title}</h4>
      )}
      {description && (
        <p className="phone-description">{description}</p>
      )}
    </div>
  );
};

export default PhoneMockup;
