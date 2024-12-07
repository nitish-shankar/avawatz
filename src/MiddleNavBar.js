import React, { useEffect, useState } from 'react';
import './MiddleNavBar.css';

const MiddleNavBar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 832); // Adjust the value for earlier or later sticking
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`middle-nav-bar ${isSticky ? 'sticky' : ''}`}>
      <div className="middle-nav-content">
        <div className="middle-nav-items">
          <a href="#item1" className="middle-nav-link">Pitch</a>
          <a href="#item2" className="middle-nav-link">Updates</a>
        </div>
        <button className="middle-nav-button">Invest in Avawatz</button>
      </div>
    </nav>
  );
};

export default MiddleNavBar;
