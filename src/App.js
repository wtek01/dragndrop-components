import React, { useState } from "react";
import DropTarget from "./DropTarget";
import Component from "./Component";
import GroupComponent from "./GroupComponent";



function App() {
  const [components, setComponents] = useState([]);

  const handleDragStart = () => {
    console.log("Dragging started");
  };

  const handleDrop = (droppedData) => {
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
    <div>
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
      <DropTarget onDrop={handleDrop}>
        <p>Drop components here</p>
      </DropTarget>
      <Component onDragStart={handleDragStart}>Component 1</Component>
      <Component onDragStart={handleDragStart}>Component 2</Component>
      <Component onDragStart={handleDragStart}>Component 3</Component>
    </div>
  );
}

export default App;
