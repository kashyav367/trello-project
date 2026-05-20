import userModel  from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";
import jwt from "jsonwebtoken";

const signup = async ({ username , password }) => {

    const userExists = await userModel.findOne( {username})
    console.log("userExists" , userExists)

    if(userExists){
        throw ApiError.forBidden("User already exists")
    }

    const newUser = await userModel.create( {
        username,
        password
    });
    return newUser;
}



const signin = async ({ username , password }) => {

    const userExists = await userModel.findOne( {username})
    console.log("userExists" , userExists)
     if (!userExists) {
    throw ApiError.notFound("User not found");
   }

  const token = jwt.sign(
  { userId: userExists.id },
  process.env.JWT_SECRET   
);

    return token;
}


export { signup,signin}
