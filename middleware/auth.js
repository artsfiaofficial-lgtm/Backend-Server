import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try{
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({message : "No token"})
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified
    next()    
}
    catch{
        res.status(401).json({message : "Unauthorized"})
    }
}

export default auth