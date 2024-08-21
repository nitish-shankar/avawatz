import React, { Component } from 'react';
import Navbar from './Navbar';
import './style.css'
import { FaStar, FaHeart, FaCheckCircle } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { BsLightningChargeFill } from "react-icons/bs";
import Footer from './Footer';
import ChatSupport from './ChatSupport';

function validateNumberInput(input) {
    // Remove any non-numeric characters except decimal point
    input.value = input.value.replace(/[^0-9.]/g, '');
    
    // Ensure only one decimal point is allowed
    if (input.value.split('.').length > 2) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
  }

class Home extends Component {
    
    state = {  } 

    render() { 
        return (
            <div>
                <Navbar/>
                <ChatSupport/>
                <Sidebar /> 
                <div className='center-div'>
                    <div class="center-content">
                            <div class="first-container">
                                <img src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png" alt="Description" class="top-icon"/>
                                <h1 class="avawatz-heading">Avawatz</h1>
                            </div>

                            {/* below it */}

                            <div>
                                <h2 class="first-subheading"></h2>
                            </div>

                            {/* below it */}

                            <div className="badge-container">

                                <div className="badge outline red">
                                    <BsLightningChargeFill className="icon" /> SPECIAL
                                </div>
                                <div className="badge filled yellow">
                                    AAPI FOUNDERS
                                </div>
                                <div className="badge filled orange">
                                    IMMIGRANT FOUNDERS
                                </div>
                                <div className="badge filled green">
                                    WOMEN FOUNDERS
                                </div>
                                <div className="badge filled gray">
                                    SECURITY & DEFENCE
                                </div>
                                <div className="badge filled gray">
                                    B2B
                                </div>
                                <div className="badge filled gray">
                                    B2G
                                </div>
                                <div className="badge filled gray">
                                    ROBOTICS
                                </div>
                            </div>
                            {/* blow that */}
                            
                            <div className='first-row'>
                                <div className='first-row-first-column'></div>
                                {/* Item1 */}
                                    <video  loop  muted="true" playsinline="true" width="720" height="420" controls poster="https://uploads.republic.com/p/offerings/slider_media_items/previews/default/000/027/248/27248-1714582181-e3c6ee14e95c09c7d0d75c26d4b48f49351ff74a.jpeg" className='full-size-video'>
                                        <source src="https://uploads.republic.com/p/offerings/slider_media_items/contents/original/000/027/248/27248-1714582093-4218547aeab8d05f13d0ff48676f6c0f67f0fa69.mp4" type="video/mp4"  provider="html5" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* Item2 */}
                                <div className='first-row-second-column'>
                                    {/* Item1 */}
                                    <div className="badge red bg gray">
                                        <BsLightningChargeFill className="icon" /> Special terms: 73d 09h 45m left
                                            <div className="hover-description">
                                            Until October 31, 2024 at 05:00 PM PDT, you can invest under special terms. Learn more
                                            </div>
                                    </div>

                                    {/* Item2 */}

                                    <h1> $358,884</h1>

                                    {/* Item3 */}

                                    <p className='fr-sc-bottom-borders'>Commited</p>

                                    {/* Item4 */}

                                    <h1 > 18
                                    </h1>

                                    {/* Item5 */}

                                    <p className='fr-sc-bottom-borders'>Investors
                                    </p>

                                    {/* Item6 */}

                                    <h1 > 74 days
                                    </h1>

                                    {/* Item7 */}

                                    <p className='fr-sc-bottom-borders'>Left to invest
                                    </p>

                                    {/* Item8 */}

                                    <button className='fr-sc-button'>Invest in Avawatz</button>

                                    <p className='fr-sc-button-subheading'>$2,500 minimum investment · <a  className= "not-underlined-a-tag" href='#'>Form CRS</a></p>
                                </div>
                                
                            </div>
                    
                        </div>
                    </div>

                    

                <div className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Investment summary</h2>
                    <ul>
                        <li className='investment-summary-li'>$4.5M+ funding raised, including $2.3M+ R&D funding from US Defense
                        </li><br/>
                        <li className='investment-summary-li'>The US Air Force and Army are using our technology
                        </li><br/>
                        <li className='investment-summary-li'>Beta launch of GENIE: Key to Precision & Efficiency in AI/ML Model Training
                        </li><br/>
                        <li className='investment-summary-li'>Q2 '24 FALCON: Trustworthy AI and ML for Robot Teams
                        </li><br/>
                        <li className='investment-summary-li'>The current Sales Pipeline is over $16M
                        </li><br/>
                        <li className='investment-summary-li'>The AI market is predicted to reach $1.07Trillion by 2027
                        </li><br/>
                        <li className='investment-summary-li'>The global Robotic market is predicted to reach $141B by 2027
                        </li>
                    </ul>
                    
                </div>

                <div className='home-page-summary'>
                    <p className='investment-info'></p>
                </div>


                <div id="pitch" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Pitch</h2>
                    <h2 className='home-page-summary-heading'>AvaWatz: Unlocking the Power of AI Robotics
                    </h2>
                    <p className='home-page-summary-paragraph'>
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/117/816/117816-1706917520-5d2b172ad3b931c2bce2d919031d65ad9f8dbb81.png"></img>
                    <h2 className='home-page-summary-heading'>
                    </h2>
                    <ul className='home-page-summary-paragraph'>
                        <li></li>
                        <br/><br/>
                        <li>
                        …<a  className= "not-underlined-a-tag" href= "#">Read More</a></li>
                        <br/>
                    </ul>

                </div>

                <div  id="leadership" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Leadership</h2>
                    <h2 className='home-page-summary-heading'>
                    </h2>
                    <img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/129/468/129468-1713375773-c656b2263c540b9a75a0b6a227271fedd6389d99.jpg"></img>
                    <p className='home-page-summary-paragraph'>
                    <br/><br/>
                    </p>
                    <p className='home-page-summary-paragraph'><h2 className='home-page-summary-heading'>Dr. Rajini Anachi, Founder & CEO:
                    </h2></p>
                    <p className='home-page-summary-paragraph'><h2 className='home-page-summary-heading'>Bala Jana, Co-Founder & Board Member
                    </h2> <a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>

                <div id="opportunity" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Opportunity</h2>
                    <h2 className='home-page-summary-heading'>Unleash the Power of Collaborative Robots
                    </h2>
                    <p className='home-page-summary-paragraph'>
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"></img>
                    <p className='home-page-summary-paragraph'><a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>


                <div id="market-traction" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Market & Traction</h2>
                    <h2 className='home-page-summary-heading'>A $1.2 Trillion Opportunity: AvaWatz Takes on the Future of AI Robotics</h2>
                    <p className='home-page-summary-paragraph'>
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"></img>
                    <p className='home-page-summary-paragraph'></p>
                    <ul className='home-page-summary-paragraph'>
                        <li></li><a  className= "not-underlined-a-tag" href= "#">Source</a>
                        <br/><br/>
                        <li><a  className= "not-underlined-a-tag" href= "#">Source</a> | <a  className= "not-underlined-a-tag" href= "#">Source</a></li>
                        <br/>
                        <li><a  className= "not-underlined-a-tag" href= "#">Read More</a></li>
                        <br/>
                    </ul>

                </div>

                <div id="biz-model" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Business model</h2>
                    <p className='home-page-summary-paragraph'></p>
                </div>

                <div id="competition" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Competition</h2>
                    <p className='home-page-summary-paragraph'>
                    <br/><br/>
                    <a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>
                
                <div id="summary" className='home-page-summary'>
                    {/* Item1 */}
                    <h2 className='home-page-summary-heading'>Summary</h2>
                    {/* Item2 */}
                    <video  autoplay="autoplay"  loop="loop" muted="true" playsinline="true" style={{ width: '691.102px', height: '1095.48px' }}>
                                    <source src="https://uploads.republic.com/p/videos/attachments/original/000/004/233/4233-1708099267-96f54db3e02f1a2f579c7b629e605860889311c3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                </div>

                <div id="disclaimers" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Disclaimers</h2>
                    <p className='home-page-disclaimer-paragraph'><a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>
                
                <hr class="simple-gray-line" />
                <div className='center-content'>
                    <div className='div-for-center'>{/*Centering tag investing tab container, second ling button*/}
                        <div class="investing-tab-container">
                            <input autocomplete="false" type="text" placeholder="2,500 min." class="investing-tab-input"
                            id="numberInput" 
                            oninput="validateNumberInput(this)"/>
                            <span class="dollar-sign">$</span>
                        </div>
                            
                                <button className='second-long-button'>Invest in Avawatz</button>
                            </div>
                    </div>{/*Centering tag investing tab container, second ling button end*/}
                <hr class="simple-gray-line" />
                
                <div id="about" className='About-Avawatz'>
                    <h3 className='aa-main-heading'>About AvaWatz</h3>
                    <br/><br/><br/><br/>
                    <div className='aa-columns'>
                        {/* FIrst Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Legal Name
                                </h4>
                                <h4 className='aa-sub-headings'>AvaWatz Company
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Founded
                                </h4>
                                <h4 className='aa-sub-headings'>Feb 2019
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>From
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Second Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Employees
                                </h4>
                                <h4 className='aa-sub-headings'>17
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Website
                                </h4>
                                <h4 className='aa-sub-headings'><a  className= "not-underlined-a-tag" href = "avawatz.com">avawatz.com</a>
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Social Media
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Thrird Column */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                            <h4 className='aa-headings'>Headquaters
                            </h4>
                                <div className="map-container">
                                    <iframe className='map-iframe'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.014605583535!2d-96.88086082454525!3d32.659055473713124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e91a9fc811f7b%3A0x244788bd18d04aab!2s3662%20W%20Camp%20Wisdom%20Rd%20%232044%2C%20Dallas%2C%20TX%2075237%2C%20USA!5e0!3m2!1sen!2sin!4v1724133682612!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr class="simple-gray-line" />

                <div id="team" className='avawatz-team'>
                    <h3 className='aa-main-heading'>AvaWatz Team</h3>
                    <br/><br/><br/><br/>
                    <div className='at-columns'>
                        {/* Profile 1 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Rajini Anachi"
                                title="Rajini Anachi"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/019/586/19586-1708105097-b598900ea74dd0b98c591810d26b3bdc0e1c0665.jpg"
                            />
                            <h4 className='at-name'>Rajini Anachi</h4>
                            <h4 className='at-position'>Founder</h4>
                            <p></p>
                        </div>

                        {/* Profile 2 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Bala Jana"
                                title="Bala Jana"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/313/20313-1707608322-2e202f3e82387bd8b0fa4b7cad6a47e105918f87.JPG"
                            />
                            <h4 className='at-name'>Bala Jana</h4>
                            <h4 className='at-position'>Co-Founder, Board Member</h4>
                            <p></p>
                        </div>

                        {/* Profile 3 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of [Name]"
                                title="[Name]"
                                srcSet="[Image URL] 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/550/20550-1708105159-42f8a94e3b29f36dfac66621550b29c71e8f6ac4.jpg"
                            />
                            <h4 className='at-name'>JR May
                            </h4>
                            <h4 className='at-position'>Business Development & Sales
                            </h4>
                            <p></p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className='at-columns'>
                        {/* Profile 1 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Rajini Anachi"
                                title="Rajini Anachi"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/551/20551-1708105205-b9277da969caf010a2e82be7a6f5f52426c04441.png"
                            />
                            <h4 className='at-name'>Rishabh Iyer
                            </h4>
                            <h4 className='at-position'>AI Researcher</h4>
                            <p></p>
                        </div>

                        {/* Profile 2 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Bala Jana"
                                title="Bala Jana"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/552/20552-1708046932-d553d17d25e6c34f358acf6e75dccfc597b31b0e.jpg"
                            />
                            <h4 className='at-name'>John McKendry</h4>
                            <h4 className='at-position'>Product Development</h4>
                            <p></p>
                        </div>

                        {/* Profile 3 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of [Name]"
                                title="[Name]"
                                srcSet="[Image URL] 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/585/20585-1708105219-844ef776747c2543d7b9824f8559f6152a57d7a4.jpg"
                            />
                            <h4 className='at-name'>Ajay Jain
                            </h4>
                            <h4 className='at-position'>Operations Manager
                            </h4>
                            <p></p>
                        </div>
                    </div>
                    <br/>
                    <div className='at-columns'>
                        {/* Profile 1 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Rajini Anachi"
                                title="Rajini Anachi"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/586/20586-1708047563-5c9b7cbf1951e094313d430af1119ef1e0ab3f08.jpeg"
                            />
                            <h4 className='at-name'>Walter Rawle
                            </h4>
                            <h4 className='at-position'>Sensors, AI & Autonomous Systems SME</h4>
                            <p></p>
                        </div>

                        {/* Profile 2 */}
                        <div className='at-column'>
                            <img
                                className='profile-image'
                                alt="Profile picture of Bala Jana"
                                title="Bala Jana"
                                srcSet="https://uploads.republic.com/p/roles/team_members/avatars/large_2x/000/019/586/19586-1708105097-24a3f9b8698d82cd2800b56ce4569c529108db83.jpg 2x"
                                src="https://uploads.republic.com/p/roles/team_members/avatars/large/000/020/587/20587-1708047643-21aeee76d5a0aa45f2832e53bf445cacf79fb307.jpeg"
                            />
                            <h4 className='at-name'>Neil Wadhwani</h4>
                            <h4 className='at-position'>Sales & Marketing Advisor</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                
                <hr class="simple-gray-line" />
                
                <div id="press" className='About-Avawatz'>
                    <h3 className='aa-main-heading'>Press</h3>
                    <br/><br/><br/><br/>
                    <div className='aa-columns'>
                        {/* FIrst Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Legal Name
                                </h4>
                                <h4 className='aa-sub-headings'>AvaWatz Company
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Founded
                                </h4>
                                <h4 className='aa-sub-headings'>Feb 2019
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>From
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Second Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Employees
                                </h4>
                                <h4 className='aa-sub-headings'>17
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Website
                                </h4>
                                <h4 className='aa-sub-headings'><a  className= "not-underlined-a-tag" href = "avawatz.com">avawatz.com</a>
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Social Media
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Thrird Column */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                            <h4 className='aa-headings'>Headquaters
                            </h4>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr class="simple-gray-line" />

                <div id="risks" className='About-Avawatz'>
                    <h3 className='aa-main-heading'>Risks</h3>
                    <br/><br/><br/><br/>
                    <div className='aa-columns'>
                        {/* FIrst Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Legal Name
                                </h4>
                                <h4 className='aa-sub-headings'>AvaWatz Company
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Founded
                                </h4>
                                <h4 className='aa-sub-headings'>Feb 2019
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>From
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Second Columm */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Employees
                                </h4>
                                <h4 className='aa-sub-headings'>17
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Website
                                </h4>
                                <h4 className='aa-sub-headings'><a  className= "not-underlined-a-tag" href = "avawatz.com">avawatz.com</a>
                                </h4>
                            </div>

                            <div className='aa-fc'>
                                <h4 className='aa-headings'>Social Media
                                </h4>
                                <h4 className='aa-sub-headings'>Texas Corporation
                                </h4>
                            </div>
                        </div>
                        {/* Thrird Column */}
                        <div className='aa-column'>
                            <div className='aa-fc'>
                            <h4 className='aa-headings'>Headquaters
                            </h4>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="last-container">
                    <img src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png" alt="Description" class="big-icon"/>
                    <h1 class="avawatz-big-heading">Avawatz</h1>
                </div>
                <div className='bold-button-container'>
                    <button className='bold-button'>Invest in Avawatz</button>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default Home;

