import React, { useState } from 'react';
import './Community.css';
import pfp1 from '../assets/pfp1.jpg';
import pfp2 from '../assets/pfp2.jpg';
import pfp3 from '../assets/pfp3.jpg';
import pfp4 from '../assets/pfp4.jpg';
import pfp5 from '../assets/pfp5.jpg';
import pfp6 from '../assets/pfp6.jpg';
import pfp7 from '../assets/pfp7.jpg';
import pfp8 from '../assets/pfp8.jpg';
import pfp9 from '../assets/pfp9.jpg';
import pfp10 from '../assets/pfp10.jpg';
import pfp11 from '../assets/pfp11.jpg';
import pfp12 from '../assets/pfp12.jpg';
import pfp13 from '../assets/pfp13.jpg';
import pfp14 from '../assets/pfp14.jpg';
import pfp15 from '../assets/pfp15.jpg';
import pfp16 from '../assets/pfp16.jpg';
import pfp17 from '../assets/pfp17.jpg';
import pfp18 from '../assets/pfp18.jpg';

const reviews = [
  { name: 'Alice Johnson', date: '01/01/2024', stars: 5, review: 'Excellent service, highly recommend!', image: pfp1 },
  { name: 'Bob Smith', date: '02/01/2024', stars: 3, review: 'Good service but could be better.', image: pfp2 },
  { name: 'Charlie Brown', date: '03/01/2024', stars: 4, review: 'Very satisfied with the service.', image: pfp3 },
  { name: 'Diana Prince', date: '04/01/2024', stars: 5, review: 'Fantastic experience!', image: pfp4 },
  { name: 'Edward Norton', date: '05/01/2024', stars: 2, review: 'Not what I expected.', image: pfp5 },
  { name: 'Fiona Apple', date: '06/01/2024', stars: 1, review: 'Very disappointed.', image: pfp6 },
  { name: 'George Harris', date: '07/01/2024', stars: 4, review: 'Good overall.', image: pfp7 },
  { name: 'Hannah Lee', date: '08/01/2024', stars: 5, review: 'Amazing service!', image: pfp8 },
  { name: 'Ian Curtis', date: '09/01/2024', stars: 3, review: 'Average experience.', image: pfp9 },
  { name: 'Jane Doe', date: '10/01/2024', stars: 2, review: 'Could be improved.', image: pfp10 },
  { name: 'Kevin Bacon', date: '11/01/2024', stars: 4, review: 'Pretty good.', image: pfp11 },
  { name: 'Laura Palmer', date: '12/01/2024', stars: 5, review: 'Loved it!', image: pfp12 },
  { name: 'Michael Scott', date: '13/01/2024', stars: 1, review: 'Terrible service.', image: pfp13 },
  { name: 'Nancy Drew', date: '14/01/2024', stars: 4, review: 'Satisfied with the service.', image: pfp14 },
  { name: 'Oscar Wilde', date: '15/01/2024', stars: 5, review: 'Outstanding!', image: pfp15 },
  { name: 'Pam Beesly', date: '16/01/2024', stars: 3, review: 'It was okay.', image: pfp16 },
  { name: 'Quincy Jones', date: '17/01/2024', stars: 2, review: 'Not great.', image: pfp17 },
  { name: 'Rachel Green', date: '18/01/2024', stars: 5, review: 'Excellent!', image: pfp18 },
];

const Community = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleReviewClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="community-container">
      <div className="community-header">
        <div className="community-total-reviews">
          <span className="community-stars">⭐⭐⭐⭐⭐</span>
          <span>18 Reviews</span>
        </div>
        <button className="community-write-review" onClick={handleReviewClick}>
          Write a review
        </button>
      </div>
      <div className="community-reviews-box">
        <div className="community-content">
          {reviews.map((review, index) => (
            <div className="community-review-card" key={index}>
              <div className="community-review-header">
                <img src={review.image} alt="Profile" className="community-review-image" />
                <div className="community-review-info">
                  <h3>{review.name}</h3>
                  <p className="community-review-date">{review.date}</p>
                  <p className="community-review-stars">
                    {'⭐'.repeat(review.stars)}
                  </p>
                </div>
              </div>
              <p className="community-review-text">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="community-popup">
          <div className="community-popup-content">
            <p>Unavailable at the moment</p>
            <button className="community-close-popup" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
