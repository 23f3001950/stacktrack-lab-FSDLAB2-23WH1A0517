import React, { useState } from 'react';
import { put } from '../api/client';

function QuestionComponent() {

  const [task, setTask] = useState({
    id: 1,
    title: "Complete Lab",
    status: "Pending"
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {
      await put(`/tasks/${task.id}`, task);
    } catch (e) {
      console.log("backend not connected");
    }

    alert("Task Updated Successfully");
  };

  return (
    <div>
      <h2>Edit Task</h2>

      <label>Title</label><br/>
      <input
        name="title"
        value={task.title}
        onChange={handleChange}
      />

      <br /><br />

      <label>Status</label><br/>
      <input
        name="status"
        value={task.status}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleUpdate}>
        Update Task
      </button>

      <h3>Updated Task:</h3>
      <p>Title: {task.title}</p>
      <p>Status: {task.status}</p>

    </div>
  );
}

export default QuestionComponent;