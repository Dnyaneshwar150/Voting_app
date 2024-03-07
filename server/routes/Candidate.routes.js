import { Router } from "express";
import { jwtAuthMiddleware } from "../middleware/Auth.middleware.js";
import { addCandidate, updateCandidate, deleteCandidate, voteToCandidate, voteCount, fetchCandidates } from "../controllers/Candidate.controllers.js";

const router = Router()

router.post('/',jwtAuthMiddleware,addCandidate)
router.put('/:candidateID',jwtAuthMiddleware,updateCandidate)
router.delete('/:candidateID',jwtAuthMiddleware,deleteCandidate)
router.post('/vote/:candidateID',jwtAuthMiddleware,voteToCandidate)
router.get('/vote/count',voteCount)
router.get('/candidates',fetchCandidates)

export default router