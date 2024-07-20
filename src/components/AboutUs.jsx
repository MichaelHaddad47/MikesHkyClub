import React, { useState } from 'react';
import './AboutUs.css';
import logo from '../assets/mikeshkyclublogo.png';

const faqs = [
  {
    question: 'How many employees does Mike’s Hky Club have?',
    answer: 'We currently employ around 3500 people and are hiring more each and every day! We are proud of our employees and treat each other like family.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer a variety of services including hockey coaching, equipment sales, and a community platform for hockey enthusiasts.'
  },
  {
    question: 'Where are you located?',
    answer: 'Our headquarters are located in Montreal, Canada, but we have branches and partners all over the world.'
  },
  {
    question: 'How can I join the Mike’s Hky Club team?',
    answer: 'You cant🥱'
  },
  {
    question: "What's the point of the training section?",
    answer: 'The training section is designed to help you improve your hockey skills through guided lessons and exercises provided by our expert coaches.'
  },
  {
    question: 'How can I use the calendar?',
    answer: 'You can use the calendar to schedule training sessions, and keep track of important events related to your hockey journey.'
  },
  {
    question: 'Can I buy multiple plans?',
    answer: 'Yes, you can purchase multiple plans to suit your needs. Contact our support team for assistance with customizing your plan.'
  },
  {
    question: 'Can I watch tutorial videos for free?',
    answer: 'Yes, we offer a selection of free tutorial videos to help you get started. For more advanced content, consider subscribing to one of our premium plans.'
  }
];

const AboutUs = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <img src={logo} alt="Mike's Hky Club Logo" className="aboutus-logo" />
        <div className="aboutus-box">
          <h1>About Us</h1>
          <p>We began this company on July 5th, 2003. We are super passionate about hockey!</p>
          <p>Check out our pages if you are in need of coaching, equipment or just need a community to talk to!</p>
          <p>Do not hesitate to contact us with the information found at the bottom of our page!</p>
        </div>
      </div>
      <div className="faq-section">
        <h2>FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>Q. {faq.question}</span>
              <span className="arrow">&#9660;</span>
            </div>
            {activeIndices.includes(index) && <div className="faq-answer">A. {faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
