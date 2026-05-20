import ApiError from "../../common/utils/api-error.js"
import orgModel from "../org/org.model.js"
import boardModel from "./board.model.js"

const createBoard = async (req) => {
    const boardName = req.body.boardName

    //check organisation(admin) exists or not

    const orgDetails = await orgModel.findOne({
        admin : req.userId
    });

    if(!orgDetails){
        throw ApiError.notFound("Organisation not exists")
    }

    //create board

    const newBoard = await boardModel.create({
        boardName,
        organisationId: orgDetails._id
    })

    return newBoard
}

export { createBoard };

