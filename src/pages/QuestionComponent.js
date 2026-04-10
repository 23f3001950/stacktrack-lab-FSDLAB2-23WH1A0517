import React, { useState } from 'react';
import { put } from '../api/client';

function QuestionComponent() {

  const [task, setTask] = useState({
    id: 1,
    title: "Sample Task",
    status: "Pending"
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    await put(`/tasks/${task.id}`, task);
    alert("Task Updated");
  };

  return (
    <div>
      <h2>Edit Task</h2>

      <input
        name="title"
        value={task.title}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="status"
        value={task.status}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleUpdate}>
        Update Task
      </button>
    </div>
  );
}

export default QuestionComponent;