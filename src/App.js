
import './App.css';
import React, { use, useState } from 'react';

function App() {
  let [data, setData] = useState(" ");
  let [count , setCount] = useState("");
  
  return (
    <div className="App">
      <p>Hello World</p>
      {/* <input type="text" placeholder="Type here..."  name="username" id='root'/> */}
      <input type="text" placeholder="Type here..." value={data} onChange={(e) => setData(e.target.value)} />
      <h1>test click event with button</h1>
      <button onClick={() => setCount("update data")}>Click Me</button>
      <h2>{count}</h2>
      <br/>

    </div>
  );
}

export default App;
