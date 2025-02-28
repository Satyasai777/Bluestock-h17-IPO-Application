import React from 'react';
import './IpoCard.css';

const IpoCard = ({ companyLogo, companyName, priceBand, issueSize, issueType, listingDate, open, close }) => {
  return (
    
    <div className="ipo-card">
      <div className="ipo-header">
        <div className='ipoLogos'>
        <img src={companyLogo} alt={`${companyName} Logo`} className="ipo-logo" />
        </div>
        <h3 className="ipo-title">{companyName}</h3>
      </div>
      <div className="ipo-details">
        <div className="ipo-row">
          <div className="ipo-item">
            <p>PRICE BAND:</p>
            <p>{priceBand}</p>
          </div>
          <div className="ipo-item">
            <p>OPEN:</p>
            <p>{open}</p>
          </div>
          <div className="ipo-item">
            <p>CLOSE:</p>
            <p>{close}</p>
          </div>
        </div>
        <div className="ipo-row">
          <div className="ipo-item">
            <p>ISSUE SIZE:</p>
            <p>{issueSize}</p>
          </div>
          <div className="ipo-item">
            <p>ISSUE TYPE:</p>
            <p>{issueType}</p>
          </div>
          <div className="ipo-item">
            <p>LISTING DATE:</p>
            <p>{listingDate}</p>
          </div>
        </div>
      </div>
      <div className="ipo-buttons">
        <p className="rhp-btn">RHP</p>
        <p className="drhp-btn">DRHP</p>
      </div>
    </div>
  );
};

export default IpoCard;
