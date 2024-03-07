import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../service'
import './Result.css'

const Result = () => {
      const [candidates, setCandidates] = useState([])

      const fetchInfo = async () => {
            await fetch(`${BASE_URL}/api/v1/candidate/candidates`)
                  .then((res) => res.json()).then((data) => setCandidates(data))
      }


      useEffect(() => {
            fetchInfo();
      }, [])


      return (
            <div className="result">
                  <div className='list-candidate'>
                        <h1>Result</h1>
                        <div className="listcandidate-format-main">
                              <p>Name</p>
                              <p>Party</p>
                              <p>Votes</p>
                        </div>
                        <div className="listcandidate-candidates">
                              <hr />
                              {candidates.map((candidate, index) => {
                                    return <> <div key={index} className='listcandidate-format-main listcandidate-format'>
                                          <p>{candidate.name}</p>
                                          <p>{candidate.party}</p>
                                          <p>{candidate.voteCount}</p>
                                    </div>
                                          <hr />
                                    </>
                              })}
                        </div>
                  </div>
            </div>
      )
}

export default Result