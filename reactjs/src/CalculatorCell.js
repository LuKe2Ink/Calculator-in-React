import React from "react";
import "./style.css";

function CalculatorCell(props){

    const column = {
        "1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"+":1,"-":1,"X":1,"÷":1,
        "0":2,"C":3,"=":1,
    }


    return (
        <td colSpan={`${column[props.keyValue]}`} className={`${props.className}`} onClick={()=>props.onClick(props.keyValue)}>
        {props.keyValue}
        </td>
    );
}

export default CalculatorCell;