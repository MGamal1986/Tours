import React from "react";
import Classes from "./Title.module.scss";
function Title(props) {
    let classses = props.under ? Classes.Title_under : Classes.Title;
    classses += " mt-3 mb-5";
    return <h1 className={classses}>{props.title}</h1>;
}

export default Title;
