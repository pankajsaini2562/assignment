import express from "express"
import auth from "../middleware/authMiddleware.js"
import {getPortfolio,getTransactionHistory } from '../controllers/portfolioController.js'
const router = express.Router()
router.get('/portfolio', auth, getPortfolio);
router.get('/portfolio/history', auth, getTransactionHistory);
export default router;
