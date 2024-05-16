import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/donate/amazon.jpg';
import donor from '../images/donate/steven whiteacre.jpg';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';
import { Link, useLocation } from 'react-router-dom';
import twoeasy from'../images/donate/sponsors/2easy.jpeg';
import akumin from'../images/donate/sponsors/akumin.PNG';
import alpha from'../images/donate/sponsors/alpha.jpeg';
import brink from'../images/donate/sponsors/brink.jpeg';
import cg from'../images/donate/sponsors/cg.jpeg';
import citystone from'../images/donate/sponsors/citystone.jpeg';
import classcompany from'../images/donate/sponsors/celebration.jpeg';
import contjewel from'../images/donate/sponsors/oz.jpeg';
import dominium from'../images/donate/sponsors/dominium.jpeg';
import donmatt from'../images/donate/sponsors/donmatt.jpeg';
import fcu from'../images/donate/sponsors/fcu.jpeg';
import godshouse from'../images/donate/sponsors/godshouse.jpeg';
import hispanicfed from'../images/donate/sponsors/hispanicfed.jpeg';
import kendrascott from'../images/donate/sponsors/kendra.jpeg';
import nlinsurance from'../images/donate/sponsors/nlinsurance.PNG';
import perfumeland from'../images/donate/sponsors/perfumeland.jpeg';
import rainbow from'../images/donate/sponsors/rainbow.jpeg';
import redeemer from'../images/donate/sponsors/redeemer.jpeg';
import resurrect from'../images/donate/sponsors/resurrect.jpeg';
import susancruzalegui from'../images/donate/sponsors/susancruzalegui.jpeg';
import uhcn from'../images/donate/sponsors/uhcn.jpeg';
import ups from'../images/donate/sponsors/ups.jpeg';
import ultrasound from'../images/donate/sponsors/ultrasound.jpeg';
import usfoot from'../images/donate/sponsors/usfootcare.jpeg';
import vitrine from'../images/donate/sponsors/vitrinecharmosa.jpeg';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


function Donate() {

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
  return (
    <div className='donate'>
        <SideNavbar/>
        <section className='donate-home'>
            <div className='left-top'>
                <img src={donor} alt="Steven Whiteacre Donor To People Who Make A Difference"/>
            </div>
            <div className='right-bottom'>
                <h2>Your Generosity Makes A Difference!</h2>
                <p>Your support is vital. There are various ways to contribute, each making a meaningful impact on the lives of those in need. Please choose the method that best suits you and join our mission today.</p>
		<div className='next-to-each-other'>
                  <a href=''> Zelle
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </a>
                    <a href='https://www.paypal.com/paypalme/pwmdfoundation'> PayPal
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </a>
                    <a href='https://cash.app/$PWMDFoundation'> CashApp
                        <div class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </a>

		</div>
            </div>
        </section>
        <section className='sponsors'>
            <h2>Our Sponsors Make A Difference</h2>
            <div className='photo-slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <a href='https://2easyinsurance.com/'><img src={twoeasy} alt="2easy Insurance"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://akumin.com/'><img src={akumin} alt="Akumin"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://achristianc.com/'><img src={alpha} alt="Alpha"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://brinkimmigration.com/'><img src={brink} alt="Brink"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.city-stone.com/'><img src={citystone} alt="CityStone"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.cgdentistorlando.com/'><img src={cg} alt="Cg Dentist"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://celebrationlanguage.com/'><img src={classcompany} alt="Celebration Education Institute"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://dominiumcs.com/'><img src={dominium} alt="Dominium Accounting"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.dmathewslaw.com/'><img src={donmatt} alt="Don Matthews Law"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.floridachristianuniversity.edu/'><img src={fcu} alt="Florida Christian University"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://godshouseorlando.com/'><img src={godshouse} alt="God's House"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.hispanicfederation.org/'><img src={hispanicfed} alt="Hispanic Federation"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.kendrascott.com/'><img src={kendrascott} alt="Kendra Scott"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://instagram.com/nl_insurance/'><img src={nlinsurance} alt="NL Insurance"/></a>
                    </div>
                    <div className='slide'>
                        <a><img src={contjewel} alt="OZ Jewelry"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://megastore.perfumeland.com/'><img src={perfumeland} alt="Perfumeland"/></a>
                    </div>
                    <div className='slide'>
                        <a href='http://www.rainbowrealpainting.com/'><img src={rainbow} alt="Rainbow Real Painting"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://redeemerprinting.com/'><img src={redeemer} alt="Redeemer Printing"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://resurrectwoodrefinishing.com/'><img src={resurrect} alt="Ressurect Wood"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://cruzaleguicoaching.com/'><img src={susancruzalegui} alt="Susan Cruzalegui Life Coach"/></a>
                    </div>   
                    <div className='slide'>
                        <a><img src={uhcn} alt="UHCN"/></a>
                    </div> 
                    <div className='slide'>
                        <a href='https://ultrasoundcarespecialist.com/'><img src={ultrasound} alt="Ultrasound"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://www.ups.com/us/en/Home.page'><img src={ups} alt="UPS"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://www.instagram.com/us.feetmaster/'><img src={usfoot} alt="US Footcare"/></a>
                    </div>  
                    <div className='slide'>
                        <a href='https://en.vitrinecharmosa.com/'><img src={vitrine} alt="Vitrine Charmosa"/></a>
                    </div>
<div className='slide'>
                        <a href='https://2easyinsurance.com/'><img src={twoeasy} alt="2easy Insurance"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://akumin.com/'><img src={akumin} alt="Akumin"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://achristianc.com/'><img src={alpha} alt="Alpha"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://brinkimmigration.com/'><img src={brink} alt="Brink"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.city-stone.com/'><img src={citystone} alt="CityStone"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.cgdentistorlando.com/'><img src={cg} alt="Cg Dentist"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://celebrationlanguage.com/'><img src={classcompany} alt="Celebration Education Institute"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://dominiumcs.com/'><img src={dominium} alt="Dominium Accounting"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.dmathewslaw.com/'><img src={donmatt} alt="Don Matthews Law"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.floridachristianuniversity.edu/'><img src={fcu} alt="Florida Christian University"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://godshouseorlando.com/'><img src={godshouse} alt="God's House"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.hispanicfederation.org/'><img src={hispanicfed} alt="Hispanic Federation"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://www.kendrascott.com/'><img src={kendrascott} alt="Kendra Scott"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://instagram.com/nl_insurance/'><img src={nlinsurance} alt="NL Insurance"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://ozorlando.com/'><img src={contjewel} alt="OZ Jewelry"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://megastore.perfumeland.com/'><img src={perfumeland} alt="Perfumeland"/></a>
                    </div>
                    <div className='slide'>
                        <a href='http://www.rainbowrealpainting.com/'><img src={rainbow} alt="Rainbow Real Painting"/></a>
                    </div>
                    <div className='slide'>
                        <a href='https://redeemerprinting.com/'><img src={redeemer} alt="Redeemer Printing"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://resurrectwoodrefinishing.com/'><img src={resurrect} alt="Ressurect Wood"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://cruzaleguicoaching.com/'><img src={susancruzalegui} alt="Susan Cruzalegui Life Coach"/></a>
                    </div>   
                    <div className='slide'>
                        <a><img src={uhcn} alt="UHCN"/></a>
                    </div> 
                    <div className='slide'>
                        <a href='https://ultrasoundcarespecialist.com/'><img src={ultrasound} alt="Ultrasound"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://www.ups.com/us/en/Home.page'><img src={ups} alt="UPS"/></a>
                    </div>   
                    <div className='slide'>
                        <a href='https://www.instagram.com/us.feetmaster/'><img src={usfoot} alt="US Footcare"/></a>
                    </div>  
                    <div className='slide'>
                        <a href='https://en.vitrinecharmosa.com/'><img src={vitrine} alt="Vitrine Charmosa"/></a>
                    </div>

    
                </div>
            </div>
            <a className='underline-animation' href= 'https://bdad99f6-ecd7-46cf-bf52-d53f84a6e18f.filesusr.com/ugd/5ba94e_0edfd157ef4d402a8a414685d799a826.pdf'><h4>Become A Member</h4></a>
        </section>
        <section className='donate-info'>
            <div className='left-top'>
                <h2>Making a Difference</h2>
                <p>The fight against poverty, exclusion, global warming, the protection of biodiversity, the prevention of diseases, the defense of men's and women's rights, etc. are issues that concern us all. And yet, it is difficult to get citizens to adhere to these themes. However, it is by popularizing these issues and making them accessible to as many people as possible that mentalities will evolve, allowing the construction of a fairer, more united, more equitable and more sustainable world .</p>
                <p>To participate in this effort, the ACT Responsible association identifies, brings together and disseminates the best major cause communication campaigns created each year around the world. Advertising simply expresses complex issues . Associations need this strength to make themselves known, raise awareness, generate donations, demonstrate their actions…</p>
            </div>
        </section>
        <section className='items-donation'>
            <div className='right-bottom'>
                <h2>Donation Opportunities</h2>
    		<ul>
        	  <li style={{color: '#027593'}}>
            	    <strong style={{color: '#027593'}}>Medical Equipment:</strong>
                    <p>Items such as wheelchairs, walkers, and knee scooters are crucial for mobility and independence.</p>
        	  </li>
        	  <li style={{color: '#027593'}}>
            	    <strong style={{color: '#027593'}}>Care Equipment:</strong>
            	    <p>Essential supplies like adult and children's diapers.</p>
        	  </li>
        	  <li style={{color: '#027593'}}>
            	    <strong style={{color: '#027593'}}>Office Supplies:</strong>
            	    <p>Help us stay organized and effective with donations of copy paper, stamps, envelopes, and printer supplies.</p>
        	  </li>
        	  <li style={{color: '#027593'}}>
            	    <strong style={{color: '#027593'}}>Office and Storage Expenses:</strong>
            	    <p>Contribute towards the upkeep of our operational spaces that facilitate our day-to-day work.</p>
        	   </li>
   	 	 </ul>
    		 <p>For donation drop-offs, please send an email. Your donations not only equip us but also ensure we are always ready to serve those in need at a moment’s notice. We value your generosity and engagement deeply.</p>
    		 <a href="mailto:admassist@peoplewhomakeadifference.org"> Email Us
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

export default Donate;
