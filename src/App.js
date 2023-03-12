import React, { useState } from "react";
import DropTarget from "./DropTarget";
import Component from "./Component";
import GroupComponent from "./GroupComponent";


const  App = () => {
  const [components, setComponents] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedData = event.dataTransfer.getData("text/plain");
    const newComponent = <Component>{droppedData}</Component>;
    const newGroup = (
      <GroupComponent>
        <DropTarget onDrop={handleDrop}>
          <p>Drop components here</p>
        </DropTarget>
        {newComponent}
      </GroupComponent>
    );
    setComponents([...components, newGroup]);
  };

  return (
    <div onDrop={handleDrop}>
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
  
      <DropTarget>
          <Component >Component 1</Component>
      </DropTarget>
      <DropTarget >
          <Component >Component 2</Component>
      </DropTarget>
    </div>
  );
}

export default App;
