import React, { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import styles from "../styles/Home.module.css";
import Task from "./Task";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getResult = async () => {
    const result = await fetch("https://taskhit-api.herokuapp.com/tasks");
    const data = await result.json();
    setTasks(data);
  };

  useEffect(() => {
    getResult();
  }, [tasks]);

  return (
    <div className={`${styles.task} flex`}>
      <h3>Tasks</h3>
      {tasks.map((task) => (
        <Task key={task._id} data={task} />
      ))}
      <Button name="Add Task" onClick={() => setIsOpen(true)} />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
