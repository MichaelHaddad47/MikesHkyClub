import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-item">
        <p>1111 Bank Street, Ottawa</p>
        <p>K1K 1K1</p>
      </div>
      <div className="contact-separator"></div>
      <div className="contact-item">
        <p>613 - 777 - 7777</p>
      </div>
      <div className="contact-separator"></div>
      <div className="contact-item">
        <p>mikeshkyclub@gmail.com</p>
      </div>
      <div className="contact-separator"></div>
      <div className="contact-item">
        <p>Opening hours...</p>
        <p>Weekdays: 8:00 - 20:30</p>
        <p>Weekends: 7:00 - 16:00</p>
      </div>
    </div>
  );
};

export default ContactBar;
