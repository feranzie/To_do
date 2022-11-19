const router=require("express").Router();
const controller=require("../controller/taskController");

router
.get("/", controller.getAllTasks)
.post("/", controller.addTask)
.put("/", controller.updateTask)
.delete("/:id", controller.deleteTask);
module.exports=router;