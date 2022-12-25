import { useState, useEffect } from "react";
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Draggable from 'react-draggable';
// import FilterTask from "../filterTask/FilterTask";
import './Dashboard.css';

export default function Dashboard () {

    const [allTask, setAllTask] = useState([]);

    // const [filterValue, updateFilterValue] = useState('');


    // task parameter is set to "never" still can't find a work around fix.
    /* const filteredTasks = allTask.filter((task) => {        

        if (filterValue === 'all') {
            return task
        }
        if (filterValue === 'pending') {
            return task === 'pending'
        }
        if (filterValue === 'on-going') {
            return task.status === 'on-going'
        }
        if (filterValue === 'completed') {
            return task.status === 'completed'
        }

        
    })
    

    function onFilterValueSelected (filterValue) {
        updateFilterValue(filterValue)        
    } */

    

    const fetchData = () => {

        fetch(`http://localhost:4000/task/tasklist`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            setAllTask(data.tasks.map(task => {
                return (
                    <tr key={task._id}>
                        <td className="text-white">{task.taskName}</td>
                        <td className="text-white">{task.status}</td>
                        <td className="text-white">{task.schedule}</td>
                        <td>
                        <Button as={Link} to={`/editTask/${task._id}`} className='mx-2 my-1'>Edit</Button>
                        <Button className='mx-2 my-1' onClick={() => deleteTask(task._id, task.taskName)}>Delete</Button></td>
                    </tr>
                )
                }))
        })
    }

    const deleteTask = (taskId, taskName) => {

        fetch(`http://localhost:4000/task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data) {
                Swal.fire({
                    title: "Deletion Successful!",
                    icon: "success",
                    text: `${taskName} has been deleted from the list.`
                })
                fetchData();
            } else {
                Swal.fire({
                    title: "Deletion Unsuccessful!",
                    icon: "error",
                    text: `Something went wrong. Please try again later!`
                })
            }
        })
    };



    useEffect(() => {
        fetchData();
    });

    return (
        <Draggable>
            <div className="container-fluid main" id="main">
                <div className="container dashboard" id="dashboard">
                    <div className="text-center">
                        <h1 className="text-white">Calendar App</h1>
                        
                        <Button as={Link} to="/addTask" variant="primary" size="lg" className="mx-2">Add Task</Button>
                        <br/>
                    
                        {/* <FilterTask filterValueSelected={onFilterValueSelected}/> */}

                    </div>
                    <Table striped bordered hover className="mt-2 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <thead className="text-center">
                        <tr className="text-white">
                            <th>Task</th>
                            <th>Status</th>
                            <th>Schedule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTask}
                    </tbody>
                </Table>
                </div>
            </div>
        </Draggable>
        
    )
}