import ApiError from "../../common/utils/api-error.js"
import boardModel from "../board/board.model.js"
import taskModel from "./task.model.js"

const createTask = async(req) => {

    const { description , status , boardId } = req.body;

    //step 1 : Validate input 
    if( !description || !status || !boardId) {
        throw ApiError.badRequest("All fields are required")
    }

    //step 2: Validate status
    const allowedStatus = ["Todo" , "In Progress" , "Done"]

    if(!allowedStatus.includes(status)){
        throw ApiError.notFound("Invalid status")
    }

    //Check board exists
    const board = await boardModel.findById(boardId)

    if(!board){
        throw ApiError.notFound("Board not found")
    }

    //Prevent duplicate task in same board
    const taskExists = await taskModel.findOne({
        userId : req.userId,
        description,
        boardId
    });

    if(taskExists){
        throw ApiError.forbidden("Task already exists in this board")
    }

    //create new task
    const newTask = await taskModel.create({
        userId: req.userId,
        description,
        status,
        boardId
    })

    return newTask;
};

const updateTask = async (req) => {
    
    const { taskId, status } = req.body;

    // validate input
    if (!taskId || !status) {
        throw ApiError.badRequest("taskId and status are required");
    }

    // validate status
    const allowedStatus = ["Todo", "In Progress", "Done"];

    if (!allowedStatus.includes(status)) {
        throw ApiError.badRequest("Invalid status");
    }

    // find task (only owner can update)
    const task = await taskModel.findOne({
        _id: taskId,
        userId: req.userId
    });

    if (!task) {
        throw ApiError.notFound("Task not found");
    }

    // update status
    task.status = status;

    await task.save();

    return task;
};

const deleteTask = async (req) => {

    const { taskId } = req.body;

    // Step 1: Find task (only owner can delete)
    const task = await taskModel.findOne({
        _id: taskId,
        userId: req.userId
    });

    if (!task) {
        throw ApiError.notFound("Task not found");
    }

    // Step 2: Delete task
    await taskModel.deleteOne({ _id: taskId });

    return task;
};


export { createTask , updateTask, deleteTask}