import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import crunches from '../images/crunches.jpg';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

import alessandra from '../images/home/testimonials/alessandra.webp';
import claudia from '../images/home/testimonials/claudia.webp';
import helaine from '../images/home/testimonials/helaine.webp';
import nilton from '../images/home/testimonials/nilton.webp';
import nubia from '../images/home/testimonials/nubia.webp';
import paula from '../images/home/testimonials/paula.webp';
import soledad from '../images/home/testimonials/soledad.webp';
import financial from '../images/home/financial.webp';
import fundraiser from '../images/home/fundraiser.webp';

function GetHelp() {
  return (
    <div className='project'>
        <SideNavbar/>
        <section className='project-home'>
            <dotlottie-player 
              src="https://lottie.host/016c081b-20b5-455b-93d1-f16e1adb76bf/gHEQCdMpu3.json"
              background="transparent"
              speed={0.75}
              style={{ width: '10em', height: '10em' }}
              loop
              autoplay
            />
            <h2> Need help? </h2>
            <p>​We're here to support you! If you are here for a mammogram or breast ultrasound, simply click on the <strong>Pink Prevention Form</strong> below. For any other health-related matters, like scheduling appointments or managing medications, please choose the <strong>Application for Services</strong> form below.
            </p>
            <div className='next-to-each-other'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSf-yz7E3rh0U-9YMRPnNe2BVYGsniFucwvj-bJhQrJ5eWqAMQ/viewform'> Pink Prevention Form
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
              <a href='https://form.jotform.com/220835736434155'> Application for Services
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
        </section>
        <section className='testimonials'>
            <h2>Some of the People We Helped:</h2>
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img id='alessandra' src={alessandra} alt="Alessandra's Review People Who Make A Difference"/>
                        <h4>Alessandra</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={claudia} alt="Claudia's Review People Who Make A Difference"/>
                        <h4>Claudia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='helaine'src={helaine} alt="Helaine's Review People Who Make A Difference"/>
                        <h4>Helaine</h4>
                        <p> After becoming handicapped from a motorcycle accident in my early twenties, I needed a new wheelchair in 2019. My cousin in Orlando, FL, told the PWMD Foundation.</p>
                    </div>
                    <div className='slide'>
                        <img src={nilton} alt="Nilton's Review People Who Make A Difference"/>
                        <h4>Nilton</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nubia} alt="Nubia's Review People Who Make A Difference"/>
                        <h4>Nubia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={paula} alt="Paula's Review People Who Make A Difference"/>
                        <h4>Paula</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={soledad} alt="Soledad's Review People Who Make A Difference"/>
                        <h4>Soledad</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='alessandra' src={alessandra} alt="Alessandra's Review People Who Make A Difference"/>
                        <h4>Alessandra</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={claudia} alt="Claudia's Review People Who Make A Difference"/>
                        <h4>Claudia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='helaine'src={helaine} alt="Helaine's Review People Who Make A Difference"/>
                        <h4>Helaine</h4>
                        <p> After becoming handicapped from a motorcycle accident in my early twenties, I needed a new wheelchair in 2019. My cousin in Orlando, FL, told the PWMD Foundation.</p>
                    </div>
                    <div className='slide'>
                        <img src={nilton} alt="Nilton's Review People Who Make A Difference"/>
                        <h4>Nilton</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nubia} alt="Nubia's Review People Who Make A Difference"/>
                        <h4>Nubia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={paula} alt="Paula's Review People Who Make A Difference"/>
                        <h4>Paula</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={soledad} alt="Soledad's Review People Who Make A Difference"/>
                        <h4>Soledad</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='alessandra' src={alessandra} alt="Alessandra's Review People Who Make A Difference"/>
                        <h4>Alessandra</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={claudia} alt="Claudia's Review People Who Make A Difference"/>
                        <h4>Claudia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className='wheelchair'>
          <div className='photo'>
            <img src={crunches} alt="hey"/>
          </div>
          <div className='right-bottom'>
            <h2>WHEELCHAIRS, CRUTCHES, WALKERS</h2>
            <p>Are you or someone you know in need of mobility aids or essential supplies like diapers? We're here to help you regain your independence and comfort. This offer is available for a limited time, so please contact us today to ensure you get the support you need.</p>
            <a className='underline-animation'>
                <svg xmlns="http://www.w3.org/2000/svg" style={{height: '2em', width: '2.5em'}}>
                  <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" fill='#027593'/>
                </svg>
              (321) 527-4593
            </a>
          </div>      
        </section>
        <footer><Footer/></footer>
    </div>
  );
}

export default GetHelp;
