import react, { useEffect, useState } from 'react'
import './VotingDashboard.css'
import CandidateList from '../CandidateList/CandidateList'
import Vote from '../../assets/voteimg.png'
import { BASE_URL } from '../../service'
import { toast } from 'react-toastify'

const VotingDashboard = () => {
    const [token,setToken] = useState('')
    const [hasVoted,setHasVoted] = useState(false)

    useEffect(() => {
      const storedToken = localStorage.getItem('token')
      if(storedToken){
        setToken(storedToken);
      }
    },[])

  const handleVote = async (candidateId) =>{

    if(hasVoted){
      alert('You have already voted')
      return;
    }

    let responseData;
    await fetch(`${BASE_URL}/api/v1/candidate/vote/${candidateId}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      
    }).then((res)=>res.json()).then((data) =>responseData = data)
    console.log(responseData)
    if(responseData.success){
      toast.success("Vote Successful")
      setHasVoted(true)
    }else{
      toast.error("You have already voted")
      setHasVoted(true)
    }
  } 
  return (
    <div className="voting-dashboard">
      <div className="image-section">
            <img src={Vote} alt="" />
      </div>
      <div className="candidate-section">
            <div className="candidate-title">
                <p>Name</p>
                <p>Age</p>
                <p>Party</p>
            </div>
            <CandidateList onVote={handleVote} voted={hasVoted}/>
      </div>
    </div>
  )
}
export default VotingDashboard