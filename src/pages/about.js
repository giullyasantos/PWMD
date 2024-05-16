import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';
import { Link, useLocation } from 'react-router-dom';

import marcia from '../images/about/team/marcia.jpg';
import adriana from '../images/about/team/adriana.jpg';
import diogo from '../images/about/team/diogo.jpg';
import gilson from '../images/about/team/gilson.jpg';
import rebecca from '../images/about/team/rebecca.jpg';
import susan from '../images/about/team/susan.jpg';
import edson from '../images/about/team/edson.jpg';

import ceo from '../images/about/marciaceo.jpg';

import food2 from '../images/about/slider/food2.jpg';
import food from '../images/about/slider/food.jpg';
import ame from '../images/about/slider/ame.jpg';
import volunteers from '../images/about/slider/volunteers.jpg';
import fundraiser from '../images/about/slider/fundraiser.jpeg';
import donor from '../images/about/slider/donor.jpg';
import children from '../images/about/slider/children.jpg';
import marciaromero from '../images/about/slider/marcia.jpg';
import clothes from '../images/about/slider/clothes.jpg';

function About() {
  return (
  <div>
    <div className='about'>
        <SideNavbar/>
        <section className='team'>
           <div className='staff'>
             <div className='div1'>
               <img src={edson} alt="hey"/>
	       <span className="hover-text">
	         <h3>Edson Bezerra</h3>
	         <h5>Board Member</h5>
	         <h6>Don Matthews Law</h6>
	       </span>
	     </div>
             <div className='div2'>
               <img src={adriana} alt="hey"/>
	       <span className="hover-text">
	         <h3>Adriana Backhaus</h3>
	         <h5>Board Member</h5>
	         <h6>New Hope Immigration Services</h6>
	       </span>
	     </div>
             <div className='div3'>
               <img src={susan} alt="hey"/>
	       <span className="hover-text">
	         <h3>Suzan Cruzalegui</h3>
	         <h5>Board Member</h5>
	         <h6>Business Owner, Dentist & Life Coach</h6>
	       </span>
	     </div>
             <div className='div4'>
               <img src={marcia} alt="hey"/>
	       <span className="hover-text">
	         <h3>Marcia Romero</h3>
	         <h5>PWMD Founder | CEO</h5>
	         <h6>Chaplain II At Advent Health Orlando</h6>
	       </span>
	     </div>
             <div className='div5'>
               <img src={diogo} alt="hey"/>
	       <span className="hover-text">
	         <h3>Diogo Esteves</h3>
	         <h5>Board Member</h5>
	         <h6>Strategy Group Global</h6>
	       </span>
	     </div>
             <div className='div6'>
               <img src={gilson} alt="hey"/>
	       <span className="hover-text">
	         <h3>Gilson De Oliveira</h3>
	         <h5>Board Member</h5>
	         <h6>Alpha One Services LLC</h6>
	       </span>
	     </div>
             <div className='div7'>
               <img src={rebecca} alt="hey"/>
	       <span className="hover-text">
	         <h3>Rebecca Sayago</h3>
	         <h5>Board Member</h5>
	         <h6>Primary Care Access Network (PCAN)</h6>
	       </span>
	     </div>
           </div>
           <h2>A Committed Team Making a Difference</h2>
           <h4>We are a group of individuals who are passionate about empowering residents to become healthy and productive members of their communities.</h4>
        </section>
        <section className='about-mission'>
            <div className='left-top'>
                <h2>Building a Healthier Community, One Person at a Time</h2>
                 <p>It is common knowledge that caring for our health is essential. Yet, for many, access to quality healthcare feels more like a luxury than a basic necessity. In fact, a staggering <b>43 million people</b> in our country <b>do not have health insurance</b>, which they need to stay well. This not only impacts individual lives but also puts a strain on families and communities.<br/><br/>
That's where People Who Make a Difference comes in. Since 2011, we've been dedicated to bridging this gap by <b>offering a helping hand</b> to those without insurance. We provide <b>financial assistance</b> for essential medical care, from check-ups to urgent treatments. But we're not just about covering costs; we're about empowering individuals through <b>education and support</b>, so they can make informed decisions about their health.<br/><br/>
Together, we can create a future where healthcare is truly accessible for everyone, regardless of their financial situation. Join us in building a healthier, more equitable world – because everyone deserves the chance to thrive.</p>
            </div>
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img src={food2} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={ame} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={volunteers} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={food} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={donor} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={children} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={marciaromero} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={clothes} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={fundraiser} alt="hey"/>
                    </div>
                                        <div className='slide'>
                        <img src={food2} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={ame} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={volunteers} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={food} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={donor} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={children} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={marciaromero} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={clothes} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={fundraiser} alt="hey"/>
                    </div> 
                </div>
            </div>
        </section>
        <section className='donate'>
           <h1>Help Us Make A Difference!</h1>
           <Link to='/donate'> Donate
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24"><path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"/></svg>
                        </div>
                    </Link>

        </section>
        <section className='ceo'>
            <div className='left-top'>
                <img src={ceo} alt="hey"/>
            </div>
            <div className='right-bottom'>
                <h2>Health Available For All</h2>
                <p>We believe healthcare is a right. Our mission is to remove barriers preventing the uninsured from receiving medical care. Through outreach, education, and financial assistance, we make health services accessible to all, regardless of their circumstances.</p>        
            </div>
        </section>
      </div>
      <footer><Footer/></footer>
    </div>
  );
}

export default About;
