import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const dataToPass = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={dataToPass} />
    </div>
  );
};

export default ParentComponent;
