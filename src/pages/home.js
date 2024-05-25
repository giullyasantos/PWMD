import '../App.css';
import React, { useState, useEffect, useRef} from 'react';
import PWMD from '../images/pwmd.webp';

function Home() {
  return (
    <div className='home'>
        <section className='home-page'>
            <div className='right-bottom'>
                <img className='logo' src={PWMD} alt="hey"/>
                <h1>THIS WEBSITE IS UNDER CONSTRUCTION</h1>
            </div>
        </section>
    </div>
  );
}

export default Home;
