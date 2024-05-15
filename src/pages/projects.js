import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import crunches from '../images/crunches.jpg';
import foodpresident from '../images/help/foodpresident.jpg';
import fooddonation from '../images/help/fooddonation.jpg';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

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
        <section className='food'>
          <div className='left-top'>
            <div className='div2'>
              <img src={foodpresident} alt="hey"/>
            </div>
            <div className='div1'>
              <img src={fooddonation} alt="hey"/>
            </div>
          </div>
        </section>
        <section className='food-info'>
            <h2>FREE FOOD WEDNESDAY</h2>
            <p>Join us every Wednesday from 3:00 PM to 4:00 PM for our community grocery distribution. This event is open to all residents in need of food assistance and operates on a first-come, first-served basis. Fresh produce, dairy, and pantry items are available.</p>
            <a href='https://www.google.com/maps/dir//3467%20Parkway%20Center%20Orlando,%20FL%2032808'>Get Directions
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 395.71 395.71">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
</svg>
              </div>
            </a>
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
