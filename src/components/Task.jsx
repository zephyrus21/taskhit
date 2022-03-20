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
        <Button name='Add Task' onClick={() => setIsOpen(true)}>
          Add Task
        </Button>
        {isOpen && <Modal setIsOpen={(v) => setIsOpen(v)} />}
      </div>
    </div>
  );
};

export default Task;
