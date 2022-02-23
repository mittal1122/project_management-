const mongoose = require("mongoose")


//schema
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String
    },
    totalMinutes:{
        type:String
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    module:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"module"
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }
})

//model
const taskModel = mongoose.model("task",taskSchema)

module.exports = taskModel