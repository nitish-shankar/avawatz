import React, { Component } from 'react';
import Navbar from './Navbar';
import './style.css'
import { FaStar, FaHeart, FaCheckCircle } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { BsLightningChargeFill } from "react-icons/bs";
import Footer from './Footer';
import ChatSupport from './ChatSupport';
import MiddleNavBar from './MiddleNavBar';

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
                                <h2 class="first-subheading">Trusted AI Robotics: Transforming Safety Across High-Risk and Tedious Tasks</h2>
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
                                    <div className="badge long red bg gray">
                                        <BsLightningChargeFill className="icon" /> SPECIAL TERMS: 73D 09H 45M LEFT
                                             <div className="hover-description">
                                            Until October 31, 2024 at 05:00 PM PDT, you can invest under special terms.<a href="#"> Learn more</a>
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

                <MiddleNavBar/>

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
                    <p className='investment-info'><center>OpenDeal Broker LLC charges you a two percent (2%) administrative fee on the gross principal transaction with a minimum fee of $5 and a maximum of $300. The fee is added to the total amount of your investment at checkout.
                    <br/><br/>
                    Past financial results are no guarantee of future performance. <a  className= "not-underlined-a-tag" href="">Click here for important information regarding Financial Projections</a> which are not guaranteed.
                    <br/><br/>
                    Investments in private companies are particularly risky and may result in total loss of invested capital.
                    <br/><br/>
                    <a  className= "not-underlined-a-tag" href="">Risks of early stage investment.</a> Not an offer to buy or sell securities. This is a long-term speculative illiquid investment. Investment is not FDIC or SiPC insured.
                    <br/><br/>
                    There may be other available opportunities that are similar to this investment but have different…<a  className= "not-underlined-a-tag" href="">Read more</a>
                    <br/><br/></center></p>
                </div>


                <div id="pitch" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Pitch</h2>
                    <h2 className='home-page-summary-heading'>AvaWatz: Unlocking the Power of AI Robotics
                    </h2>
                    <p className='home-page-summary-paragraph'>At AvaWatz, we aim to unlock the true potential of robotics with our trusted AI platform. Our AI empowers robots to work together like teammates in harsh, unpredictable environments, freeing humans from danger and high-risk tasks. We aim to make robots smarter and safer, boosting efficiency and keeping humans out of harm's way. Think advanced AI for robotics that tackles inspections, maintenance, and more, all delivered through our easy-to-use platform.
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/117/816/117816-1706917520-5d2b172ad3b931c2bce2d919031d65ad9f8dbb81.png"></img>
                    <h2 className='home-page-summary-heading'>Transforming Robots Into Cooperative Teams with Trusted AI
                    </h2>
                    <ul className='home-page-summary-paragraph'>
                        <li>Share information and make joint decisions: Robots analyze data, assess situations, and adapt their actions like a cohesive unit.</li>
                        <br/><br/>
                        <li>Handle the hard stuff: From hazardous inspections to disaster
                        …<a  className= "not-underlined-a-tag" href= "#">Read More</a></li>
                        <br/>
                    </ul>

                </div>

                <div  id="leadership" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Leadership</h2>
                    <h2 className='home-page-summary-heading'>Meet the Minds Behind AvaWatz: A Team Built for AI Robotics Brilliance
                    </h2>
                    <img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/129/468/129468-1713375773-c656b2263c540b9a75a0b6a227271fedd6389d99.jpg"></img>
                    <p className='home-page-summary-paragraph'>AvaWatz isn't just about the future of robotics. It's about the visionary minds making that future a reality. Led by a diverse group of seasoned innovators, entrepreneurs, and AI experts, this team possesses the firepower to revolutionize collaborative robots.
                    <br/><br/>
                    </p>
                    <p className='home-page-summary-paragraph'><h2 className='home-page-summary-heading'>Dr. Rajini Anachi, Founder & CEO:
                    </h2>A serial innovator in AI and robotics, Rajini has conquered challenges across industries, from defense to mining to cybersecurity. With a passion for empowering robots to work like teams, her vision is to redefine safety and efficiency with intelligent collaboration.</p>
                    <p className='home-page-summary-paragraph'><h2 className='home-page-summary-heading'>Bala Jana, Co-Founder & Board Member
                    </h2> A seasoned investor and veteran of start-up success, Bala brings a track…<a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>

                <div id="opportunity" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Opportunity</h2>
                    <h2 className='home-page-summary-heading'>Unleash the Power of Collaborative Robots
                    </h2>
                    <p className='home-page-summary-paragraph'>Today, countless "dirty, dull, and dangerous" tasks still fall on human shoulders. Hazardous inspections, disaster response, and infrastructure maintenance--these crucial but risky jobs put lives at stake and limit productivity. While robots excel at specific tasks, they often struggle to cooperate in unstructured environments. Changing weather, shifting terrain, and unpredictable conditions can throw traditional robots off balance.
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"></img>
                    <p className='home-page-summary-paragraph'>AvaWatz provides a solution with our leading-edge AI platform that equips robots with the ability to communicate, strategize, and adapt on the fly. Robots powered by our trusted AI can share data and insights in real-time, participate in joint decision-making efforts,…<a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
                </div>


                <div id="market-traction" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Market & Traction</h2>
                    <h2 className='home-page-summary-heading'>A $1.2 Trillion Opportunity: AvaWatz Takes on the Future of AI Robotics</h2>
                    <p className='home-page-summary-paragraph'>AvaWatz is tapping into a massive $1.2 Trillion combined market hungry for exactly what it offers: collaborative robotic solutions.
                    <br/><br/>
                    </p><img width="680" src="https://uploads.republic.com/p/images/attachments/original/000/122/096/122096-1709066421-b18b70487d79acb429c4eb84e32455969adabfac.png"></img>
                    <p className='home-page-summary-paragraph'>Here's why this opportunity is bigger than robots:</p>
                    <ul className='home-page-summary-paragraph'>
                        <li>The Global AI Market is Booming: Projected to reach $1.07 Trillion by 2027, AI is fueling the demand for smarter, more sophisticated solutions</li><a  className= "not-underlined-a-tag" href= "#">Source</a>
                        <br/><br/>
                        <li>Robots are Teaming Up: The need for autonomous mobile robots and intelligent collaboration is exploding across industries, from smart airports to infrastructure maintenance, expected to collectively reach $634 billion by 2026.<a  className= "not-underlined-a-tag" href= "#">Source</a> | <a  className= "not-underlined-a-tag" href= "#">Source</a></li>
                        <br/>
                        <li>The robotics market is experiencing unprecedented growth propelled by a surge in investments...<a  className= "not-underlined-a-tag" href= "#">Read More</a></li>
                        <br/>
                    </ul>

                </div>

                <div id="biz-model" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Business model</h2>
                    <p className='home-page-summary-paragraph'>The company’s business model consists of subscription services (SaaS) with Service Level (SL) focused on three areas of market verticals: Inspection & Maintenance, Surveillance, and Early Warning for Safety. The airfield flight line operation is one of the solutions under the Inspection & Maintenance track. Our services can potentially benefit commercial markets, both the private sector and the US military. The contract duration is from 1 year to 5 years long.</p>
                </div>

                <div id="competition" className='home-page-summary'>
                    <h2 className='home-page-summary-heading'>Competition</h2>
                    <p className='home-page-summary-paragraph'>AvaWatz is in the service robots industry. The International Organization for Standardization defines a “service robot” as a robot “that performs useful tasks for humans or equipment excluding industrial automation applications.<br/><br/> Service robots typically perform tedious, tiring, or dangerous tasks for humans. Indirect competitors in this industry are Locus Robotics, InVia Robotics in warehouse operation, Badger Technologies in retail inventory, and Savioke for indoor delivery-hospitality. There are drone manufacturers such as DJI, Parrot, Skydio, and ground robot manufacturers such as Boston Dynamics who would be better partners than competitors.
                    <br/><br/>
                    AvaWatz started out to build robotics for airfield flightline operations, and we realized that… ”<a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
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
                    <p className='home-page-disclaimer-paragraph'>Certain information set forth in this presentation contains “forward-looking information”, including “future-oriented financial information” and “financial outlook”, under applicable securities laws (collectively referred to herein as forward-looking statements). Except for statements of historical fact, the information contained herein constitutes forward-looking statements and includes, but is not limited to, the (i) projected financial performance of the Company; (ii) completion of, and the use of proceeds from, the sale of the shares being offered hereunder; (iii) the expected development of the Company’s business, projects, and joint ventures; (iv) execution of the Company’s vision and growth strategy, including with respect to future…<a  className= "not-underlined-a-tag" href= "#">Read More</a></p>
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
                            <p>2x founder, previously founded CyGlass, which was acquired by Nominet in 2020. Focused on bringing tremendous value to AvaWatz customers, employees, and investors.</p>
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
                            <p>Investor and early team member at several start-ups acquired by Fortune 500 companies. Leading product innovation, commercialization, and product-market fit.</p>
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
                            <p>Proven expertise in DoD and commercial sales. Brings an extensive network of connections for direct sales, partnerships, and rapidly scaling for growth. Previously led business development at mZeal/Cyglass (acquired by Nominet in 2020)</p>
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
                            <p>Dr. Rishabh Iyer, an Asst. Professor at the University of Texas, Dallas. Dr. Iyer specializes in efficient machine learning (ML) and advance combinatorial optimization and information theory. He has won several awards and fellowships over the years.</p>
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
                            <p>Investor and early team member at several start-ups acquired by Fortune 500 companies. Leading product innovation, commercialization, and product-market fit.</p>
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
                            <p>Proven expertise in DoD and commercial sales. Brings an extensive network of connections for direct sales, partnerships, and rapidly scaling for growth. Previously led business development at mZeal/Cyglass (acquired by Nominet in 2020)</p>
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
                            <p>Dr. Walter Rawle has experience across a wide spectrum of domains including, multiple sensor physics, robotic hardware interfaces, advanced combinatorial machine learning, stochastic analysis, position-navigation-timing for GPS-denied.</p>
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
                            <p>Neil has 25+ years of experience in Sales and Marketing in Fortune 500 companies. Over the course of his career, his focus has been Technology Sales, Presales, ITOps, Digital Marketing, and executive leadership experience with high-growth startups.</p>
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

