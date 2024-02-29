import {Badge} from "react-bootstrap";
import css from "./Genre.module.css"
import {useNavigate} from "react-router-dom";
import {MovieInfo} from "../../../MovieInfoContainer";

const Genre = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/genres/${id}`)}>
            <Badge bg="info" className={css.genre_budge} >{name}</Badge>
        </div>
    );
};

export {Genre};