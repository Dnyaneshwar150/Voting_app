import React from 'react'
import './CandidateCard.css'

const CandidateCard = ({candidate,onVote,voted}) => {
  return (
    <div className='candidate-card'>
       <div className="candidate-details">
           <h3>{candidate.name}</h3>
            <p>{candidate.age}</p>
            <p>{candidate.party}</p>
            <button onClick={() => onVote(candidate._id)} disabled={voted}>Vote</button>
       </div>
    </div>
  )
}

export default CandidateCard