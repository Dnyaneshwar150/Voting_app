import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import card1 from '../../assets/register.jpg'
import card2 from '../../assets/candidate.jpg'
import card3 from '../../assets/secure.jpg'
import card4 from '../../assets/Fl8tV6wDcJHRyPz1709025126.jpg'


const Home = () => {
  return (
    <div className='home'>
       <div className="home-background">
            <div className='background-text'>
               <h1>Welcome to the Voting App</h1>
               <p>Make your voice heard!</p>
            </div>
       </div>
       <div className="home-cards">
            <h1>ECI OFFICIALS</h1>
            <div className="card">
                  <img src={card1} alt="" />
                  <div className="card-text">
                    <h1>Easy Registration</h1>
                    <p>Register with a just few simple steps ans start voting.</p>
                  </div>
            </div>
            <div className="card">
                  <img src={card2} alt="" />
                  <div className="card-text">
                     <h1>Explore Candidates</h1>
                     <p>Learn about the candidates and their proposals.</p>
                  </div>
            </div>
            <div className="card">
                  <img src={card3} alt="" />  
                  <div className="card-text">
                     <h1>Secure Voting</h1>
                     <p>Your vote is important,it's secure and confidential.</p>
                  </div>
            </div>
       </div>
    </div>
  )
}

export default Home

// {/* <header>
// <h1>Welcome to the Voting App</h1>
// <p>Make your voice heard!</p>
// </header>
// <section className='features'>
// <div className="feature">
//       <h2>Easy Registration</h2>
//       <p>Register with a just few simple steps ans start voting.</p>
// </div>
// <div className="feature">
//       <h2>Explore Candidates</h2>
//       <p>Learn about the candidates and their proposals.</p>
// </div>
// <div className="feature">
//       <h2>Secure Voting</h2>
//       <p>Your vote is important, ans we ensure it's secure and confidential.</p>
// </div>
// </section>
// <Link to="/register" className='btn'>Get Started</Link> */}