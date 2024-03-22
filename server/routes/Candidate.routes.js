import { Router } from "express";
import { jwtAuthMiddleware } from "../middleware/Auth.middleware.js";
import { fetchCandidatesResult,addCandidate, updateCandidate, deleteCandidate, voteToCandidate, voteCount, fetchCandidates } from "../controllers/Candidate.controllers.js";

const router = Router()

router.post('/',jwtAuthMiddleware,addCandidate)
router.put('/:candidateID',jwtAuthMiddleware,updateCandidate)
router.delete('/:candidateID',jwtAuthMiddleware,deleteCandidate)
router.post('/vote/:candidateID',jwtAuthMiddleware,voteToCandidate)
router.get('/vote/count',voteCount)
router.get('/candidates/result',fetchCandidatesResult)
router.get('/candidates/:pincode',fetchCandidates)
// router.get('/')

export default router