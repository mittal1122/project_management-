const mongoose =require("mongoose");

//schema

let user_taskSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
})

//model

let user_taskModel = mongoose.model("userTask",user_taskSchema) //roles

module.exports = user_taskModel