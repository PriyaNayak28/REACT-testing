
import './App.css';
import React, { useState } from 'react';

function App() {
  let [data, setData] = useState(" ");
  return (
    <div className="App">
      <p>Hello World</p>
      {/* <input type="text" placeholder="Type here..."  name="username" id='root'/> */}
      <input type="text" placeholder="Type here..." value={data} onChange={(e) => setData(e.target.value)} />
      <br/>

    </div>
  );
}

export default App;
