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

  export default Component;