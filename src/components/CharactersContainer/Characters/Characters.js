import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {charactersAction} from "../../../store/slices";
import {Character} from "../Character";
import css from "./Characters.module.css";

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const {ids} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersAction.getByIds({ids}))
    }, [ids,dispatch]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};