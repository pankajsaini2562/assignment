import express from "express"
import auth from "../middleware/authMiddleware.js"
import { createTransaction } from "../controllers/transactionController.js"
const router = express.Router()
router.post('/transactions', auth, createTransaction);
export default router