import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <img 
            src="https://assets.republic.com/assets/logo/full/black/logo-2c113fd1a194abf7fa3c5809c1470ca753c7a8dda7c2a3e86544990495e3056e.svg" 
            alt="Brand Logo" 
            className="navbar-logo" 
          />
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <div className={`navbar-items ${menuOpen ? 'open' : ''}`}>
          {/* Investors Dropdown */}
          <div className="navbar-dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Investors
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-column">
                <h3>All Investors</h3>
                <a href="#">Primary market</a>
                <a href="#">Invest in startups</a>
                <a href="#">Secondary market</a>
                <a href="#">Buy and sell assets</a>
              </div>
              <div className="dropdown-column">
                <h3>Republic Note</h3>
                <a href="#">Own a piece of Republic's upside</a>
                <h3>Investor Network Membership</h3>
                <a href="#">Receive exclusive discounts and benefits</a>
                <p>Accredited only</p>
                <h3>Republic Venture</h3>
                <a href="#">Opportunities for accredited investors</a>
                <h3>Institutional</h3>
                <a href="#">Republic Capital</a>
                <a href="#">Multi-stage venture firm</a>
                <a href="#">Republic Digital</a>
                <a href="#">Crypto hedge fund</a>
              </div>
              <div className="dropdown-column">
                <h3>More</h3>
                <a href="#">Wallet</a>
                <a href="#">Manage your digital assets</a>
                <a href="#">Mobile app</a>
                <a href="#">Available on iOS or Android</a>
                <a href="#">Learning center</a>
                <a href="#">Explore investor resources</a>
                <a href="#">FAQ</a>
                <a href="#">Get your questions answered</a>
                <h3>What's New</h3>
                <a href="#">Unicorn Hunt</a>
                <p>Thu, Sep 19 · 23:30pm-00:30am</p>
              </div>
            </div>
          </div>

          {/* Business Dropdown */}
          <div className="navbar-dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Business
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-column">
                <h3>Growth Capital Solutions</h3>
                <a href="#">Community fundraising</a>
                <a href="#">Raise on Republic</a>
              </div>
              <div className="dropdown-column">
                <h3>Tokenized Assets</h3>
                <a href="#">Design, launch, manage tokenized assets</a>
                <a href="#">Sharedrops</a>
                <a href="#">Gift equity as a reward</a>
              </div>
              <div className="dropdown-column">
                <h3>Web3 Services</h3>
                <a href="#">Advisory</a>
                <a href="#">Access veteran web3 advisors</a>
                <a href="#">Infrastructure</a>
                <a href="#">Stake your digital assets</a>
                <a href="#">Tokenization</a>
                <a href="#">Deploy your assets on-chain</a>
                <a href="#">Asset management</a>
                <a href="#">Explore digital asset funds</a>
              </div>
              <div className="dropdown-column">
                <h3>Institutional Services</h3>
                <a href="#">Capital fundraising</a>
                <a href="#">Venture growth-stage funding</a>
                <a href="#">Broker dealer</a>
                <a href="#">Regulated capital services</a>
              </div>
            </div>
          </div>

          {/* Other nav items */}
          <div className="navbar-search">
            <input type="text" placeholder="🔍 Search..." />
          </div>
          <div className={`navbar-dropdown-us ${dropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
                    <button className="dropdown-btn-us">
                      <i className="world-icon">🌐</i> US
                    </button>
                      <div className="dropdown-content-us">
                        <a href="#">Region preference</a>
                        <a href="#">Global</a>
                        <a href="#">US</a>
                        <a href="#">Europe</a>
                      </div>
                  </div>
          <button className="navbar-btn">Log in</button>
          <button className="navbar-btn">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
