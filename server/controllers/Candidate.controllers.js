import { Candidate } from "../models/Candidate.models.js";
import { User } from "../models/User.models.js";

const checkAdminRole = async(userID) => {
      try {
            const user = await User.findById(userID)
            if(user.role === 'admin'){
                  return true;
            }
      } catch (error) {
            return false
      }
}

const addCandidate = async (req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                  return res.status(403).json({success:false,msg:"user has not admin role"})

            const data = req.body
            
            const newCandidate = new Candidate(data)

            const response = await newCandidate.save()

            res.status(200).json({success:true,response: response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const updateCandidate = async(req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                return res.status(403).json({success:false,msg:"user has not admin role"})

            const candidateID = req.params.candidateID; //extract the id from the URL parameter
            const updatedCandidateData = req.body;

            const response = await Candidate.findByIdAndUpdate(candidateID,updatedCandidateData,{
                  new: true, //returns the updated document
                  runValidators: true //run mongoose validator
            })

            if(!response){
                  return res.status(404).json({success:false,msg: " Candidate not found"})
            }
            res.status(200).json({response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}
const deleteCandidate = async(req,res) => {
      try {
            if(! await checkAdminRole(req.user.id))
                  return res.status(403).json({success:false,msg:"user does not have admin role"})

            const candidateID = req.params.candidateID; //extract the id from the URL parameter

            const response = await Candidate.findByIdAndDelete(candidateID)

            if(!response){
                  return res.status(404).json({success:false,msg: "Candidate not found"})
            }
            res.status(200).json({success:true,response})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const voteToCandidate = async(req,res) => {
      //no admin can vote
      //user can only vote once

      const candidateID = req.params.candidateID;
      const userId = req.user.id;

      try {
            const candidate = await Candidate.findById(candidateID)
            if(!candidate){
                  return res.status(404).json({success:false,msg:"Candidate not found"})
            }

            const user = await User.findById(userId)
            if(!user){
                  return res.status(404).json({success:false,msg:"User not found"})
            }

            if(user.isVoted){
                 return res.status(400).json({success:false,msg: "You have already voted"})
            }
            if(user.role == 'admin'){
                  res.status(400).json({success: false,msg: "admin is not allowed"})
            }

            //update the candidate document to record the vote
            candidate.votes.push({user: userId})
            candidate.voteCount++;
            await candidate.save()

            //update the user document
            user.isVoted = true
            await user.save()

            res.status(200).json({success:true,msg: "Vote recorded successfully"})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const voteCount = async(req,res) => {
      try {
            //Find all candidates and sort them by voeCount in descending order
            const candidate = await Candidate.find().sort({voteCount: 'desc'});

            //Map the candidates to only return their name & voteCount
            const voteRecord = candidate.map((data) =>{
                  return {
                        party: data.party,
                        count: data.voteCount
                  }
            });

            return res.status(200).json(voteRecord)
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const fetchCandidates = async(req,res) =>{
      const candidates = await Candidate.find();

      res.status(200).json(candidates)

}
export { addCandidate, updateCandidate, deleteCandidate, voteToCandidate, voteCount, fetchCandidates }