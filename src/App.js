import {useState} from "react"
import './App.css';

function App() {
  const [temp, setTemp] = useState(22)
  const [isHot, setIsHot] = useState(true)

  const changeTemp = (type) => {
    if (type === "raise"){
      setTemp(temp + 1)
      if (temp + 1 >= 22) { setIsHot(true) }
    }
    else if (type === "lower") {
      setTemp(temp - 1)
      if (temp - 1 < 22) { setIsHot(false) }
    }
    else {
      console.error("changeTemp() invalid or missing type")
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="circle" 
          style= {{
              backgroundColor: isHot ? 'crimson' : 'blue'
            }}>
          <h1>{temp}°</h1>
        </div>
        <div className="button-wrapper">
          <button className="button-red" onClick={() => changeTemp("raise")}>Raise Temperature</button>
          <button className="button-blue" onClick={() => changeTemp("lower")}>Lower Temperature</button>
        </div>
      </div>

    </div>
  );
}

export default App;
