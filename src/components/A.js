import {B} from "./B";
import {useContext} from "react";
import {Context} from "../App";

const A = () => {
    const value = useContext(Context);
    return (
        <div>
            <h1>A: {value}</h1>
           <B/>
        </div>
    );
};

export {A};