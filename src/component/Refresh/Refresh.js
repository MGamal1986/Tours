import React from "react";
import Classes from "./Refresh.module.scss";
function Refresh({ click }) {
    let classes = `btn btn-primary btn-lg ${Classes.Refresh}`;
    return (
        <button onClick={click} className={classes}>
            Refresh
        </button>
    );
}

export default Refresh;
