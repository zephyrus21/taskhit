import React from "react";
import styles from "../styles/Task.module.css";
import Delete from "../assets/Delete.svg";

const Task = ({ data }) => {
  const deleteTaskHandler = async (id) => {
    const requestOptions = {
      method: "DELETE",
    };

    const result = await fetch(
      `https://taskhit-api.herokuapp.com/delete/${id}`,
      requestOptions
    );
    await result.json();
  };

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.task_details}>
          <h3>{data.title}</h3>
          <button onClick={() => deleteTaskHandler(data._id)}>
            <img src={Delete} />
          </button>
        </div>
        <p className={styles.data}>{data.description}</p>
        <p className={styles.user}>{data.user}</p>
      </div>
      <div className={styles.tast_status}>
        <button>Done</button>
      </div>
    </div>
  );
};

export default Task;
