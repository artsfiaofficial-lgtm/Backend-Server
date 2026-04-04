import express from 'express'
import jwt from 'jsonwebtoken'
const route = express.Router()

route.post('/login', (req, res)=>{
    const {email, password} = req.body 
    if(email === 'mehrab@email' && password === '1212'){
        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET,
            {expiresIn : '1d'}
        )
        res.status(200).json({token})
    }
    else{
        res.status(401).json({message : "Unauthorized artsfia"})
    }
})

export default route