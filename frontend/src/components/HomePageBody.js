import React from 'react';
import "../styles/HomePageBody.css";

const HomePageBody = () => {
    return (
        <div className='home-page-body'>
            <div className='banner-text'>
                EASIEST WAY TO FIND YOUR NEXT CAR
            </div>
            <div className='search-bar'>
                <input type="text" placeholder="Search..."></input>
            </div>
        </div>
    );
};

export default HomePageBody;