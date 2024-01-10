import React from 'react';
import Navbar from '../../Layout/Navbar';
import LandingPage from '../../Components/Home/LandingPage';
import HomeCategory from '../../Components/Home/HomeCategory';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <LandingPage/>
            <HomeCategory/>
        </div>
    );
}

export default HomePage;
