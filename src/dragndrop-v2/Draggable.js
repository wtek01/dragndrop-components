import React, { useState } from 'react';

const Draggable = ({ id, children, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedId = e.dataTransfer.getData('text/plain');
    if (onDrop) {
      onDrop(droppedId, id);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        backgroundColor: isDragging ? 'lightgray' : 'white',
        padding: '10px',
        marginBottom: '10px',
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
