const Task = require('../model/Task');
const dotenv = require('dotenv');
const connectDatabase = require('../database/database');
const tasks = require('../database/taskData.json')

dotenv.config({ path: '../database/config.env'});

connectDatabase();

const seedTasks = async () => {
    try {
        await Task.deleteMany();
        console.log('Task are deleted');

        await Task.insertMany(tasks);
        console.log('All tasks are added.')

        process.exit();
    } catch(error) {
        console.log(error.message);
        process.exit();
    }
}

seedTasks();