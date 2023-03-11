import React, { useState } from "react";
import DropTarget from "./DropTarget";

function Component({ children }) {
  console.log(children);
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", children);
    //onDragStart();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
    >
      {children}
    </div>
  );
}

function Group({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

function App() {
  const [components, setComponents] = useState([]);

  const handleDragStart = () => {
    console.log("Dragging started");
  };

  const handleDrop = (droppedData) => {
    const newComponent = <Component>{droppedData}</Component>;
    const newGroup = (
      <Group>
        <DropTarget onDrop={handleDrop}>
          <p>Drop components here</p>
        </DropTarget>
        {newComponent}
      </Group>
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
      <Component onDragStart={handleDragStart}>Component 111</Component>
      <Component onDragStart={handleDragStart}>Component 2</Component>
      <Component onDragStart={handleDragStart}>Component 3</Component>
    </div>
  );
}

export default App;
