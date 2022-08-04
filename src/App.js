import {useState} from "react"
import './App.css';

function App() {
  const [temp, setTemp] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="circle">
          <h1>{temp}</h1>
        </div>
        <div className="button-wrapper">
          <button className="button-red">Raise Temperature</button>
          <button className="button-blue">Lower Temperature</button>
        </div>
      </div>

    </div>
  );
}

export default App;
