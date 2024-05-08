import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';


function Volunteer() {
  return (
    <div className='volunteer'>
        <SideNavbar/>
        <section className='volunteer-home'>
            <div className='photo-slider'>
                <div className='slide-track first'>
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
            <h2> Volunteer </h2>
            <p>To participate in this effort, the ACT Responsible association identifies, brings together and disseminates the best major cause communication campaigns created each year around the world. Advertising simply expresses complex issues . Associations need this strength to make themselves known, raise awareness, generate donations, demonstrate their actions…
            </p>
            <button>Apply</button>
            <div className='photo-slider second'>
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
        <section className='impact-volunteer'>
            <div className='left-top'>
                <h2>Making a Difference</h2>
                <p>The fight against poverty, exclusion, global warming, the protection of biodiversity, the prevention of diseases, the defense of men's and women's rights, etc. are issues that concern us all. And yet, it is difficult to get citizens to adhere to these themes. However, it is by popularizing these issues and making them accessible to as many people as possible that mentalities will evolve, allowing the construction of a fairer, more united, more equitable and more sustainable world .</p>
                <p>To participate in this effort, the ACT Responsible association identifies, brings together and disseminates the best major cause communication campaigns created each year around the world. Advertising simply expresses complex issues . Associations need this strength to make themselves known, raise awareness, generate donations, demonstrate their actions…</p>
            </div>
            <div className='right-bottom'>
               

            </div>
        </section>

    </div>
  );
}

export default Volunteer;
