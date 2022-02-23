const project_moduleModel = require("../model/project_module-model")

//add
module.exports.addProjectmodule=function(req,res){
    let moduleName= req.body.moduleName
    let description= req.body.description
    let technology= req.body.technology
    let estimatedHours= req.body.estimatedHours
    let startDate=req.body.startDate
    let completionDate=req.body.completionDate
    let project= req.body.project
    let status = req.body.status

    let projectmodule = new project_moduleModel({
        moduleName:moduleName,
        description:description,
        technology:technology,
        estimatedHours:estimatedHours,
        startDate:startDate,
        completionDate:completionDate,
        project:project,
        status:status
    })

    projectmodule.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"save it ", status:200, data:data})
        }
    })

}

//list 
module.exports.getAllprojectmodules=function(req,res){
    project_moduleModel.find().populate("project").populate("status").exec(function(err,data){
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"show all data  ", status:200, data:data})
        }
    })
}

//delete
module.exports.deleteprojectmodule  = function(req,res){
    let moduleId = req.params.moduleId

    project_moduleModel.deleteOne({_id:moduleId},function(err,data)
    {
        if(err){
            res.json({msg:"Something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"delete  it ", status:200, data:data})
        }
    })
}

// update
module.exports.updateprojectmodule = function(req,res){
    let moduleId= req.body.moduleId
    let moduleName= req.body.moduleName
    let description= req.body.description
    let technology= req.body.technology
    let estimatedHours= req.body.estimatedHours
    let startDate=req.body.startDate
    let completionDate=req.body.completionDate
    let project= req.body.project
    let status = req.body.status

    project_moduleModel.updateOne({_id:moduleId},{moduleName:moduleName,description:description,
        technology:technology,estimatedHours:estimatedHours,startDate:startDate,
        completionDate:completionDate,project:project,status:status},function(err,data){
            if(err){
                res.json({msg:"Something went wrong",status:-1,data:err})
            }else{
                res.json({msg:"upadate  it ", status:200, data:data})
            } 
        })
}