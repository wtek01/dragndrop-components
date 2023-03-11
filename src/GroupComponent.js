function GroupComponent({ children }) {
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        {children}
      </div>
    );
  }

  export default GroupComponent;