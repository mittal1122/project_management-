const mongoose = require("mongoose")


//schema
const project_moduleSchema = new mongoose.Schema({
    moduleName:{
        type:String
    },
    description:{
        type:String
    },
    technology:{
        type:String
    },
    estimatedHours:{
        type:String
    },
    startDate:{
        type:String
    },
    completionDate:{
        type:String
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

//model
const project_moduleModel = mongoose.model("project_module",project_moduleSchema)

module.exports = project_moduleModel
	
    
    