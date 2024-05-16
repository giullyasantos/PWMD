import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';

import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

import PWMD from '../images/pwmd.webp';
import HomePhoto from '../images/home/homepage.webp';
import Event2011 from '../images/home/2011 event.webp';

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
                <div className='image-slider'>
                    <div className='photo'>
                        <img src={HomePhoto} alt="hey"/>
                     </div>
                </div>
            </div>
            <div className='right-bottom'>
                <img className='logo' src={PWMD} alt="hey"/>
                <h1>RAISE AWARENESS, EDUCATE AND ASSIST THE UNINSURED POPULATION.</h1>
                <p>A 501(c)(3) public charity nonprofit organization dedicated to providing financial assistance for affordable healthcare to the uninsured population.</p>
            </div>
        </section>
        <section className='our-mission'>
            <div className='left-top'>
                <h2>Our Mission</h2>
                <p>At People Who Make A Difference, we envision a world where no individual is deprived of healthcare due to lack of insurance. Our mission is clear: to remove financial barriers to healthcare for the uninsured by providing essential support and resources. </p> 
                <div className='end' style={{ marginTop: '5%' }}>
                    <Link to="/about"> Learn More
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>
                 </div>    
            </div>
            <div className='right-bottom'>
                <div className='description'>
                    <h2>Helping the Uninsured: Join Us in Making Healthcare Accessible</h2>
                    <h3>210,566 Uninsured Individuals in Orange County, FL as of 2021. By providing Financial Aid for Essential Health Services Allowed Us To:​</h3>
                    <div className='accomplishments'>
                    <ul>
                        <li>Reduce Mortality and Premature Death</li>
                        <li>Lower Cancer Mortality Rates</li>
                        <li>Decreased Medical Expenses</li>
                    </ul>
                    </div>
                </div>
                <div className='image-slider' id='first'>
                     <img src={Event2011} alt="TESTIMONIALS HERE"/>
                </div>
            </div>
        </section>
        <div className='extra'>
         <div className='image-slider' id='second'>
              <img src={Event2011} alt="TESTIMONIALS HERE"/>
         </div>
        </div>
        <section className='ways-help'>
            <div className='left-top'>
                <h2>Need Help? We're Here for You.</h2>
                <p>Facing healthcare challenges without insurance can be overwhelming. At People Who Make A Difference, we understand the struggle and are dedicated to providing support. If you are uninsured and need assistance with healthcare costs, we encourage you to reach out.</p>
                <p style={{fontWeight: 'bold'}}>Take the first step towards accessible healthcare:</p>
		        <ul>
                  <li>Learn more about our eligibility requirements and application process.</li>
                  <li>Explore our available resources and upcoming events.</li>
                  <li>Contact us today to discuss your specific needs.</li>
                </ul>
                <p>Together, we can make a difference in your health and well-being. You are not alone.</p>
		        <div className='end' style={{ marginTop: '5%' }}>
                    <Link to="/projects">Explore Resources
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </Link>
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
                <Link to="/donate"> Donate
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24"><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"/></svg>
                    </div>
                </Link>
                <Link to="/volunteer"> Volunteer
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" height="800px" width="800px" version="1.2" baseProfile="tiny" id="Layer_1" viewBox="0 0 256 256" >
                            <path d="M216.2,92.5c-5.2-5.3-13.8-5.4-19-0.1L157.8,134l-0.3,0.3c-25.5,0.1-46.2,16.8-46.2,37.3h-5.8c0-23.6,23.1-42.8,51.6-43.1  l-0.1-19.4c0,0-0.1-85.4-0.1-85.5c-0.7-5.8-5.6-10.3-11.7-10.3c-6.5,0-11.7,5.3-11.7,11.7c0,0.2,0,72.9,0,72.9l-5.2,0.2l-0.1-81.2  c0-6.5-5.3-11.7-11.8-11.7s-11.7,5.3-11.7,11.8v81h-5.6l0.1-63.6c0-6.5-5.3-11.7-11.8-11.7S75.7,28,75.7,34.4V98h-5.2l0.1-34.2  c0-6.5-5.3-11.7-11.8-11.7s-11.7,5.3-11.7,11.8c0,108.4,0,108.4,0,111c0,13.2,6.8,24.4,16.2,28.1v48.4h0.2v0.4l81.2-0.4v-51.1  c2.5-0.9,5.1-2,7.6-3.3c15.4-7.9,26.1-20.3,29.5-32.5c2.9-4.3,36.8-56.2,36.8-56.2C221.4,103.7,220.6,96.9,216.2,92.5z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
        <footer><Footer/></footer>
    </div>
  );
}

export default Home;
