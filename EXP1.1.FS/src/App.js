import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Simple Counter SPA</h1>
        <h2 style={styles.counter}>{count}</h2>

        <div>
          <button
            style={styles.button}
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            style={styles.buttonRed}
            onClick={() => setCount(count - 1)}
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#f1f2f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },

  title: {
    marginBottom: "20px",
    color: "#2f3542",
  },

  counter: {
    fontSize: "48px",
    margin: "20px 0",
    color: "#3742fa",
  },

  button: {
    fontSize: "22px",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#1e90ff",
    color: "white",
  },

  buttonRed: {
    fontSize: "22px",
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#ff7675",
    color: "white",
  },
};

export default App;
