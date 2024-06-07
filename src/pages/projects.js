import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/help/help-home-mobile.webp';

import crunches from '../images/help/crunches.jpg';
import walker from '../images/help/walker.jpg';
import walker2 from '../images/help/walker2.jpg';
import walker3 from '../images/help/walker3.jpg';


import foodpresident from '../images/help/foodpresident.jpg';
import fooddonation from '../images/help/fooddonation.jpg';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

function GetHelp() {
  return (
    <div className='project'>
        <SideNavbar/>
        <section className='project-home'>
           <img src={PWMD} alt="hey"/>
            <h2> Need Healthcare Assistance? </h2>
            <p><strong>Financial Assistance</strong> is provided by People Who Make a Difference to the uninsured.</p>
            <p>In case people cannot afford health insurance, their jobs do not offer coverage, or they cannot meet the requirements for government-sponsored health care programs, our programs assist them, with income at or below 150% of the poverty level.</p>
            <p>Our Financial Assistance with <strong>Healthcare Costs</strong> includes specialist office visits, prescription assistance, imaging (MRI, X-Ray), laboratory testing; mammograms or breast ultrasounds are covered by our <strong>Pink Prevention</strong> Program and <strong>Education</strong> for preventing diseases such as <strong>Children Dental Care</strong> and <strong>Blue Prevention</strong> Programs (Men's Health).</p>
            <p>Below you will find the Application for Services form.</p>
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
            <p>Join us every Wednesday from 2:30 PM to 3:30 PM for our community grocery distribution. This event is open to all residents in need of food assistance and operates on a first-come, first-served basis. Fresh produce, dairy, and pantry items are available.</p>
            <h4>A Partnership with:</h4>
            <a className='special' href='https://www.instagram.com/uhcnorlando/'>United Heart For The Nations Foundation</a>

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
          <div className='left-top'>
            <div className='walkers'>
              <div class="div1 photo"><img src={crunches} alt="hey"/></div>
              <div class="div2 photo"><img src={walker} alt="hey"/></div>
              <div class="div3 photo"><img src={walker2} alt="hey"/></div>
              <div class="div4 photo"><img src={walker3} alt="hey"/></div>
            </div>
	  </div>
          <div className='right-bottom'>
            <h2>WHEELCHAIRS, CRUTCHES, WALKERS</h2>
            <p>Are you or someone you know in need of mobility aids? You can borrow a wheelchair, walker or crutches from us for up to 8 weeks. We ask for a donation of $15.00 and a deposit of $50.00, the deposit will be refunded if the items are returned in the same good condition as when borrowed.</p>
            <a href='https://form.jotform.com/241494155228155'>Apply Here
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
          </div>      
        </section>
        <footer><Footer/></footer>
    </div>
  );
}

export default GetHelp;
