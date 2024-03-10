import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

import {characterActions} from "../../../store/slices";
import {Character} from "../Character";
import css from "./Characters.module.css";

const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const {ids} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(characterActions.getByIds({ids}));
    }, [ids, dispatch]);

    return (
        <div>
            <button onClick={navigate(-1)}>back</button>
            <div className={css.Characters}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {Characters};