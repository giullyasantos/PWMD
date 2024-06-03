import '../App.css';
import React, { useState, useEffect, useRef} from 'react';

import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

import Home1 from '../images/home/first-page/home1.JPG';
import Home2 from '../images/home/first-page/home2.jpeg';
import Home3 from '../images/home/first-page/home3.jpg';
import Home4 from '../images/home/first-page/home4.png';
import Home5 from '../images/home/first-page/home5.png';

import PWMD from '../images/pwmd.webp';
import Check from '../images/home/givinghelp.jpg';
import CheckMobile from '../images/home/givinghelp2.jpg';
import Book from '../images/home/book.jpg';
import BookMobile from '../images/home/bookmobile.jpg';


import alessandra from '../images/home/testimonials/alessandra.jpg';
import claudia from '../images/home/testimonials/claudia.jpg';
import helaine from '../images/home/testimonials/helaine.jpg';
import nilton from '../images/home/testimonials/nilton.jpg';
import nubia from '../images/home/testimonials/nubia.jpg';
import paula from '../images/home/testimonials/paula.jpg';
import soledad from '../images/home/testimonials/soledad.jpg';
import financial from '../images/home/financial.webp';
import fundraiser from '../images/home/fundraiser.webp';
import healtheducation from '../images/home/healthevent.webp';

import alessandraMobile from '../images/home/testimonials/alessandramobile.png';
import claudiaMobile from '../images/home/testimonials/claudiamobile.png';
import helaineMobile from '../images/home/testimonials/helainemobile.png';
import niltonMobile from '../images/home/testimonials/niltonmobile.png';
import nubiaMobile from '../images/home/testimonials/nubiamobile.png';
import paulaMobile from '../images/home/testimonials/paulamobile.png';
import soledadMobile from '../images/home/testimonials/soledadmobile.png';


const images = [
  { src: helaine, alt: "Helaine's Review People Who Make A Difference" },
  { src: alessandra, alt: "Alessandra's Review People Who Make A Difference" },
  { src: claudia, alt: "Claudia's Review People Who Make A Difference" },
  { src: nilton, alt: "Nilton's Review People Who Make A Difference" },
  { src: nubia, alt: "Nubia's Review People Who Make A Difference" },
  { src: paula, alt: "Paula's Review People Who Make A Difference" },
  { src: soledad, alt: "Soledad's Review People Who Make A Difference" },
];

const mobileImages = [
  { src: helaineMobile, alt: "Helaine's Review People Who Make A Difference" },
  { src: alessandraMobile, alt: "Alessandra's Review People Who Make A Difference" },
  { src: claudiaMobile, alt: "Claudia's Review People Who Make A Difference" },
  { src: niltonMobile, alt: "Nilton's Review People Who Make A Difference" },
  { src: nubiaMobile, alt: "Nubia's Review People Who Make A Difference" },
  { src: paulaMobile, alt: "Paula's Review People Who Make A Difference" },
  { src: soledadMobile, alt: "Soledad's Review People Who Make A Difference" },
];



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const rootStyles = getComputedStyle(document.documentElement);
  const slideWidth = parseFloat(rootStyles.getPropertyValue('--slide-width'));

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
   return (
    <div className='home'>
        <SideNavbar/>
        <section className='home-page'>
            <div className='left-top'>
                <div class="grid">
                  <div class="div1 photo"><img src={Home1} alt=""/></div>
                  <div class="div2 photo"><img src={Home2} alt=""/> </div>
                  <div class="div3 photo"><img src={Home3} alt=""/> </div>
                  <div class="div4 photo"><img src={Home4} alt=""/> </div>
                  <div class="div5 photo"><img src={Home5} alt=""/> </div>
                </div>
            </div>
            <div className='right-bottom'>
                <img className='logo' src={PWMD} alt="hey"/>
                <h1>RAISE AWARENESS, EDUCATE, AND PROVIDE ASSISTANCE TO THOSE WITHOUT MEDICAL INSURANCE.</h1>
                <p>A 501(c)(3) public charity nonprofit organization dedicated to providing financial assistance for affordable healthcare to the uninsured population.</p>
            </div>
        </section>
        <section className='our-mission'>
            <div className='left-top'>
                <h2>Our Mission</h2>
                <p>At People Who Make A Difference, we envision a world where no individual is deprived of healthcare due to lack of insurance. Our mission is clear: to remove financial barriers to healthcare for the uninsured by providing essential support and resources. </p> 
            </div>
            <div className='right-bottom'>
                <div className='description'>
                    <h2>Helping the Uninsured: Join Us in Making Healthcare Accessible</h2>
                    <h3>According to the <a className='special' href="https://flhealthcharts.gov/ChartsDashboards/rdPage.aspx?rdReport=NonVitalIndNoGrpCounts.Dataviewer">FL Health Charts</a>, there are 2,571,518 Uninsured Individuals in Florida as of 2022. By providing Financial Aid for Essential Health Services Allowed Us To:​</h3>
                    <div className='accomplishments'>
                    <ul>
                        <li>Reduce Mortality and Premature Death</li>
                        <li>Lower Cancer Mortality Rates</li>
                        <li>Decreased Medical Expenses</li>
                    </ul>
                    </div>
                </div>
                <div className='image-slider' id='first'>
                     <img src={Check} alt="People Who Make A Difference Giving A $1080 Check to person in need of financial and medical assistance"/>
                </div>
            </div>
        </section>
        <div className='extra'>
         <div className='image-slider' id='second'>
              <img src={CheckMobile} alt="People Who Make A Difference Giving A $1080 Check to person in need of financial and medical assistance"/>
         </div>
        </div>
        <section className='ways-help'>
            <div className='left-top'>
                <h2>Need Help? We are Here for You.</h2>
                <p>Do you have a chronic health condition? Need to go to the doctor? Do not know where to go? Can not afford your prescription?</p>
                
                <p><strong>We can assist you!</strong> Together, we can make a difference in your health and well-being. You are not alone.</p>
		        <div className='end' style={{ marginTop: '5%' }}>
                    <a href="/projects">Apply Now!
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className='right-bottom'>
                <div style={{ backgroundImage: `url(${financial})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3>Financial Assistance</h3>
                </div>
                <div style={{ backgroundImage: `url(${fundraiser})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <h3>Fundraisers</h3>
                </div>
                <div style={{ backgroundImage: `url(${healtheducation})`, backgroundSize: 'cover', backgroundPosition: 'right center' }}>
                    <h3>Health Education</h3>
                </div>
            </div>
        </section>
        <section className='testimonials'>
            <h2 style={{color: '#027593'}}>Transforming Lives: Our Community's Stories</h2>
            <div className="slider-wrapper">
              <div className="slider" style={{transform: `translateX(-${currentSlide * slideWidth}%)`,}}>
                {(isMobile ? mobileImages : images).map((image, index) => (
                  <img key={index} src={image.src} alt={image.alt} className="slide"/>
                ))}
              </div>
              <div className="slider-nav">
                <button className="prev" onClick={handlePrev}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg></button>
                <button className="next" onClick={handleNext}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z"/></svg></button>
              </div>
            </div>
            <a id="review-btn" href="https://search.google.com/local/writereview?placeid=ChIJjTz65Hh-54gRDr4NrcXKJF4"> 
                Write Review
                <div class="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" id="star">
                        <path fill="none" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path>
                    </svg>
                </div>
            </a>
        </section>
	<section className='book'>
	    <div className='left-top'>
                <div className='image-slider'>
                    <div className='photo first'>
                        <img src={Book} alt="Daily Healing And Transformation, a Book by Marcia Romero"/>
                     </div>
                    <div className='photo second'>
                        <img src={BookMobile} alt="Daily Healing And Transformation, a Book by Marcia Romero"/>
                     </div>
                </div>
	    </div>
	    <div className='right-bottom'>
		<h2 className="first">Daily Healing And Transformation,<br/> a Book by Marcia Romero</h2>
                <h2 className="second">Daily Healing And Transformation, a Book by Marcia Romero</h2>
                <p>This incredible book depicts our CEO's inspiring journey from a difficult childhood and life-threatening illness to personal and professional success. With unwavering faith, Marcia forgave past humiliations and overcame bitterness, becoming known for her kindness. She sees herself as a continuous work in progress, embracing daily transformation.</p>
		<p>Discover Marcia's remarkable story and let it inspire your own journey.</p> 
		<a href="https://www.amazon.com/Daily-Healing-Transformation-Marcia-Romero/dp/6556421413/ref=sr_1_1?crid=2N0F72U85JAPW&keywords=daily+healing+and+transformation&qid=1686153989&sprefix=daily+healing+nd+transformation,aps,485&sr=8-1&fbclid=PAZXh0bgNhZW0CMTEAAaYy975kXKtqpVM0mGaOGv2IzKtuRndI3OUZqA0IyapKupmenzsXXPbn-_M_aem_AWa5j7QxDIPwtD7uOfg2mhfiXtmUFA46rq_9sL_O49yb-P60IUZlkf4lszdeXcPk5faIwd775j4UwNLXbaky_vpU">Shop
                        <div class="icon">
                            <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 8.0159598,962.36215 c -1.6569,0 -3,1.34315 -3,3 0,1.65685 1.3431,3 3,3 l 9.5625002,0 10.3125,48.65625 c 0.408,1.8316 1.6084,3.356 3.125,3.3438 l 50,0 c 1.5849,0.022 3.042695,-1.4149 3.042695,-3 0,-1.5851 -1.457795,-3.0224 -3.042695,-3 l -47.5625,0 -1.2813,-6.0001 52.843795,0 c 1.3432,-0.01 2.6123,-1.033 2.9062,-2.3437 l 7,-30 c 0.3901,-1.74107 -1.122,-3.64346 -2.9062,-3.65625 l -67.437495,0 -1.625,-7.625 c -0.2839,-1.3321 -1.5755,-2.3764 -2.9375,-2.375 z m 17.8125002,16 62.406295,0 -5.593795,23.99995 -51.7188,0 z m 15.1875,44.00005 c -5.4873,0 -10,4.5126 -10,10 0,5.4873 4.5127,10 10,10 5.4873,0 10,-4.5127 10,-10 0,-5.4873 -4.5127,-10 -10,-10 z m 30,0 c -5.4873,0 -10,4.5126 -10,10 0,5.4873 4.5127,10 10,10 5.4873,0 10,-4.5127 10,-10 0,-5.4873 -4.5127,-10 -10,-10 z m -30,6 c 2.2447,0 4,1.7553 4,4 0,2.2447 -1.7553,4 -4,4 -2.2445,0 -4,-1.7554 -4,-4 0,-2.2446 1.7555,-4 4,-4 z m 30,0 c 2.2447,0 4,1.7553 4,4 0,2.2447 -1.7553,4 -4,4 -2.2445,0 -4,-1.7554 -4,-4 0,-2.2446 1.7555,-4 4,-4 z" fill="currentColor" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
                        </div>
                </a>
	    </div>
	</section>
        <section className='call-to-action'>
            <div className='get-involved'>
                <lord-icon id='icon-talk' src="https://cdn.lordicon.com/wzrwaorf.json" trigger="in" delay="400" state="in-reveal" colors="primary:#fd3628,secondary:#027593"></lord-icon>
                <div>
                    <h2>Get Involved</h2>
                    <p id='first-p'>Your support is crucial. Whether you choose to donate or volunteer, you help us drive vital changes and provide essential services. Let's empower our community together.</p>
                </div>
                <p id='second-p'>Your support is crucial. Whether you choose to donate or volunteer, you help us drive vital changes and provide essential services. Let's empower our community together.</p>
            </div>
            <div className='next-to-each-other'>
                <a href="/donate"> Donate
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24"><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"/></svg>
                    </div>
                </a>
                <a href="/volunteer"> Volunteer
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" height="800px" width="800px" version="1.2" baseProfile="tiny" id="Layer_1" viewBox="0 0 256 256" >
                            <path d="M216.2,92.5c-5.2-5.3-13.8-5.4-19-0.1L157.8,134l-0.3,0.3c-25.5,0.1-46.2,16.8-46.2,37.3h-5.8c0-23.6,23.1-42.8,51.6-43.1  l-0.1-19.4c0,0-0.1-85.4-0.1-85.5c-0.7-5.8-5.6-10.3-11.7-10.3c-6.5,0-11.7,5.3-11.7,11.7c0,0.2,0,72.9,0,72.9l-5.2,0.2l-0.1-81.2  c0-6.5-5.3-11.7-11.8-11.7s-11.7,5.3-11.7,11.8v81h-5.6l0.1-63.6c0-6.5-5.3-11.7-11.8-11.7S75.7,28,75.7,34.4V98h-5.2l0.1-34.2  c0-6.5-5.3-11.7-11.8-11.7s-11.7,5.3-11.7,11.8c0,108.4,0,108.4,0,111c0,13.2,6.8,24.4,16.2,28.1v48.4h0.2v0.4l81.2-0.4v-51.1  c2.5-0.9,5.1-2,7.6-3.3c15.4-7.9,26.1-20.3,29.5-32.5c2.9-4.3,36.8-56.2,36.8-56.2C221.4,103.7,220.6,96.9,216.2,92.5z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </section>
        <footer><Footer/></footer>
    </div>
  );
}

export default Home;
