import './App.css';


function App() {
  return (
    <div className="Main">
      <div className="resultsec">0
      </div>
      <div className="main-container">
        <div className="flex-container">
          <button  name="%" className="flex-item" id="modulo">%</button>
          <button  name="clears"className="flex-item" id="Clears">CE</button>
          <button  name="clear"className="flex-item" id="clear">C</button>
          <button  name="backspace"className="flex-item" id="backspace">x</button>
        </div>
        <div className="flex-container">
          <button  name="1/x"className="flex-item" id="onebyx"><small>1/x</small></button>
          <button  name=""className="flex-item" id="sqaure">x²</button>
          <button  name=""className="flex-item" id="squareroot">²√x</button>
          <button  name="/"className="flex-item" id="division">/</button>
        </div>
        <div className="flex-container">
                <button  name="7"className="flex-item" id="seven">7</button>
                <button  name="8"className="flex-item" id="eight">8</button>
                <button  name="9"className="flex-item" id="nine">9</button>
                <button  name="*"className="flex-item" id="multiply">x</button>
        </div>
        <div className="flex-container">
                <button  name="4"className="flex-item" id="four">4</button>
                <button  name="5"className="flex-item" id="five">5</button>
                <button  name="6"className="flex-item" id="six">6</button>
                <button  name="-"className="flex-item" id="minus">-</button>
        </div>
        <div className="flex-container">
                <button  name="1"className="flex-item" id="one" >1</button>
                <button  name="2"className="flex-item" id="two">2</button>
                <button  name="3"className="flex-item" id="three">3</button>
                <button  name="+"className="flex-item" id="plus">+</button>
        </div>
        <div className="flex-container">
                <button  name=""className="flex-item" id="plusminus">+/-</button>
                <button  name="0"className="flex-item" id="0">0</button>
                <button  name="."className="flex-item" id="dot">.</button>
                <button  name="euqal"className="flex-item" id="equal">=</button>
        </div>
      </div>
    </div>

  );
}

export default App;
