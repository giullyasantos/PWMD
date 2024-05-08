import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home'; 
import About from './pages/about';
import Donate from './pages/donate';
import FAQ from './pages/faq';
import Volunteer from './pages/volunteer';
import Projects from './pages/projects';

import './App.css'; // Import your CSS file with transition styles

function App() {
    return (
        <Router>
            <div className="app-container"> {/* Wrap your Routes in a container */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/donate" element={<Donate/>} />
                    <Route path="/faq" element={<FAQ/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/volunter" element={<Volunteer/>} />
                    {/* other routes can also be added here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;