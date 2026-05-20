import ApiResponse from "../../common/utils/api-response.js"
import * as boardService from "./board.service.js"


const createBoard= async(req,res,next) => {
    try{
        const data = await boardService.createBoard(req)

        ApiResponse.ok(
            res,
            "Board get created",
            data
        );
    } catch(err){
        next(err)
    }
};

export {
    createBoard
}