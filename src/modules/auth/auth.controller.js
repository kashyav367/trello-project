import ApiResponse from "../../common/utils/api-response.js";
import * as authServices from "./auth.service.js"

const signup = async(req, res , next) => {
    try{
        const user = await authServices.signup(req.body);

        ApiResponse.ok(res , "user get created" , user);
    }catch(error){
        next(error)
    }
};



const signin = async(req, res , next) => {
    try{
        const token = await authServices.signin(req.body);

        ApiResponse.ok(res , "Signin Successfully" , token);
    }catch(error){
         console.log("ERROR:", error); 
        next(error)
    }
};

export { signup , signin}