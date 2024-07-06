import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import portfolioRouter from '../routes/portfolioRoutes.js'
import transactionRouter from '../routes/transactionRoutes.js'
import authRouter from '../routes/authroutes.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO).then(()=>{
console.log("database is connected")
app.listen(3000,()=>{
  console.log("server is running succesfully")
})
})
.catch((error)=>{
console.log(error)
})

app.use('/api',portfolioRouter)
app.use('/api',transactionRouter)
app.use('/api',authRouter)