import {useContext} from "react";
import {Context} from "../App";

const C = () => {
    const value = useContext(Context);
    return (
        <div>
            <h1>C: {value}</h1>
        </div>
    );
};

export {C};