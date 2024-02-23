import {useContext} from "react";

import {Context} from "../hok";

const useAppContext = () => useContext(Context);

export {
    useAppContext
}