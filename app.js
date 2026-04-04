import express from 'express'
import productRoutes from './routes/productRoutes.js'
import connectDB from './db/connectDB.js'
import cors from 'cors'
import orderRoutes from './routes/orderRoutes.js'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
dotenv.config() // my this thing loads my env file

const app = express()
const port = process.env.PORT
const database_url = process.env.MONGO_URI

//connect database
    connectDB(database_url)
//cors active no restriction    
    app.use(cors())
//body parser active
    app.use(express.json())
//routes
    app.use('/api/auth',authRoute)
    app.use('/api/order', orderRoutes)
    app.use('/api/product', productRoutes)

app.listen(port, ()=>{
    console.log("Server is listening...")
})