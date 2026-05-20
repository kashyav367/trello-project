import ApiResponse from "../../common/utils/api-response.js";
import * as taskService from "./task.services.js"


const createTask = async(req,res,next) => {
    try {
        const data = await taskService.createTask(req);

        ApiResponse.ok( 
            res,
            "Task created successfully",
            data
        );
    }
    catch(err) {
        next(err)
    }
}
console.log("createTask", createTask)

const updateTask = async(req, res, next) => {
   try { const data = await taskService.updateTask(req)

    ApiResponse.ok(
        res,
        "task update successful",
        data
    )
  }
   catch(err){
    next(err)
   }
}

const deleteTask = async (req, res, next) => {
  try {
    const data = await taskService.deleteTask(req);

    ApiResponse.ok(
      res,
      "Task deleted successfully",
      data
    );

  } catch (error) {
    next(error);
  }
};



export { createTask , updateTask , deleteTask};