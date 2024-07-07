import Transaction from '../models/transactionModel.js'
export const createTransaction = async (req,res) =>{
  try {
    const { type, amount, asset, price, date } = req.body;
    const userId = req.user.id;

    const newTransaction = new Transaction({
      type,
      amount,
      asset,
      price,
      date,
      userId
    });

    await newTransaction.save();
    res.status(200).json({succss:true,newTransaction});
  } catch (error) {
    res.status(500).send('Server Error');
  }
  
}