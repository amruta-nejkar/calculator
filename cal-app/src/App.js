import React from 'react';
import { useState} from 'react';
import { Keypad , Display } from './components';

function App() {
  const[result, setResult] = useState("");

  const handleClick = (e) => {
      setResult(result + e.target.value)
  }

  const backspace = () => {
    setResult(result.slice(0,result.length - 1))
  }

  const reset = () => {
    setResult("");
  }

  const calculate = () => {
      setResult(eval(result))
  }

  return (
    <div className="App">
        <Display FinalValue={result}/>
        <Keypad HandleClick={handleClick} Backspace={backspace} Reset={reset} Calculate={calculate}/>
    </div>
  );
}

export default App;