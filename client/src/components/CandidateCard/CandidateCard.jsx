import React, { useState } from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidate, onVote, voted }) => {
  const [hover, setHover] = useState(false);

  const handleHover = (isHovering) => {
    setHover(isHovering);
  };

  return (
    <div className='candidate-card'>
      <div className="candidate-details">
        <h3>{candidate.name}</h3>
        <p>{candidate.age}</p>
        <p>{candidate.party}</p>
        <button 
          className="vote-button" 
          onClick={() => onVote(candidate._id)} 
          disabled={voted}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
        >
          Vote
        </button>
        <div className={`bulb ${hover ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

export default CandidateCard;
