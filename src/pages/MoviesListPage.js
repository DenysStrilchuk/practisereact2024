import {Movies} from "../components";
import {Outlet} from "react-router-dom";

const MoviesListPage = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviesListPage};