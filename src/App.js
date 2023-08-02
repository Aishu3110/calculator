import './App.css';
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
    console.log()
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(calculateExpression(input));
    } catch (error) {
      console.log(error);
      setResult(result);
    }
  };

  const calculateExpression = (expression) => {
    const operators = ['+', '-', '*', '%'];
    const parts = expression.split('');
  
    let calculatedResult = parseFloat(parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      console.log(operator);
      const operand = parseFloat(parts[i + 1]);
      switch (operator) {
        case '+':
          calculatedResult += operand;
          break;
        case '-':
          calculatedResult -= operand;
          break;
        case '*':
          calculatedResult *= operand;
          break;
        case '%':
          calculatedResult %= operand;
          break;
        default:
          break;
      }
    }
  
    return calculatedResult; // Return the numerical result without converting to string
  };

  return (
    <div className="calculator">
      <input type="text" value={input}  onChange={(e) => setInput(e.target.value)}/>
      <div className="buttons">
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
        </div>
        <div>
          <button onClick={clearInput}>C</button>
        </div>
      </div>
      <div className="result">
  <h2>Result: {result}</h2>
</div>
    </div>
  );
}

export default Calculator;