import {Badge} from "react-bootstrap";
import css from "./Genre.module.css"

const Genre = ({genre}) => {
    const {name} = genre;
    return (
        <div>
            <Badge bg="info" className={css.genre_budge} >{name}</Badge>
        </div>
    );
};

export {Genre};