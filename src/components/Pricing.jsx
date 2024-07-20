import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [popupItem, setPopupItem] = useState(null);

  const handleAddToCart = (item) => {
    setPopupItem(item);
  };

  const handleClosePopup = () => {
    setPopupItem(null);
  };

  const packages = [
    {
      name: 'Basic Package',
      price: '$50/month',
      features: [
        'Coaching 3 days a week',
        'Access to training videos',
        'Personalized feedback'
      ],
    },
    {
      name: 'Premium Package',
      oldPrice: '$150',
      price: '$100/month',
      discount: 'Save 33%',
      features: [
        'Coaching 7 days a week',
        'Access to training videos',
        'Personalized feedback',
        'Monthly progress report',
        'Access to community forums',
        'Free entry to skill workshops',
        'One-on-one coaching sessions'
      ],
    },
    {
      name: 'Standard Package',
      price: '$85/month',
      features: [
        'Coaching 5 days a week',
        'Access to training videos',
        'Personalized feedback',
        'Monthly progress report',
        'Access to community forums'
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <div className="curved-background">
        <h1 className="curved-title">PRICING</h1>
      </div>
      <div className="pricing-content">
        {packages.map((pkg, index) => (
          <div className={`pricing-card ${pkg.name === 'Premium Package' ? 'premium' : ''}`} key={index}>
            <h2 className={pkg.name === 'Premium Package' ? 'premium-title' : ''}>{pkg.name}</h2>
            {pkg.oldPrice && <p className="old-price">{pkg.oldPrice}</p>}
            <p className="price">{pkg.price}</p>
            {pkg.discount && <p className="save-33">{pkg.discount}</p>}
            <ul className="pricing-checklist">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleAddToCart(pkg)}>Add to cart</button>
          </div>
        ))}
      </div>
      {popupItem && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={handleClosePopup}>X</span>
            <h1 className="popup-title">You added to cart</h1>
            <h2>{popupItem.name}</h2>
            <p>{popupItem.price}</p>
            <ul className="popup-checklist">
              {popupItem.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
