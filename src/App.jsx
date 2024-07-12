import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState('')
  const [method, setMethod] = useState(null)
  const [value, setValue] = useState(null)
  const [operand, setOperand] = useState('')



  const handleOperation = (operation) =>{
      setValue(count)
      setMethod(operation)
      setCount('')

      if (operation === "add"){
        setOperand("+")
      } else if (operation === "sub"){
        setOperand("-")
      } else if (operation === "mul"){
        setOperand("*")
      } else if (operation === "div"){
        setOperand("/")
      }
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

    setValue(null)
    setMethod(null)
    setOperand("")
  } 

  const nums = [1,2,3,4,5,6,7,8,9,0] 
  const ops = ["add", "sub", "mul", "div"]
  // 1,2,3,'add'
  // 4,5,6,'sub'
  // 7,8,9, 'mul'
  // C,0,=,'div'


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{value}{operand}{count}</div>
        <div className="buttons">
          {
            nums.map((value, index) => {
              
              return (
                <button key={index} onClick={() => setCount(count + String(value))}>
                  {value}
                </button>
              );
            })
          }


          <button onClick={() => handleOperation("add")}>+</button>
          <button onClick={() => handleOperation("sub")}>-</button>
          <button onClick={() => handleOperation("mul")}>*</button>
          <button onClick={() => handleOperation("div")}>/</button>


          <button onClick={() => setCount('')}>C</button>
          <button onClick={equals}>=</button>
        </div>
      </div>
      <p>Mahin</p>
    </div>
  );
}

export default App
