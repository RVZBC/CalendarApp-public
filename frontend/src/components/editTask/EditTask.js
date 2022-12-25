import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


export default function EditTask () {

    const { id } = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState('');
    const [status, setStatus] = useState('pending');
    const [schedule, setSchedule] = useState('');

    const [isActive, setIsActive] = useState(false);

    function editTask(e) {
        
        e.preventDefault();

        fetch(`http://localhost:4000/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                taskName: task,
                status: status,
                schedule: schedule
            })            
        })
        .then(res => res.json())
        .then(data => {

            console.log(data);

            if (data) {
                Swal.fire({
                    title: "Task successfully updated",
                    icon: "success",
                    text: `${task} is now updated`
                });

                navigate("/");
            } else {
                Swal.fire({
                    title: "Error!",
                    icon: "error",
                    text: `Something went wrong. Please try again later!`
                });
            }
        })

        setTask('');
        setStatus('');
        setSchedule('');

    }

    useEffect(() => {

        if (task !== "" && status !== "" && schedule !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [task, status, schedule]);

    useEffect(() => {

        fetch(`http://localhost:4000/task/${id}`)
        .then(res => res.json())
        .then(data => {

            console.log(data);

            setTask(data.taskName);
            setStatus(data.status);
            setSchedule(data.schedule);

        });

    }, [id]);

    return (
        <div className='container-fluid edittask' id="edittask">
            <div className="container dashboard" id="dashboard">
                <div className='container edittask-dashboard' id="edittask-dashboard">    <div className='text-center'>
                    <h1>Edit Task</h1>                    
                </div>
                    <Form onSubmit={(e) => editTask(e)}>
                        <Form.Group controlId="task" className="mb-3">
                            <Form.Label>Task</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Task"
                                value = {task}
                                onChange = {e => setTask(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="status" className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                            aria-label="status"
                            placeholder='Please select a status'
                            value = {status}
                            onChange = {e => {
                                setStatus(e.target.value)
                            }}
                            >
                                <option value="pending">Pending</option>
                                <option value="on-going">On-going</option>
                                <option value="completed">Completed</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="schedule" className="mb-3">
                            <Form.Label>Task Schedule</Form.Label>
                            <Form.Control 
                                type="date" 
                                placeholder="Enter Task Schedule"
                                value={schedule}
                                onChange = {e => setSchedule(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {isActive
                            ?
                            <Button className='m-2' variant="primary" type="submit" id="submitBtn">Save</Button>
                            :
                            <Button className='m-2' variant="primary" type="submit" id="submitBtn" disabled>Save</Button>
                        
                        }
                        
                        <Button className='m-2' as={Link} to="/" variant="primary" type="submit" id="submitBtn">Back</Button>

                    </Form>
                </div>
            </div>
        </div>
    )
}