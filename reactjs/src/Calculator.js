import React, {useState, useEffect} from 'react';
import "./style.css";
import CalculatorCell from "./CalculatorCell.js";

function Calculator(){

  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const Calculate = {
    "X": (first,second) => first*second,
    "-": (first,second) => first-second,
    "÷": (first,second) => first/second,
    "+": (first,second) => first+second,
    "=": (first,second) => second,
  };

  useEffect(() => {}, [firstNumber,secondNumber,operation]);

  const handlerOperation = (value) =>{

  }



  return (
    <table>
      <tbody>
            <tr>
              <th className="display" colSpan="4">{firstNumber}</th>
            </tr>
                
            <tr className="cell">
                <CalculatorCell keyValue={"C"} /><CalculatorCell className="operator" keyValue={"÷"} />
            </tr>
                
            <tr className="cell">
                <CalculatorCell keyValue={"7"} /><CalculatorCell keyValue={"8"} /><CalculatorCell keyValue={"9"} /><CalculatorCell className="operator" keyValue={"X"} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell keyValue={"4"} /><CalculatorCell keyValue={"5"} /><CalculatorCell keyValue={"6"} /><CalculatorCell className="operator" keyValue={"-"} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell keyValue={"1"} /><CalculatorCell keyValue={"2"} /><CalculatorCell keyValue={"3"}/><CalculatorCell className="operator" keyValue={"+"} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell  keyValue={"0"} /><CalculatorCell keyValue={"."} /><CalculatorCell className="operator" keyValue={"="} />
            </tr>
          </tbody>
      </table>
  );
}

export default Calculator;
