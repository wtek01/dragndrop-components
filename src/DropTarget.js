import React from "react";

function DropTarget(props) {
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedData = event.dataTransfer.getData("text/plain");
    props.onDrop(droppedData);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: "1px solid black", padding: "10px" }}
    >
      {props.children}
    </div>
  );
}

export default DropTarget;
