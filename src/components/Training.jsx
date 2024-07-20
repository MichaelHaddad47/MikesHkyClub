import React, { useState } from 'react';
import './Training.css';
import learnfastskating from '../assets/learnfastskating.jpeg';
import shootingdrill from '../assets/shootingdrill.jpg';
import stickhandling from '../assets/stickhandling.jpg';

const Training = () => {
  const [notes, setNotes] = useState({});
  const [month, setMonth] = useState(7); // August (0-based index)
  const [year, setYear] = useState(2024);

  const handleNoteChange = (date, event) => {
    const newNotes = { ...notes, [date]: event.target.value };
    setNotes(newNotes);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="training-calendar-day">
          <div className="training-date">{i}</div>
          <textarea
            className="training-note"
            placeholder="Add note"
            value={notes[i] || ''}
            onChange={(e) => handleNoteChange(i, e)}
          />
        </div>
      );
    }
    return days;
  };

  return (
    <div className="training-container">
      <div className="training-content">
        <div className="training-video-section">
          <h2 style={{ color: '#1e90ff', textAlign: 'center' }}>Tutorial Videos</h2>
          <div className="training-video-grid">
            <div className="training-video-box">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                <div className="training-image-placeholder">
                  <img src={learnfastskating} alt="Learn Fast Skating" className="training-video-image" />
                  <span className="video-time">3:45</span>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Watch Video 1</a>
              <p>Learn fast skating in 10 minutes!</p>
            </div>
            <div className="training-video-box">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                <div className="training-image-placeholder">
                  <img src={stickhandling} alt="Advanced Stickhandling" className="training-video-image" />
                  <span className="video-time">12:01</span>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Watch Video 2</a>
              <p>Advanced stickhandling techniques!</p>
            </div>
            <div className="training-video-box">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                <div className="training-image-placeholder">
                  <img src={shootingdrill} alt="Effective Shooting Drills" className="training-video-image" />
                  <span className="video-time">8:00</span>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Watch Video 3</a>
              <p>Effective shooting drills!</p>
            </div>
          </div>
        </div>
        <div className="training-calendar-section">
          <h2 style={{ color: '#1e90ff', textAlign: 'center' }}>Calendar</h2>
          <p className="training-calendar-info">Add your matches and training sessions!</p>
          <div className="training-calendar-header">
            <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
              {Array.from({ length: 12 }, (v, k) => (
                <option key={k} value={k}>{new Date(0, k).toLocaleString('default', { month: 'long' })}</option>
              ))}
            </select>
            <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
              {Array.from({ length: 5 }, (v, k) => (
                <option key={k} value={2022 + k}>{2022 + k}</option>
              ))}
            </select>
          </div>
          <div className="training-calendar">
            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
