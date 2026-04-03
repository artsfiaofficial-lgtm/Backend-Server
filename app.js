import express from 'express'
import connectDB from './db/connectDB.js'
import cors from 'cors'
import orderRoutes from './routes/orderRoutes.js'

const app = express()
const port = 3000
const database_url = 'mongodb://localhost:27017/'

//connect database
    connectDB(database_url)
//cors active no restriction    
    app.use(cors())
//body parser active
    app.use(express.json())
//routes
    app.use('/api/order', orderRoutes)

app.listen(port, ()=>{
    console.log("Server is listening at port ",port)
})