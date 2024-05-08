import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';


function Donate() {
  return (
    <div className='donate'>
        <SideNavbar/>
        <section className='donate-page'>
            <div className='left-top'>
                <h1>Your contribution makes a Difference</h1>
                <button>Donate Now</button>
            </div>
            <div className='right-bottom'>
                
            </div>
        </section>
        <section className='about-mission'>
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                    </div>             
                </div>
            </div>
        </section>
        <section className='ceo'>
            <div className='left-top'>
                <img src={Test} alt="hey"/>
            </div>
            <div className='right-bottom'>
                <h2>Health Available For All</h2>
                <p>With the creation of the French association ACT Responsible, our desire is to share the incredible content of our collections with as many people as possible. We believe that advertising language is a lever that allows for the behavioral changes necessary today.
The work that we have been carrying out for 20 years with the advertising community around the world is an important aspect and developing our actions to raise awareness among the general public of social and environmental challenges through advertising is a real commitment. It is together, agencies, associations, NGOs, businesses, institutions, the general public, etc. that we will build a better world.
</p>

                
            </div>
        </section>
        <section className='donate'>
           <h3>We need your support today</h3>
           <div className='right-bottom'>
                <button>Donate</button>
                <button>Volunteer</button>
           </div>
        </section>
    </div>
  );
}

export default Donate;
