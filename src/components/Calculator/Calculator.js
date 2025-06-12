import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (operator) {
      const result = calculate(currentValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstValue, secondValue, op) => {
    switch (op) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    if (!operator) return;

    const inputValue = parseFloat(display);
    const result = calculate(currentValue, inputValue, operator);
    
    setDisplay(String(result));
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  return (
    <div className="calculator-container" id="calculator">
      <div className="calculator-content">
        <h5 className="calculator-heading">
          <span className="calculator-tag">CALCULATOR</span>
        </h5>
        
        <div className="calculator">
          <div className="calculator-display">{display}</div>
          <div className="calculator-keypad">
            <div className="calculator-row">
              <button onClick={() => clearAll()}>C</button>
              <button onClick={() => inputDigit(7)}>7</button>
              <button onClick={() => inputDigit(8)}>8</button>
              <button onClick={() => inputDigit(9)}>9</button>
              <button onClick={() => performOperation('/')}>/</button>
            </div>
            <div className="calculator-row">
              <button onClick={() => inputDigit(4)}>4</button>
              <button onClick={() => inputDigit(5)}>5</button>
              <button onClick={() => inputDigit(6)}>6</button>
              <button onClick={() => performOperation('*')}>×</button>
            </div>
            <div className="calculator-row">
              <button onClick={() => inputDigit(1)}>1</button>
              <button onClick={() => inputDigit(2)}>2</button>
              <button onClick={() => inputDigit(3)}>3</button>
              <button onClick={() => performOperation('-')}>-</button>
            </div>
            <div className="calculator-row">
              <button onClick={() => inputDigit(0)}>0</button>
              <button onClick={() => inputDecimal()}>.</button>
              <button onClick={() => handleEquals()}>=</button>
              <button onClick={() => performOperation('+')}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;