// import { useState } from 'react';
import './App.css';

// function App() {
//     const [result, setResult] = useState('');
//     const [add, setAdd] = useState((a, b) => a + b);
//     const [subtract, setSubtract] = useState((a, b) => a - b);
//     const [multiply, setMultiply] = useState((a, b) => a * b);
//     const [divide, setDivide] = useState((a, b) => a / b);
  
//     const handleOperation = (event) => {
//       const value = event.target.name;
//       setResult((prevResult) => prevResult + value);
//     };
  
//     const clearResult = () => {
//       setResult('');
//     };
  
//     const backspace = () => {
//       setResult((prevResult) => prevResult.slice(0, -1));
//     };
  
//     const calculateResult = () => {
//       try {
//         setResult(calculateExpression(result));
//       } catch (error) {
//         setResult('Error');
//       }
//     };
  
//     const calculateExpression = (expression) => {
//       const operators = ['+', '-', '*', '/'];
//       const parts = expression.split(new RegExp(`(${operators.join('|')})`));
  
//       let calculatedResult = parseFloat(parts[0]);
//       for (let i = 1; i < parts.length; i += 2) {
//         const operator = parts[i];
//         const operand = parseFloat(parts[i + 1]);
//         switch (operator) {
//           case '+':
//             calculatedResult = add(calculatedResult, operand);
//             break;
//           case '-':
//             calculatedResult = subtract(calculatedResult, operand);
//             break;
//           case '*':
//             calculatedResult = multiply(calculatedResult, operand);
//             break;
//           case '/':
//             if (operand === 0) {
//               throw new Error('Division by zero');
//             }
//             calculatedResult = divide(calculatedResult, operand);
//             break;
//           default:
//             break;
//         }
//       }
  
//       return calculatedResult.toString();
//     };
  


//   return (
//     <div className="Main">
//       <div className="resultsec">{result}
//       </div>
//       <div className="main-container">
//         <div className="flex-container">
//           <button  name="%" className="flex-item" id="modulo">%</button>
//           <button  name="clears"className="flex-item" id="Clears">CE</button>
//           <button  onclick={clearResult}name="clear"className="flex-item" id="clear">C</button>
//           <button  onclick={backspace}name="backspace"className="flex-item" id="backspace">x</button>
//         </div>
//         <div className="flex-container">
//           <button  name="1/x"className="flex-item" id="onebyx"><small>1/x</small></button>
//           <button  name=""className="flex-item" id="sqaure">x²</button>
//           <button  name=""className="flex-item" id="squareroot">²√x</button>
//           <button  onClick={calculateExpression}name="/"className="flex-item" id="division">/</button>
//         </div>
//         <div className="flex-container">
//                 <button  onClick={handleOperation} name="7"className="flex-item" id="seven">7</button>
//                 <button  onClick={handleOperation} name="8"className="flex-item" id="eight">8</button>
//                 <button  onClick={handleOperation} name="9"className="flex-item" id="nine">9</button>
//                 <button  onClick={calculateExpression}name="*"className="flex-item" id="multiply">x</button>
//         </div>
//         <div className="flex-container">
//                 <button  onClick={handleOperation} name="4"className="flex-item" id="four">4</button>
//                 <button  onClick={handleOperation} name="5"className="flex-item" id="five">5</button>
//                 <button  onClick={handleOperation} name="6"className="flex-item" id="six">6</button>
//                 <button  onClick={calculateExpression}name="-"className="flex-item" id="minus">-</button>
//         </div>
//         <div className="flex-container">
//                 <button  onClick={handleOperation} name="1"className="flex-item" id="one" >1</button>
//                 <button  onClick={handleOperation} name="2"className="flex-item" id="two">2</button>
//                 <button  onClick={handleOperation} name="3"className="flex-item" id="three">3</button>
//                 <button  onClick={calculateExpression}name="+"className="flex-item" id="plus">+</button>
//         </div>
//         <div className="flex-container">
//                 <button  name=""className="flex-item" id="plusminus">+/-</button>
//                 <button  onClick={handleOperation} name="0"className="flex-item" id="0">0</button>
//                 <button  name="."className="flex-item" id="dot">.</button>
//                 <button  onClick={calculateResult}name="euqal"className="flex-item" id="equal">=</button>
//         </div>
//       </div>
//     </div>

//   );
// }

// export default App

import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // const backspace = () => {
  //   setInput((prevInput) => prevInput.slice(0, -1));
  // };

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
    const parts = expression.split(new RegExp(`(${operators.join('|')})`));
  
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
      <input type="text" value={input}  onChange={input}/>
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