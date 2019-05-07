import React, {memo} from "react";
import "./NumPad.css";
import Button from "../Button/Button";
import Display from "../Display/Display";

const layOut = [
    ["AC", "+/-", "%", "÷"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];

const NumPad =  memo(props => {
    return <div className="num-pad-container">
        <Display dispValue={props.display} />
        <div className="num-pad">
            {
                layOut.map(array => array.map(part => {
                    return (
                        <Button style={{ flexGrow: part === 0 && 2 }} key={part} operator={part !== "." && typeof part !== "number"} value={part} onClick={props.onClick}>{part}</Button>
                    )
                }))
            }
        </div>
    </div>
});

export default NumPad;