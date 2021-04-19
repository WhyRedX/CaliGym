import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
import Headliner from './components/Headliner';

function App() {
    return ( 
    <div className = "App">
        <Navbar/>
        <Header/>
        <Headliner headline1="TAKE ACTION - " headline2="GET RESULTS!"/>
        <Feature/>
        <Headliner headline1="EXCLUSIVE " headline2="OFFERS"/>
        <Offer/>
        <Headliner headline1="KNOW MORE " headline2="ABOUT US"/>
        <About/>
        <Headliner headline1="JOIN THE " headline2="COMMUNITY"/>
        <Contact/>
    </div>
    );
}

export default App;