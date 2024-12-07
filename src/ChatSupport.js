import React, { useState, useEffect } from 'react';
import './ChatSupport.css';

const ChatSupport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Initialize visibility state
  
    const toggleChat = () => {
      setIsOpen(!isOpen);
    };
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the form submission logic here
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Adjust scroll position trigger as needed
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once when the component mounts
  
  return (
    <div className={`chat-support-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-button" onClick={toggleChat}>
        <i className="fas fa-question-circle"></i> Support
      </button>
      {isOpen && (
        <div className="chat-support">
          <div className="chat-support-header">
            <h2>How can we help?</h2>
          </div>
          <p>We typically respond within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Offering name you're writing about (optional)</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="5" required></textarea>
            </div>
            <div className="form-group">
              <label>Attachments</label>
              <input type="file" multiple />
              <small>Add up to 5 files</small>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <button
        id="scroll-to-top"
        className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
        onClick={handleScrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
        </button>
    </div>
  );
};

export default ChatSupport;
