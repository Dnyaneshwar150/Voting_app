import React, { useState, useEffect } from 'react';
import './HorizontalSpace.css';
import logo from '../../assets/Eci_logo.png'; // Import the logo image

const HorizontalSpace = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=in&apiKey=48b91e0410e54a35b414e90bf4cfd356')
            .then(response => response.json())
            .then(data => {
                // Set the description to the first article's description
                setDescription(data.articles[0].description);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="horizontal-space">
            <img src={logo} alt="Logo" />
            <div className="scrolling-text">
                <div className="description"> ======Demo user Adhaar Number :123456987321 password:654321====================== </div>
            </div>
        </div>
    );
};

export default HorizontalSpace;
