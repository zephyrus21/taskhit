import React from "react";

const Task = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <p>{data.user}</p>
    </div>
  );
};

export default Task;
