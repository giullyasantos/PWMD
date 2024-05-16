import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import FAQ from './pages/faq';
import Volunteer from './pages/volunteer';
import Projects from './pages/projects';


import './App.css'; 

function App() {
    return (
        <Router>
            <div className="app-container">
                <AnimatedRoutes />
            </div>
        </Router>
    );
}

function AnimatedRoutes() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={{ enter: 500, exit: 300 }}
                classNames="fade"
            >
                <Routes location={location}>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/donate' element={<Donate/>} />
                    <Route path="/faq" element={<FAQ/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path='/volunteer' element={<Volunteer/>} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

export default App;
