const projectModel = require("../model/project-model")

//add
module.exports.addProject=function(req,res){
    let title= req.body.title
    let description= req.body.description
    let technology= req.body.technology
    let estimatedHours= req.body.estimatedHours
    let startDate=req.body.startDate
    let completionDate=req.body.completionDate
    let status = req.body.status

    let project = new projectModel({
        title:title,
        description:description,
        technology:technology,
        estimatedHours:estimatedHours,
        startDate:startDate,
        completionDate:completionDate,
        status:status
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"save it ", status:200, data:data})
        }
    })

}

//list 
module.exports.getAllprojects=function(req,res){
    projectModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"show all data  ", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteproject  = function(req,res){
    let projectId = req.params.projectId

    projectModel.deleteOne({_id:projectId},function(err,data)
    {
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"delete  it ", status:200, data:data})
        }
    })
}

// update
module.exports.updateproject = function(req,res){
    let projectId= req.body.projectId
    let title = req.body.title
    let description= req.body.description
    let technology= req.body.technology
    let estimatedHours= req.body.estimatedHours
    let startDate=req.body.startDate
    let completionDate=req.body.completionDate
    let status = req.body.status

    projectModel.updateOne({_id:projectId},{title:title,description:description,
        technology:technology,estimatedHours:estimatedHours,startDate:startDate,
        completionDate:completionDate,status:status},function(err,data){
            if(err){
                res.json({msg:"Something went wrong",status:-1,data:err})
            }else{
                res.json({msg:"upadate  it ", status:200, data:data})
            } 
        })
}
