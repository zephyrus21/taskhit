import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import styles from "../styles/Task.module.css";

const Task = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.task} flex`}>
      <div className='my-task'>
        <h3>Tasks</h3>
      </div>
      <div className='submitted-task'></div>
      <div className='add-task'>
        <button onClick={() => setIsOpen(true)}>Add Task</button>
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : <h1>Hello</h1>}
      </div>
    </div>
  );
};

export default Task;
