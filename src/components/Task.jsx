import React, { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import styles from "../styles/Task.module.css";

const Task = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      const result = await fetch("https://taskhit-api.herokuapp.com/tasks");
      const data = await result.json();

      setTasks(data);
    };
    getResult();
  }, []);

  return (
    <div className={`${styles.task} flex`}>
      <div className='my-task'>
        <h3>Tasks</h3>
        {tasks.map((task) => (
          <div key={task._id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.user}</p>
          </div>
        ))}
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
