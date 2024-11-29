import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const[flag, setFlag] = useState(true)
  const handleClick = ()=>{
    setFlag(!flag)
  }
  return (
    <div className="App" id="main">
      <p className={flag ? "hide" : "show"} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      <button id="click" onClick={handleClick}>Click</button>
    </div>
  );
}

export default App
