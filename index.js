const express =require("express")
const mongoose = require("mongoose")

//Controllers
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const projectController = require("./controller/project-controller")
const projectTeamController = require("./controller/project_team-controller")
const statusController = require("./controller/status-controller")
const projectModuleController = require("./controller/project_module-controller")
const TaskController = require("./controller/task-controller")
const userTaskController= require("./controller/user_task-controler")


const app = express()

// express is middle ware  
app.use(express.json())  //express server run  live  
app.use(express.urlencoded({extended:true})) 



//database
mongoose.connect('mongodb://localhost:27017/project_management',function(err)   //for link db to server
{
    if(err){
    console.log("db connection fail...");
    console.log(err)
    }
    else{

        console.log('db connected...')
    }

})



//roles
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//users
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllprojects)
app.delete("/projects/:projectId",projectController.deleteproject)
app.put("/projects",projectController.updateproject)

//project_team
app.post("/projectteams",projectTeamController.addProject_team)
app.get("/projectteams",projectTeamController.getAllprojects_teams)
app.delete("/projectteams/:teamId",projectTeamController.deleteproject_team)
app.put("/projectteams",projectTeamController.updateproject_team)

//status
app.post("/statuses",statusController.addStatus)
app.get("/statuses",statusController.getAllstatus)
app.delete("/statuses/:statusId",statusController.deleteStatus)
app.put("/statuses",statusController.updatestatus)

//project_module
app.post("/projectmodules",projectModuleController.addProjectmodule)
app.get("/projectmodules",projectModuleController.getAllprojectmodules)
app.delete("/projectmodules/:moduleId",projectModuleController.deleteprojectmodule)
app.post("/projectmodules", projectModuleController.updateprojectmodule)

//task
app.post("/tasks",TaskController.addTask)
app.get("/tasks",TaskController.getAlltasks)
app.delete("/tasks/:taskId",TaskController.deletetask)
app.put("/tasks",TaskController.updatetask)

//user_task
app.post("/usertasks",userTaskController.addUser_task)
app.get("/usertasks",userTaskController.getAlluser_task)
app.delete("/usertasks/:user_taskId",userTaskController.deleteUser_task)
app.put("/usertasks",userTaskController.updateUser_task)

app.listen(3000,function(){
    console.log("server started on 3000")
})