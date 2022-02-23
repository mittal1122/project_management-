const project_teamModel = require("../model/project_team-model")

//add
module.exports.addProject_team=function(req,res){
    let project=req.body.project
    let user = req.body.user

    let project_team = new project_teamModel({
        project:project,
        user:user
    })

    project_team.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"save it ", status:200, data:data})
        }
    })

}

//list 
module.exports.getAllprojects_teams=function(req,res){
    project_teamModel.find().populate("project").populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"show all data  ", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteproject_team = function(req,res){
    let teamId = req.params.teamId

    project_teamModel.deleteOne({_id:teamId},function(err,data)
    {
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"delete  it ", status:200, data:data})
        }
    })
}

// update
module.exports.updateproject_team = function(req,res){
    let teamId= req.body.teamId
    
    let project=req.body.project
    let user = req.body.user

    project_teamModel.updateOne({_id:teamId},{project:project,user:user},function(err,data){
            if(err){
                res.json({msg:"Something went wrong",status:-1,data:err})
            }else{
                res.json({msg:"upadate  it ", status:200, data:data})
            } 
        })
}