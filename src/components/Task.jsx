import React from "react";

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
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>{data.user}</p>
      <button onClick={() => deleteTaskHandler(data._id)}>Delete</button>
    </div>
  );
};

export default Task;
