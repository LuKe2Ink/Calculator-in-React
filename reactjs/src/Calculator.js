import React, {useState, useEffect} from 'react';
import "./style.css";
import CalculatorCell from "./CalculatorCell.js";

function Calculator(){

  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState(null);

  useEffect(() => {}, [operation, firstNumber, secondNumber])

  const calculate = {
    "X": (first,second) => first*second,
    "-": (first,second) => first-second,
    "÷": (first,second) => first/second,
    "+": (first,second) => first+second,
    "=": (first,second) => second,
  };

  const calculation = () => {
    if(secondNumber.charAt(secondNumber.length-1) === "."){
      secondNumber.slice(secondNumber.length-1, 1);
    }
    let result = calculate[operation](
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );

    setOperation(null);
    setSecondNumber(String(result));
    setFirstNumber(null);

  } 

  const insertNumber = (number) => {
    setSecondNumber(secondNumber === "0" ? String(number) : secondNumber+number);
  }

  const reset = () =>{
    setSecondNumber("0");
    setFirstNumber(null);
  }

  const dot = () =>{
    setSecondNumber(secondNumber+".");
  }

  const chooseOperation = (value) =>{
    
    if(Number.isInteger(value)){
      insertNumber(parseInt(value, 10));
    } else if(value in calculate){
        if(operation === null){
          setOperation(value);
          setFirstNumber(secondNumber);
          setSecondNumber("");
        }
        if(operation){
          setOperation(value);
        }
          if(firstNumber && secondNumber && operation){
            calculation();
          }
      }
      if(value === "C"){
        reset();
      }
      if(value === "."){
        dot();
      }
    };




  return (
    <table>
      <tbody>
            <tr>
              <th className="display" colSpan="4">{secondNumber}</th>
            </tr>
                
            <tr className="cell">
                <CalculatorCell keyValue={"C"} onClick={chooseOperation} /><CalculatorCell className="operator" onClick={chooseOperation} keyValue={"÷"} />
            </tr>
                
            <tr className="cell">
                <CalculatorCell keyValue={7} onClick={chooseOperation} />
                <CalculatorCell keyValue={8} onClick={chooseOperation} />
                <CalculatorCell keyValue={9} onClick={chooseOperation} />
                <CalculatorCell className="operator" onClick={chooseOperation} keyValue={"X"} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell keyValue={4} onClick={chooseOperation} />
                <CalculatorCell keyValue={5} onClick={chooseOperation} />
                <CalculatorCell keyValue={6} onClick={chooseOperation} />
                <CalculatorCell className="operator" keyValue={"-"} onClick={chooseOperation} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell keyValue={1} onClick={chooseOperation} />
                <CalculatorCell keyValue={2} onClick={chooseOperation} />
                <CalculatorCell keyValue={3} onClick={chooseOperation} />
                <CalculatorCell className="operator" keyValue={"+"} onClick={chooseOperation} />
            </tr>
            
            <tr className="cell">
                <CalculatorCell  keyValue={"0"} onClick={chooseOperation} />
                <CalculatorCell keyValue={"."} onClick={chooseOperation} />
                <CalculatorCell className="operator" keyValue={"="} onClick={chooseOperation} />
            </tr>
          </tbody>
      </table>
  );
}

export default Calculator;
