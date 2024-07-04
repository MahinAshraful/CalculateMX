import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState('')
  const [method, setMethod] = useState(null)
  const [value, setValue] = useState(null)

  const handleOperation = (operation) =>{
      setValue(count)
      setMethod(operation)
      setCount('')
  }

  const equals = () => {
    if (method === "add"){
      setCount(Number(value) + Number(count))
    } else if (method === "sub"){
      setCount(Number(value) - Number(count))
    } else if (method === 'mul'){
      setCount(Number(value) * Number(count))
    } else if (method === 'div'){
      setCount(Number(value) / Number(count))
    }
  } 


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{count}</div>
        <div className="buttons">
          <button onClick={() => setCount(count + "1")}>1</button>
          <button onClick={() => setCount(count + "2")}>2</button>
          <button onClick={() => setCount(count + "3")}>3</button>
          <button onClick={() => handleOperation("add")}>+</button>
          <button onClick={() => setCount(count + "4")}>4</button>
          <button onClick={() => setCount(count + "5")}>5</button>
          <button onClick={() => setCount(count + "6")}>6</button>
          <button onClick={() => handleOperation("sub")}>-</button>
          <button onClick={() => setCount(count + "7")}>7</button>
          <button onClick={() => setCount(count + "8")}>8</button>
          <button onClick={() => setCount(count + "9")}>9</button>
          <button onClick={() => handleOperation("mul")}>*</button>
          <button onClick={() => setCount('')}>C</button>
          <button onClick={() => setCount(count + "0")}>0</button>
          <button onClick={equals}>=</button>
          <button onClick={() => handleOperation("div")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App
