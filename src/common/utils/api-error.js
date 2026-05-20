class ApiError extends Error{
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this,this.constructor);
    }

    static badRequest(message = "Bad Request"){
    return new ApiError(400 , message)
    }

    static forbidden(message = "Forbidden"){
        return new ApiError(403 , message)
    }

    static notFound(message = "Not Found"){
        return new ApiError(401,message);
    }
}

export default ApiError;

