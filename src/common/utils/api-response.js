class ApiResponse{
    static ok(res, message, data=null){
        return res.status(201).json({
            success:true,
            message,
            data
        });
    }
}


export default ApiResponse;