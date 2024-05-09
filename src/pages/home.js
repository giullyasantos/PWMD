import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import HomePhoto from '../images/home/homepage.webp';
import Event2011 from '../images/home/2011 event.webp';
import alessandra from '../images/home/testimonials/alessandra.webp';
import claudia from '../images/home/testimonials/claudia.webp';
import helaine from '../images/home/testimonials/helaine.webp';
import nilton from '../images/home/testimonials/nilton.webp';
import nubia from '../images/home/testimonials/nubia.webp';
import paula from '../images/home/testimonials/paula.webp';
import soledad from '../images/home/testimonials/soledad.webp';



import Test from '../images/test.webp';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

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
                <p>At People Who Make A Difference, we envision a world where no individual is deprived of healthcare due to lack of insurance. Our mission is clear: to remove financial barriers to healthcare for the uninsured by providing essential support and resources. </p> 
                <div className='end'>
                    <button> Learn More
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>
                 </div>    
            </div>
            <div className='right-bottom'>
                <div className='description'>
                    <h2>+25,000 campaigns</h2>
                    <h3>Healthcare Access: A Privilege Not Everyone Can Afford</h3>
                    <div className='accomplishments'>
                    <ul>
                        <li>Financial Assistance</li>
                        <li>Preventive Healthcare</li>
                        <li>Health Education</li>
                    </ul>

                    </div>
                </div>
                <div className='image-slider'>
                    <div className='photo'>
                        <img src={Event2011} alt="TESTIMONIALS HERE"/>
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
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img id='alessandra' src={alessandra} alt="Alessandra's Review People Who Make A Difference"/>
                        <h4>Alessandra</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={claudia} alt="Claudia's Review People Who Make A Difference"/>
                        <h4>Claudia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='helaine'src={helaine} alt="Helaine's Review People Who Make A Difference"/>
                        <h4>Helaine</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nilton} alt="Nilton's Review People Who Make A Difference"/>
                        <h4>Nilton</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nubia} alt="Nubia's Review People Who Make A Difference"/>
                        <h4>Nubia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={paula} alt="Paula's Review People Who Make A Difference"/>
                        <h4>Paula</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={soledad} alt="Soledad's Review People Who Make A Difference"/>
                        <h4>Soledad</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>

                    <div className='slide'>
                        <img id='alessandra' src={alessandra} alt="Alessandra's Review People Who Make A Difference"/>
                        <h4>Alessandra</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={claudia} alt="Claudia's Review People Who Make A Difference"/>
                        <h4>Claudia</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img id='helaine'src={helaine} alt="Helaine's Review People Who Make A Difference"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nilton} alt="Nilton's Review People Who Make A Difference"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={nubia} alt="Nubia's Review People Who Make A Difference"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={paula} alt="Paula's Review People Who Make A Difference"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                    <div className='slide'>
                        <img src={soledad} alt="Soledad's Review People Who Make A Difference"/>
                        <h4>Giullya Santos</h4>
                        <p>I was very blessed by the foundation, when I most needed a financial help for an urgent surgery.</p>
                    </div>
                </div>
            </div>
            <button> Get Help
                    <div class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                         </svg>
                     </div>
                </button>
        </section>
        <div className='get-involved'>
           <h2>Get Involved</h2>
           <p>Empower the Comunity</p>
           <div className='right-bottom'>
                <button>Donate</button>
                <button>Volunteer</button>
           </div>
        </div>
        <footer><Footer/></footer>
    </div>
  );
}

export default Home;
