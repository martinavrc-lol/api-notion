const middleware404 = ( req , res , next )=>{ 
    const error = new Error(`El endpoint al que llamas no existe`)
          error.status  = 404 
        next(error)
}
  
const middleware500 = (error , req , res , next )=>{
    let status = error.status || 500
    res.status(status).json({
        message : error.message,
        data    : null
    })
}

module.exports = {
    middleware404,
    middleware500
}