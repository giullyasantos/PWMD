import React, { useState } from 'react';
import '../css/footer.css'; 
import PWMDnoback from '../images/pwmdlogo.PNG';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer'>
            <div className='side1'>
                <img className='logo' src={PWMDnoback} alt="hey"/>
                <div className='social-media'>
                    <div>
                        <a href="https://facebook.com/peoplewhomakeadifference/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="rgba(2,117,147)" d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 			                 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/peoplewhomakeadifference/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                                <path fill="rgba(2,117,147)" d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/people-who-make-a-difference/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                            <   path fill="rgba(2,117,147)" d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="rgba(2,117,147)" d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
                        </svg>
                    </div>
                </div>
		<a href='https://www.google.com/maps/dir//people+who+make+a+difference/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e77e78e4fa3c8d:0x5e24cac5ad0dbe0e?sa=X&ved=1t:3061&ictx=111' id='address'>7061 Grand National Dr. Suite: 105 B - Orlando, FL 32819</a>
                <p>The Lord is my Shepherd, I shall not want! - Psalms 23:1</p>
                <p style={{ fontSize: '0.65em' }} id='credit'>&copy; 2024 People Who Make A Difference<br/>Developed and Designed by <a href="google.com" id='giullya'>Giullya Santos</a></p>

            </div> 
            <div className="selections">
                <div className="first">
                    <div id='get-involved'>
                        <h4>Get involved</h4>
                        <a className='underline-animation' href='/donate'>Donate</a>
                        <a className='underline-animation' href='/volunteer'>Volunteer</a>
                    </div>
                    <div id='abt-us'>
                        <h4>About Us</h4>
                        <a className='underline-animation' href='/about'>Our Mission</a>
                    </div>
                    <div id='get-help'>
                        <h4>Get Help</h4>
                        <a className='underline-animation' href='https://docs.google.com/forms/d/e/1FAIpQLSf-yz7E3rh0U-9YMRPnNe2BVYGsniFucwvj-bJhQrJ5eWqAMQ/viewform'>Pink Prevention Program</a>
                        <a className='underline-animation' href='https://form.jotform.com/220835736434155'>Application for Assistance</a>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Footer;
