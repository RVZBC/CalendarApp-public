const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Task is required."]
    },
    schedule: {
        type: String,
        format: Date,
        required: [true, "Date is required"]        
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "pending"
    }

});

module.exports = mongoose.model("Task", taskSchema);