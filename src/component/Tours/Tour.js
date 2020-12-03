import React, { useState } from "react";
import Aux from "../../hoc/Auxillary";
import Classes from "./Tour.module.scss";
import Label from "../Label/Label";
import { motion } from "framer-motion";
function Tour({ id, image, info, name, price, filter }) {
    const [readMore, setReadMore] = useState(true);
    let classes = `card mb-5 shadow rounded ${Classes.Tour}`;
    const toggleRead = () => {
        setReadMore(!readMore);
    };
    return (
        <motion.div whileHover={{ scale: 1.03, cursor: "pointer" }}>
            <Aux>
                <div className={classes}>
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body mt-3">
                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="card-title align-self-center">{name}</h5>
                            <Label label={price} />
                        </div>
                        <p className="card-text text-left">
                            {readMore ? `${info.substring(0, 200)}` : info}
                            <span onClick={toggleRead} className={Classes.Read}>
                                {readMore ? "read more" : "read less"}
                            </span>
                        </p>
                        <button
                            onClick={filter}
                            type="button"
                            className="text-capitalize btn btn-outline-danger"
                        >
                            not interesting
                        </button>
                    </div>
                </div>
            </Aux>
        </motion.div>
    );
}

export default Tour;
