import React, { useState } from 'react';

const Droppable = ({ onDrop, children }) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    const id = e.dataTransfer.getData('text/plain');
    onDrop(id);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
        padding: '10px',
        border: '2px dashed gray',
        minHeight: '100px',
      }}
    >
      {children}
    </div>
  );
};

export default Droppable;
