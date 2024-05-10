import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';


function About() {
  return (
  <div>
    <div className='about'>
        <SideNavbar/>
        <section className='team'>
            <div className='div1'><img src={Test} alt="hey"/></div>
            <div className='div2'><img src={Test} alt="hey"/></div>
            <div className='div3'><img src={Test} alt="hey"/></div>
            <div className='div4'><img src={Test} alt="hey"/></div>
            <div className='div5'><img src={Test} alt="hey"/></div>
            <div className='div6'><img src={Test} alt="hey"/></div>
            <div className='div7'>
                <h2>WHO ARE WE?</h2>
                <p>We are convinced that advertising communication is a powerful lever for raising.We are convinced that advertising communication is a powerful lever for raising.We are convinced that advertising communication is a powerful lever for raising.</p>
            </div>
            <div className='div8'><img src={Test} alt="hey"/></div>   
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
        </section>
        <div className='donate'>
           <h1>Help Us Make A Difference!</h1>
           <a>DONATE</a>
        </div>
        <section className='ceo'>
            <div className='left-top'>
                <img src={Test} alt="hey"/>
            </div>
            <div className='right-bottom'>
                <h2>Health Available For All</h2>
                <p> With the creation of the French association ACT Responsible, our desire is to share the incredible content of our collections with as many people as possible. We believe that advertising language is a lever that allows for the behavioral changes necessary today.
                </p>        
            </div>
        </section>
      </div>
      <footer><Footer/></footer>
    </div>
  );
}

export default About;
