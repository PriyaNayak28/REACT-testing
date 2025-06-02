
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <p>Hello World</p>
      <input
        type="text"
        placeholder="Type here..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>test click event with button</h1>
      <button onClick={() => setCount("update data")}>Click Me</button>
      <h2>{count}</h2>

      <h1>Form Submission</h1>
      <button onClick={handleSubmit}>Submit</button>
      {loading && <p role="status">Loading...</p>}
      {submitted && <p>Form submitted!</p>}
    </div>
  );
}

export default App;

