import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [name, setName] = useState();
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={event => {
          const { value } = event.target;
          if (/[0-9]/.test(value)) {
            setError("Names shouldn't have numbers");
          } else {
            setError(null);
          }
          setName(value);
        }}
      />
      {error != null ? <p>Error: {error}</p> : null};
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
