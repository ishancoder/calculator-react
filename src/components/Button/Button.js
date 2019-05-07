import React, {memo} from "react";
import "./Button.css";

const Button = memo(props => {
    return <button style={{...props.style}} className={`${props.operator&&'operator-btn'} custom-btn`} value={props.value} onClick={props.onClick}>{props.children}</button>
});

export default Button;