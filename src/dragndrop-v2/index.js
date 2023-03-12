import React, { useState } from 'react';
import Draggable from './Draggable';
import Group from './Group';

const DragAndDropv2 = () => {
  const [draggableItems, setDraggableItems] = useState([
    { id: '1', name: 'Draggable Component 1' },
    { id: '2', name: 'Draggable Component 2' },
    { id: '3', name: 'Draggable Component 3' },
    { id: '4', name: 'Draggable Component 4' },
    { id: '5', name: 'Draggable Component 5' },
    { id: '6', name: 'Draggable Component 6' },
  ]);
  const [groupedItems, setGroupedItems] = useState([]);

  const handleDrop = (droppedId, targetId) => {
    const existingGroup = groupedItems.find((group) =>
      group.includes(droppedId)
    );

    if (existingGroup) {
      const updatedGroup = existingGroup.includes(targetId)
        ? existingGroup
        : [...existingGroup, targetId];
      setGroupedItems((prevItems) =>
        prevItems.map((group) =>
          group === existingGroup ? updatedGroup : group
        )
      );
    } else {
      const newGroup = [droppedId, targetId];
      setGroupedItems((prevItems) => [...prevItems, newGroup]);
    }
    setDraggableItems((prevItems) =>
      prevItems.filter((item) => item.id !== droppedId && item.id !== targetId)
    );
  };

  return (
    <div>
      {draggableItems.map((item) => (
        <Draggable key={item.id} id={item.id} onDrop={handleDrop}>
          <div>{item.name}</div>
        </Draggable>
      ))}
      {groupedItems.map((group) => (
        <Group key={group.join('-')} items={group} onDrop={handleDrop} />
      ))}
    </div>
  );
};

export default DragAndDropv2;
