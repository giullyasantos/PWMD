import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';


function Donate() {
  return (
    <div className='donate'>
        <SideNavbar/>
        <section className='donate-home'>
            <div className='left-top'>
                <img src={Test} alt="hey"/>
            </div>
            <div className='right-bottom'>
                <h2>Health Available For All</h2>
                <p>With the creation of the French association ACT Responsible, our desire is to share the incredible content of our collections with as many people as possible. We believe that advertising language is a lever that allows for the behavioral changes necessary today.
</p>
                <button>Donate Now!</button> 
            </div>
        </section>

        <section className='sponsors'>
            <h2>Our sponsors make a Difference</h2>
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
            <button>Become a Member!</button>
        </section>
        <section className='donate-info'>
            <div className='left-top'>
                <h2>Making a Difference</h2>
                <p>The fight against poverty, exclusion, global warming, the protection of biodiversity, the prevention of diseases, the defense of men's and women's rights, etc. are issues that concern us all. And yet, it is difficult to get citizens to adhere to these themes. However, it is by popularizing these issues and making them accessible to as many people as possible that mentalities will evolve, allowing the construction of a fairer, more united, more equitable and more sustainable world .</p>
                <p>To participate in this effort, the ACT Responsible association identifies, brings together and disseminates the best major cause communication campaigns created each year around the world. Advertising simply expresses complex issues . Associations need this strength to make themselves known, raise awareness, generate donations, demonstrate their actions…</p>
            </div>
            <div className='right-bottom'>
                <div>
                    <h3>Financial Assistance</h3>
                    <button>Learn More</button>
                </div>
                <div>
                    <h3>Food</h3>
                    <button>Learn More</button>
                </div>
                <div>
                    <h3>Education</h3>
                    <button>Learn More</button>
                </div>

            </div>
        </section>

    </div>
  );
}

export default Donate;
