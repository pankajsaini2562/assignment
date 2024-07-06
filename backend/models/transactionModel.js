import mongoose from "mongoose"
const transactionSchema = new mongoose.Schema({

  type:{
    type:String,
    required:true,
    enum:['deposit','withdrawal','buy','sell']
  },
  amount:{
    type:Number,
    required:true
  },
  asset:{
    type:String,
    required:function() {
      return this.type === 'buy'  ||  this.type === "sell"
    }
  },
  price:{
    type:String,
    required: function(){
      return this.type === 'buy' || this.type === 'sell'
    }
  },
  date:{
    type:Date,
    required:true
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true

  }


})
const Transaction = mongoose.model('Transaction',transactionSchema)
export default Transaction