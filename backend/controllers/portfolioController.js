import Transaction from '../models/transactionModel.js'
import {calculatePortfolioValue,calculateProfitLoss,calculateAssetAllocation } from '../utils/portfolioUtils.js'

export const getPortfolio = async (req,res) =>{
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({ userId });

    const portfolioValue = calculatePortfolioValue(transactions);
    const profitLoss = calculateProfitLoss(transactions);
    const assetAllocation = calculateAssetAllocation(transactions);

    res.json({
      portfolioValue,
      profitLoss,
      assetAllocation
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
}

export const getTransactionHistory = async (req,res) =>{
  try {
    const userId = req.user.id;
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).send('Server Error');
  }

}