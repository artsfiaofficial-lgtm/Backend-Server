const auth = (req, res, next) => {
    const token = req.headers.authorization
    if(!token === 'mehrab123'){
        return res.status(401).json({message : "Unauthorized"})
    }
    next()
}

export default auth