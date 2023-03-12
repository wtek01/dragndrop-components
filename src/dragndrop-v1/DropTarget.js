import React from "react";

function DropTarget(props) {
  /*const handleDrop = (event) => {
    event.preventDefault();
    const droppedData = event.dataTransfer.getData("text/plain");
    props.onDrop(droppedData);
  };*/

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      //onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {props.children}
    </div>
  );
}

export default DropTarget;
