// Home.js
import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/Home_image_1.jpg';
import Image2 from '../../assets/Home_image_2.jpg';
import Image3 from '../../assets/Home_image_3.jpg';
import Card from '../Cards/Card';
import { NavLink } from 'react-router-dom';

import HorizontalSpace from '../HorizontalSpace/HorizontalSpace';

function Home() {
   const [currentSlide, setCurrentSlide] = useState(0);

   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
   };

   const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
   };

   return (
      <div className='home'>
         {/* <HorizontalSpace /> Include HorizontalSpace component */}
         <div className='home-carousel'>
            <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''}`}>
               <img src={Image1} alt='Slide 1' />
            </div>
            <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''}`}>
               <img src={Image2} alt='Slide 2' />
            </div>
            <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''}`}>
               <img src={Image3} alt='Slide 3' />
            </div>
         </div>
         <div className='carousel-buttons'>
            <button className='nav-button' onClick={prevSlide}>Previous</button>
            <button className='nav-button' onClick={nextSlide}>Next</button>
         </div>

         <div className='cards-container'>
            <Card
               title="Electors"
               features={["Register Now to Vote", "Check Application Status", "Search Name in Voter List"]}
               primary={true}
            />
            <Card
               title="POLITICAL PARTY"
               features={["New Party Registration", "Election Symbol Allotment", "Permission"]}   
               
               primary={true}
            />
         </div>

         <NavLink to="/voter" className="vote-button">
  <button className="vote-btn">Click here to vote</button>
</NavLink>


      </div>
   );
}

export default Home;
