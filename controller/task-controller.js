const taskModel = require("../model/task-model")

//add
module.exports.addTask=function(req,res){
    let title= req.body.title
    let priority=req.body.priority
    let totalMinutes=req.body.totalMinutes
    let description= req.body.description
    let status = req.body.status
    let module=req.body.module
    let project =req.body.project

    let task = new taskModel({
        title:title,
        priority:priority,
        totalMinutes:totalMinutes,
        description:description,
        status:status,
        module:module,
        project:project
    })

    task.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"save it ", status:200, data:data})
        }
    })

}

//list 
module.exports.getAlltasks=function(req,res){
    taskModel.find().populate("project").populate("module").populate("status").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"show all data  ", status:200, data:data})
        }
    })
}

//delete
module.exports.deletetask  = function(req,res){
    let taskId = req.params.taskId

    taskModel.deleteOne({_id:taskId},function(err,data)
    {
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"delete  it ", status:200, data:data})
        }
    })
}

// update
module.exports.updatetask = function(req,res){

    let taskId= req.body.taskId
    let title= req.body.title
    let priority=req.body.priority
    let totalMinutes=req.body.totalMinutes
    let description= req.body.description
    let status = req.body.status
    let module=req.body.module
    let project =req.body.project


    taskModel.updateOne({_id:taskId},{title:title,
        priority:priority,
        totalMinutes:totalMinutes,
        description:description,
        status:status,
        module:module,
        project:project},function(err,data){
            if(err){
                res.json({msg:"Something went wrong",status:-1,data:err})
            }else{
                res.json({msg:"upadate  it ", status:200, data:data})
            } 
        })
}
