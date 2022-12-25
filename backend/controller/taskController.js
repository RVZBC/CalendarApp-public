const Task = require('../model/Task');


// Create task => /task/newtask
module.exports.newTask = async (req, res) => {

    const task = await Task.create({
        taskName: req.body.taskName,
        status: req.body.status,
        schedule: req.body.schedule
    })

    res.status(201).json({        
        task
    })
};

// Retrieve all task => /task/tasklist
module.exports.getTasks = async (req, res) => {

    const tasks = await Task.find(req.params);

    res.status(200).json({        
        tasks
    })
};

// Retrieve task by id => /task/:id
module.exports.getSingleTask = async (req, res) => {

    const task = await Task.findById(req.params.id)

    console.log(req.params)

    res.status(200).json(task);
}

// Update/edit task => /task/:id
module.exports.updateTask = async (req, res) => {

    const id = req.params.id;
    const updates = req.body;
        

    const updatedTask = await Task.findByIdAndUpdate(id, updates);

    console.log(updatedTask)

    res.status(201).json(updatedTask)

};

// Delete task by ID => /task/:id
module.exports.deleteTask = async (req, res) => {

    const id = req.params.id;

    const taskDelete = await Task.findByIdAndDelete(id)

    console.log(taskDelete)

    res.status(201).json(taskDelete)
};

// Delete all task => /task/deleteall
module.exports.deleteAllTask = async (req, res) => {
    
    const wipe = await Task.deleteMany();

    console.log('Task are deleted');
    console.log(wipe);

    res.status(200).json(wipe);

}

