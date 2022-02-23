const user_taskModel = require("../model/user_task-model")


module.exports.addUser_task=function (req,res){
    //db insert role

    let user = req.body.user
    let task = req.body.task

    let user_task= new user_taskModel({
        user:user,
        task:task
    })

    user_task.save(function(err,success){
        if(err){
            res.json({msg:"SMW", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"user_task added", status:200, data:success})
        }
    })
}

module.exports.getAlluser_task= function(req,res){

    //REST 
    user_taskModel.find().populate("user").populate("task").exec(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"get all user_tasks...",status:200,data:roles})

        }

    })

}
// /sdfdsfsdfdsf 
module.exports.deleteUser_task = function(req,res){
    let user_taskId = req.params.user_taskId

    //delete from role where roleId = 1 
    RoleModel.deleteOne({"_id":user_taskId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateUser_task = function(req,res){

    let user_taskId = req.body.user_taskId 
    let user = req.body.user 
    let project= req.body.project

    user_taskModel.updateOne({_id:user_taskId},{user:user,project:project},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}