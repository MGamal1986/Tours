import React from "react";
import Classes from "./Label.module.scss";
function Label(props) {
    return <span className={Classes.Label}>{props.label}</span>;
}
export default Label;
