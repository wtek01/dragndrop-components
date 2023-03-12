import React from 'react';
import Draggable from './Draggable';

const Group = ({ items, onDrop }) => {
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const groupStyle = {
    backgroundColor: randomColor(),
    padding: '10px',
    margin:'10px'
  };

  return (
    <div style={groupStyle}>
      {items.map((id) => (
        <Draggable key={id} id={id} onDrop={onDrop} isGrouped>
          <div>Draggable {id}</div>
        </Draggable>
      ))}
    </div>
  );
};

export default Group;
