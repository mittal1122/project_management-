const mongoose = require("mongoose")


//schema
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
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
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

//model
const projectModel = mongoose.model("project",projectSchema)

module.exports = projectModel


