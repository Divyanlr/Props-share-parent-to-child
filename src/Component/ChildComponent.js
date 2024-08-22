import React from "react";

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h2>This is Child Component</h2>
      <p>{data}</p>
    </div>
  );
};

export default ChildComponent;
