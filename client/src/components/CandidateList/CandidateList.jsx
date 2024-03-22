import React, { useEffect, useState } from 'react';
import './CandidateList.css';
import CandidateCard from '../CandidateCard/CandidateCard';
import { BASE_URL } from '../../service';

const CandidateList = ({ onVote, voted }) => {
  const [candidates, setCandidates] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchCandidates(); // Fetch candidates initially
  }, []);

  useEffect(() => {
    if (searchValue) {
      fetchCandidates(); // Fetch candidates when searchValue changes
    }
  }, [searchValue]);

  const fetchCandidates = async () => {
      try {
        const apiUrl = `${BASE_URL}/api/v1/candidate/candidates/${searchValue}`;
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log('API response:', data);
        setCandidates(data); // Update candidates state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or display error message to the user
      }
    };
    

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchCandidates(); // Trigger fetch when search form is submitted
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); // Update searchValue state
  };

  return (
    <div className="container">
      <div className='search-container'>
        <h2>Enter pin here</h2>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Enter pin code"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className='candidates-container'>
        {candidates.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} onVote={onVote} voted={voted} />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
