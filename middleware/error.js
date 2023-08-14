class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

exports.errorMiddleware = (err, req,res,next) =>{
    err.message || "Internal Error"
    err.statusCode || 500
    return res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
}

module.exports = ErrorHandler