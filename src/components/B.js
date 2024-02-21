import {C} from "./C";
import {useContext} from "react";
import {Context} from "../App";

const B = () => {
    const value = useContext(Context);
    return (
        <div>
            <h1>B: {value}</h1>
            <C/>
        </div>
    );
};

export {B};