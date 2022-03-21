import React from "react";

const Task = ({ data, tasks, setTasks }) => {
  const deleteTaskHandler = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const result = await fetch(
      `https://taskhit-api.herokuapp.com/delete/${id}`,
      requestOptions
    );

    await result.json();

    setTasks(tasks.filter(({ _id: i }) => id !== i));
  };

  return (
    <div key={data._id}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>{data.user}</p>
      <button onClick={() => deleteTaskHandler(data._id)}>Delete</button>
    </div>
  );
};

export default Task;
