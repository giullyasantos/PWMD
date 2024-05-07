import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';


function About() {
  return (
    <div className='about'>
        <h1>Who Are We?</h1>
        <section className='team'>
            <div className='left-top'>
                <h2>A committed team</h2>
                <p>We are convinced that advertising communication constitutes a powerful lever for raising awareness and changing behavior, two fundamental elements in building a fairer world. Through its information, promotion and education activities, the association wishes to support sustainable development, promote social responsibility and promote the work of associations and foundations.</p>
            </div>
            <div className='right-bottom'>
                <div className='team-grid'>
                    <div className='div1'><img src={Test} alt="hey"/></div>
                    <div className='div2'><img src={Test} alt="hey"/></div>
                    <div className='div3'><img src={Test} alt="hey"/></div>
                    <div className='div4'><img src={Test} alt="hey"/></div>
                    <div className='div5'><img src={Test} alt="hey"/></div>
                    <div className='div6'><img src={Test} alt="hey"/></div>
                    <div className='div7'><img src={Test} alt="hey"/></div>
                </div>
            </div>
        </section>
        <section className='about-mission'>
            <div className='left-top'>
                <h2>Our Mission</h2>
                <p>The fight against poverty, exclusion, global warming, the protection of biodiversity, the prevention of diseases, the defense of men's and women's rights, etc. are issues that concern us all. And yet, it is difficult to get citizens to adhere to these themes. However, it is by popularizing these issues and making them accessible to as many people as possible that mentalities will evolve, allowing the construction of a fairer, more united, more equitable and more sustainable world .</p>
            </div>
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
            <div className='right-bottom'>
                <div>
                    <p>01</p>
                    <h3>Financial Medical Assistance</h3>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                </div>
                <div>
                    <p>01</p>
                    <h3>Financial Medical Assistance</h3>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                    <p>70000 families helped</p>
                </div>
            </div>
            <div className='photo-slider'>
                <div className='slide-next'>
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
                <p> With the creation of the French association ACT Responsible, our desire is to share the incredible content of our collections with as many people as possible. We believe that advertising language is a lever that allows for the behavioral changes necessary today.
                    The work that we have been carrying out for 20 years with the advertising community around the world is an important aspect and developing our actions to raise awareness among the general public of social and environmental challenges through advertising is a real commitment. It is together, agencies, associations, NGOs, businesses, institutions, the general public, etc. that we will build a better world.
                </p>        
            </div>
        </section>
        <div className='donate'>
           <h3>We need your support today</h3>
           <div className='right-bottom'>
                <button>Donate</button>
                <button>Volunteer</button>
           </div>
        </div>
    </div>
  );
}

export default About;
