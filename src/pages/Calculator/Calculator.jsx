import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const onButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === 'CE') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <div className="calculator-display">
          <input type="text" value={display} readOnly />
        </div>
        <div>
          <button onClick={() => onButtonClick('C')} className="operator">C</button>
          <button onClick={() => onButtonClick('CE')} className="operator">CE</button>
          <button onClick={() => onButtonClick('.')} className="operator">.</button>
          <button onClick={() => onButtonClick('/')} className="operator">/</button>
        </div>
        <div>
          <button onClick={() => onButtonClick('7')}>7</button>
          <button onClick={() => onButtonClick('8')}>8</button>
          <button onClick={() => onButtonClick('9')}>9</button>
          <button onClick={() => onButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => onButtonClick('4')}>4</button>
          <button onClick={() => onButtonClick('5')}>5</button>
          <button onClick={() => onButtonClick('6')}>6</button>
          <button onClick={() => onButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => onButtonClick('1')}>1</button>
          <button onClick={() => onButtonClick('2')}>2</button>
          <button onClick={() => onButtonClick('3')}>3</button>
          <button onClick={() => onButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => onButtonClick('00')}>00</button>
          <button onClick={() => onButtonClick('0')}>0</button>
          <button onClick={() => onButtonClick('=')} className="equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
