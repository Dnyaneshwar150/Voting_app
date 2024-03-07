import React, { useEffect, useState } from 'react'
import './CandidateList.css'
import CandidateCard from '../CandidateCard/CandidateCard'
import { BASE_URL } from '../../service'

const CandidateList = ({onVote,voted}) => {
      const [candidates,setCandidates] = useState([])

      useEffect(() => {
            fetch(`${BASE_URL}/api/v1/candidate/candidates`)
            .then((res)=>res.json()).then((data) => setCandidates(data))
      },[])

  return (
    <div className='candidates-container'>
            {candidates.map(candidate => (
                  <CandidateCard key={candidate._id} candidate={candidate} onVote={onVote} voted={voted}/>
            ))}
    </div>
  )
}

export default CandidateList