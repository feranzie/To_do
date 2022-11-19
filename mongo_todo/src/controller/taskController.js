const Task=require("../model/task.js")
// retrieve all todo tasks
exports.getAllTasks=async(req,res)=>{
    try{
        let tasks=await Task.find();
        if(tasks.length == 0)
        return res.status(404).json({
            success:false,
            message:"No todo tasks were found",
        });
        res.status(200).json({
            success: true,
            message: "todo tasks found",
            tasks,
            count:tasks.length,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message:"Internal server error",
            error:error.message,
        });

    }
};

//add todo task
exports.addTask=async(req,res)=>{
    
    try {
        let task=await req.body;
        let created=await Task.create(task);
    if (!created) return res.status(400).json({
        success: false,
        message:"task creation failed"
    })
    return res.status(201).json({
        success: true,
        message:"task created successfully",
        task:created,

    })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal seerver error",
            error:error.message,
        });
    }
}
//update todo task
exports.updateTask=async(req,res)=>{
    try {
    let id={_id: req.params.id};
    let task= await req.body;
    let update= await Task.findOneAndUpdate(id, task, {new: true});    
    if(!update)
    return res.status(400).json({
        success:false,
        message:"task not updated"
    });
    return res.status(200).json({
        success:true,
        message:"task updated",
        task:update,
    });  
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error",
            error: error.message,
        })
    }  
};
//delete todo task
exports.deleteTask=async(req,res)=>{
    try {
        let id={_id: req.params.id};
        let deleted=await Task.findOneAndRemove(id);
        if(!deleted) return res.status(400).json({
           success:false,
           message:"task not deleted" ,
        });
        return res.status(200).json({
            success:true,
            message:"task deleted successfully",
         })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal seerver err" ,
            error: error.message
         })
    }
}