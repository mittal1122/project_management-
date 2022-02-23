const mongoose = require("mongoose")


//schema
const project_teamSchema = new mongoose.Schema({
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

//model
const project_teamModel = mongoose.model("project_team",project_teamSchema)

module.exports = project_teamModel