import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import HomePhoto from '../images/homepage.webp';
import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <SideNavbar/>
        <section className='home-page'>
            <div className='left-top'>
                <div className='image-slider'>
                    <div className='photo'>
                        <img src={HomePhoto} alt="hey"/>
                     </div>
                </div>
            </div>
            <div className='right-bottom'>
                <img className='logo' src={PWMD} alt="hey"/>
                <h1>RAISE AWARENESS, EDUCATE AND ASSIST THE UNINSURED POPULATION.</h1>
                <p>A 501(c)(3) public charity nonprofit organization dedicated to providing financial assistance for affordable healthcare to the uninsured population.</p>
            </div>
        </section>
        <section className='our-mission'>
            <div className='left-top'>
                <h2>Our Mission</h2>
                <p>The fight against poverty, exclusion, global warming, the protection of biodiversity, the prevention of diseases, the defense of men's and women's rights, etc. are issues that concern us all. And yet, it is difficult to get citizens to adhere to these themes. However, it is by popularizing these issues and making them accessible to as many people as possible that mentalities will evolve, allowing the construction of a fairer, more united, more equitable and more sustainable world .</p> 
                <button className='btn'>Learn More</button>           
            </div>
            <div className='right-bottom'>
                <div className='description'>
                    <h2>+25,000 campaigns</h2>
                    <h3>Discover the best engaged advertisements searchable by theme in our database.</h3>
                    <div className='accomplishments'>
                      <p>Global Warming</p>
                      <p>Global Warming</p>
                      <p>Global Warming</p>
                    </div>
                </div>
                <div className='image-slider'>
                    <div className='photo'>
                        <img src={Test} alt="TESTIMONIALS HERE"/>
                     </div>
                </div>
            </div>
        </section>
        <section className='ways-help'>
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
        <section className='testimonials'>
            <h2>What people are saying:</h2>
            Honored to Make a Difference in So Many Lives!
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={Test} alt="hey"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>           
                </div>
            </div>
            <button>Get Help</button>
        </section>
        <div className='get-involved'>
           <h2>Get Involved</h2>
           <p>Empower the Comunity</p>
           <div className='right-bottom'>
                <button>Donate</button>
                <button>Volunteer</button>
           </div>
        </div>
        
    </div>
  );
}

export default Home;