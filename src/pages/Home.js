import React from 'react';
import { Link } from 'react-router-dom';

const STUDENT_ID = '23WH1A0517';
const LAB_ID = '2';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <h3>Task Manager</h3>

      <Link to="/edit">
        <button>Edit Task (PUT)</button>
      </Link>

    </div>
  );
}

export default Home;