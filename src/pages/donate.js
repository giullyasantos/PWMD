import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';
import Test from '../images/donate/amazon.jpg';
import donor from '../images/donate/steven whiteacre.jpg';
import SideNavbar from '../components/navbar';
import Footer from '../components/footer';

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






function Donate() {
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
            <div className='right-bottom'>
              <div id='zelle'>
                <a href="https://www.paypal.com/paypalme/pwmdfoundation" className='full-height'>
		  <p>Donate With:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="353 215.5 763 310.5" width="100"><g fill="white"><path d="m423 258.5-65.726-.605v43.605h108.926l-113.2 145.1v36.9h70v42.5h42v-42.5h71.4c.6-1.7.811-6.284-2.989-10.484-6.3-7-11.31-14.316-15.91-23.516-2.1-4.1-3.695-9.011-4.295-9.411-14.06-.644-94.949-.478-94.905-.989l113.3-145.989v-34.611h-66.6v-43h-42v43zm303.3-20.3c-1 .4-1.3 22.5-1.3 106.2 0 113.1-.1 111.2 4.9 120.9 4.5 8.7 15.5 16.5 27.8 19.7 6.8 1.8 26.8 2 34.5.4 9.9-2.1 11.8-5.1 7.9-12.8-2.5-4.8-5.8-15.3-6.6-21.1-1.1-6.9-2.5-8-10.9-7.8-4 .1-7.8-.2-8.5-.6-4.1-2.6-4.1-3.3-4.1-104.6 0-65.1-.3-97.8-1-99.1-1-1.8-2.3-1.9-21.3-1.8-11.1 0-20.8.3-21.4.6zm91.7.3c-1.3.8-1.5 13.6-1.5 105.2 0 98.7.1 104.7 1.9 111.6 3.4 13.6 11.1 21.9 25.7 28 5.6 2.3 8.1 2.7 19.4 3 15.1.4 22.8-.7 30.5-4.6 7.6-3.7 7.8-6.3 1.3-15.8-2.6-3.8-6.6-10.3-8.8-14.4l-4-7.5-7.3-.1c-9.1-.2-10-.6-11.7-4.9-1.3-2.9-1.5-17.8-1.5-100.5 0-65.1-.3-97.8-1-99.1-1-1.8-2.3-1.9-21.3-1.9-11.1 0-20.9.5-21.7 1zm266 21.5c-8.1 3.7-12.3 10.1-12.4 19-.1 7.6 3 13.4 9.3 17.5 7.8 5.3 20.3 3.8 26.8-3.2 8.3-8.9 6.6-24.3-3.6-31.2-5.3-3.6-14.6-4.5-20.1-2.1zm16 3.7c11.3 5.7 13 20.3 3.4 28.8-4.1 3.6-7 4.4-13.3 3.8-17.4-1.7-20.8-26.1-4.6-33.4 4.4-2 9.5-1.7 14.5.8z"/><path d="m1084.7 268.2c-.7 1.2-.8 19.8-.1 21.7.3.9 1.2 1.6 2 1.6 1 0 1.4-1.4 1.4-5 0-4.5.2-5 2.3-5 1.6 0 3 1.4 5.2 5 1.8 3 3.6 5 4.7 5 2.4 0 2.3-.4-1.4-5.8-2.2-3.2-2.8-4.7-1.9-5 2.6-.9 5.1-4.2 5.1-6.7 0-4.5-3.2-6.5-10.4-6.5-3.6 0-6.7.3-6.9.7zm12.1 3.2c.8.4 1.2 1.9 1 3.2-.3 2.1-.9 2.4-5 2.7l-4.8.3v-3.5c0-3.5.1-3.6 3.8-3.6 2 0 4.3.4 5 .9zm-496.3 29.6c-.5.2-4.4 1.1-8.5 2-25.7 5.9-48.4 25.6-58 50.6-5.3 13.8-7.2 24.5-7.3 40.4-.1 22.3 4.4 38.7 14.7 54.3 11.6 17.5 28.6 29.4 50.6 35.4 7.5 2 10.8 2.3 28 2.3 17 0 20.5-.3 27.6-2.2 17.6-4.9 32.6-13 44.7-24.5 7.7-7.2 7.6-9.2-.2-15.2-3.2-2.5-9-7.9-12.8-12.1-4.8-5.1-7.7-7.5-9.2-7.5-1.4 0-4.6 2-7.7 5-10.7 9.7-24.2 14.3-41.9 14.2-16.2-.1-28-4.3-35.5-12.9-3.8-4.3-8.6-14.1-9.6-19.6l-.6-3.7h62.3c34.3 0 63-.4 63.7-.9 3.3-2.1 4.1-16.6 1.7-32.4-5.7-37.8-28.3-63.2-63.8-71.7-6.3-1.5-11.5-2-22.7-1.9-8 0-14.9.2-15.5.4zm26.7 38.6c7.3 1.5 16.3 6.5 20.5 11.3 3.9 4.4 7.9 12.3 8.9 17.4l.7 3.2h-81.5l.7-3.2c3-13.5 14.6-24.8 29-28.4 6.4-1.6 15-1.7 21.7-.3zm336.8-37.7c-35.5 7.9-59.5 32.9-67 69.8-4.5 21.8-2 47.2 6.5 65.4 11.6 25.2 32.7 41.5 61.5 47.4 9.1 1.9 12.7 2.1 27 1.7 12.1-.4 18.6-1.1 24.2-2.6 17.1-4.5 32.1-12.7 43.6-23.7 8.8-8.5 8.8-8.9-.7-16.8-4.4-3.6-10.3-9.3-13.1-12.6-6.5-7.5-8.2-7.6-15.5-1-10.9 9.9-23.9 14.3-42 14.2-25.4-.1-40.2-11-45-33l-.7-2.595h126.7c4.3-3.1 2.7-35.905-2.5-51.105-1-3-3.7-9-5.9-13.2-11.7-22.4-30.4-36.3-56.4-41.8-8.3-1.8-32.8-1.8-40.7-.1zm31.2 37.7c6.8 1.5 13.8 5 18.8 9.5 4.2 3.9 11 16.2 11 20v2.4h-81.2l.7-2.8c5.2-21.4 27.2-34.1 50.7-29.1z"/></g>
                  </svg>
                </a>
              </div>
              <div>
                <a href='https://cash.app/$PWMDFoundation' className='full-height'>
                  <p>Donate With:</p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="100" width="200" fill="none" viewBox="-20.734545 -7.661725 179.69939 45.97035"><path fill="white" d="M55.4792 11.8667a.5709.5709 0 01-.7552-.1489 4.3819 4.3819 0 00-3.7227-1.8755c-2.8363 0-4.5772 2.2442-4.5772 5.4493s1.7728 5.492 4.6091 5.492a4.3325 4.3325 0 003.7298-1.9607.5637.5637 0 01.7446-.1666l1.3473.78a.5742.5742 0 01.2091.8438 7.0091 7.0091 0 01-6.0272 3.1164c-4.5347 0-7.6086-3.29-7.6086-8.087s3.0739-8.0448 7.5412-8.0448a7.1442 7.1442 0 015.9989 2.9711.5775.5775 0 01-.156.8296z"/><path fill="white" d="M65.3923 21.8755v.6523a.5676.5676 0 00.5921.5673h1.482a.5673.5673 0 00.5673-.5673v-7.41c0-2.6839-1.9074-3.7936-4.6091-3.7936a9.311 9.311 0 00-4.3538 1.092.5708.5708 0 00-.234.7516l.4857 1.014a.5603.5603 0 00.7729.2447 6.964 6.964 0 013.0952-.7836c.9396 0 2.0493.259 2.0493 1.2197 0 1.005-1.214 1.1764-2.7118 1.3878a98.2918 98.2918 0 00-.3621.0516c-1.5458.2163-4.0525.6985-4.0525 3.51 0 2.2585 1.6345 3.5455 3.9887 3.5455 1.5919 0 2.5811-.5673 3.2901-1.482zm-2.3235-3.821c.8953-.1572 1.7073-.2996 2.1711-.6498v1.319c0 1.723-1.2409 2.464-2.5705 2.464-1.0707 0-1.8117-.4787-1.8117-1.5033 0-1.1133.8509-1.3863 1.8756-1.5706.1127-.0203.2247-.04.3355-.0594z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="white" d="M70.4694 20.1595a.5674.5674 0 01.7836-.0744 5.2726 5.2726 0 003.2973 1.0636c1.2231 0 2.1272-.3935 2.1272-1.3508 0-.8722-.8296-1.0459-2.8363-1.3969-2.1273-.3546-4.1624-1.0637-4.1624-3.4887 0-2.528 2.1805-3.595 4.6658-3.595a6.9808 6.9808 0 014.3219 1.418.5671.5671 0 01.078.819l-.7091.8332a.5708.5708 0 01-.78.0887 5.002 5.002 0 00-3.0136-.9644c-1.0459 0-1.9606.305-1.9606 1.131 0 .9183 1.2834 1.092 2.5704 1.3118 2.7477.4787 4.4921 1.2622 4.4921 3.5455 0 2.3967-1.9181 3.8787-4.9636 3.8787a7.1506 7.1506 0 01-4.6091-1.5033.5743.5743 0 01-.0745-.8154zm10.5584 2.3683v-14.43a.5672.5672 0 01.5672-.5673h1.6345c.3133 0 .5673.254.5673.5673v4.9282a4.2546 4.2546 0 013.51-1.7019c2.418 0 3.8361 1.7231 3.8361 4.1837v7.02a.5672.5672 0 01-.5672.5673h-1.6345a.5673.5673 0 01-.5673-.5673V16.146c0-1.2232-.3935-2.3329-1.9606-2.3329-1.4855 0-2.6165 1.046-2.6165 2.7902v5.928a.5673.5673 0 01-.5673.5673H81.595a.5638.5638 0 01-.5672-.5708z"/><path fill="white" d="M107.9523 19.2376l1.177 3.4746a.5672.5672 0 00.528.3971h2.025a.5659.5659 0 00.466-.2413.5662.5662 0 00.069-.521l-5.336-14.43a.5744.5744 0 00-.535-.3723h-2.62a.5664.5664 0 00-.532.3546l-5.3575 14.4335a.5674.5674 0 00.5318.7623h1.9177a.564.564 0 00.536-.3829l1.18-3.4746zm-5.233-2.4215l2.29-6.7576 2.202 6.7576zm13.607-3.7688v-.8935a.5634.5634 0 00-.156-.4195.5666.5666 0 00-.411-.176h-1.635c-.313 0-.567.254-.567.5672v14.1818c0 .3133.254.5673.567.5673h1.635c.313 0 .567-.254.567-.5673v-4.7048a4.1593 4.1593 0 003.546 1.7443c3.137 0 5.165-2.627 5.165-6.0272 0-3.4-2.028-5.9954-5.165-5.9954a4.1669 4.1669 0 00-3.546 1.7231zm5.8 4.2723c0 1.982-.918 3.62-2.836 3.62-1.953 0-2.964-1.6346-2.964-3.62 0-1.9855 1.064-3.5774 2.964-3.5774s2.836 1.5955 2.836 3.5774zm7.389-4.2724v-.8935a.5643.5643 0 00-.154-.4207.5649.5649 0 00-.413-.1749h-1.635a.5672.5672 0 00-.567.5672v14.182c0 .3132.254.5671.567.5671h1.635c.313 0 .567-.2539.567-.5672v-4.7049a4.1675 4.1675 0 003.546 1.7444c3.141 0 5.169-2.6272 5.169-6.0273 0-3.4-2.028-5.9953-5.169-5.9953a4.1736 4.1736 0 00-3.546 1.7231zm5.804 4.2722c0 1.982-.918 3.62-2.836 3.62-1.943 0-2.968-1.6345-2.968-3.62 0-1.9854 1.067-3.5773 2.968-3.5773 1.9 0 2.836 1.5954 2.836 3.5773z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="white" d="M19.9538 0c3.0917 0 4.6127 0 6.2826.5247a6.5026 6.5026 0 013.9 3.9c.5247 1.6558.5247 3.191.5247 6.2684v9.2607c0 3.074 0 4.6091-.5247 6.2684a6.5029 6.5029 0 01-3.9 3.9c-1.6558.5247-3.1909.5247-6.2684.5247h-9.2891c-3.0739 0-4.609 0-6.2684-.5247a6.5026 6.5026 0 01-3.9-3.9C0 24.5664 0 23.0454 0 19.9538V10.679C0 7.605 0 6.07.5247 4.4105a6.5024 6.5024 0 013.9-3.9C6.0663 0 7.605 0 10.679 0z" clip-rule="evenodd" fill-rule="evenodd"/><path fill="#027593" d="M16.0964 10.0444a6.3816 6.3816 0 014.1127 1.5103.6275.6275 0 00.8615-.0177l1.1842-1.1877a.606.606 0 00-.0319-.89 9.3881 9.3881 0 00-3.1661-1.7726l.3546-1.748a.6172.6172 0 00-.6063-.741h-2.2797a.6205.6205 0 00-.6063.4858L15.6 7.247c-3.0349.149-5.6089 1.6522-5.6089 4.7332 0 2.6626 2.1273 3.8078 4.3751 4.6091 2.1272.7906 3.2547 1.085 3.2547 2.1982s-1.1239 1.8152-2.7796 1.8152a6.1192 6.1192 0 01-4.3219-1.691.6169.6169 0 00-.8651 0L8.385 20.1524a.6133.6133 0 000 .8828 8.4061 8.4061 0 003.6695 2.0103L11.7 24.6658a.631.631 0 00.6027.7588h2.2868a.6206.6206 0 00.6099-.4893l.3297-1.5352c3.6376-.2234 5.8606-2.1804 5.8606-5.0452 0-2.6378-2.2159-3.751-4.9069-4.6587-1.5387-.5779-2.8683-.9573-2.8683-2.0989s1.2409-1.5529 2.4819-1.5529z"/>
                  </svg>
                </a>
              </div>
              <div id='paypal'>
                <a href="https://www.paypal.com/paypalme/pwmdfoundation" className='full-height'>
                    <p>Donate With:</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="-.02682843 0 123.63183286 30.17842908" width="100"><path d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z" fill="white"/><path d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z" fill="white"/><path d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 -.096.035z" fill="#027593"/><path d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z" fill="#027593"/><path d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z" fill="#027593"/><path d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z" fill="white"/>
                  </svg>
                </a>
              </div>
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
