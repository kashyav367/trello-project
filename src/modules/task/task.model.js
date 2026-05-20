import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description : "String",
    status : "String",
    boardId : mongoose.Types.ObjectId,
    userId : mongoose.Types.ObjectId
});

const taskModel = mongoose.model("task", taskSchema);

export default taskModel;