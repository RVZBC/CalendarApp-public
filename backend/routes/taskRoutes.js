const express = require("express");
const router = express.Router();

const { newTask, updateTask, getTasks, getSingleTask, deleteTask, deleteAllTask } = require('../controller/taskController');

// CRUD

//Create task => /task/newtask
router.route('/newtask').post(newTask);

// Retrieve all task => /task/tasklist
router.route('/tasklist').get(getTasks);

// Retrieve, Update and delete task by id => /task/:taskid
router.route('/:id')
.get(getSingleTask)
.put(updateTask)
.delete(deleteTask);

// Delete all task => /task/deleteall
router.route('/deleteall').delete(deleteAllTask);


module.exports = router;

