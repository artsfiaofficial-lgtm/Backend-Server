import {getData, createNewData, updateData, readData, deleteData} from '../controllers/orderController.js'
import express from 'express'

const route = express.Router()

route.get('/', getData)
route.post('/new', createNewData)
route.delete('/delete/:id',deleteData)
route.put('/update/:id', updateData)
route.get('/read/:id', readData)

export default route