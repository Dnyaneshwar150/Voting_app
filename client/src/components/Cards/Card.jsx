import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Importing forward icon from react-icons/fi
import './Card.css'; // Make sure to import your CSS file

const Card = ({ title, features, primary }) => {
  return (
    <article className={`card ${primary ? 'primary' : ''}`}>
      <var>
        <abbr>{title}</abbr>
      </var>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <p>{feature}</p>
            <FiArrowRight /> {/* Adding forward icon */}
          </li>
        ))}
      </ul>
      <a href={"https://www.youtube.com/eci"}><button>Know More</button></a>  
    </article>
  );
}

export default Card;
