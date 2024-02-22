import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services";
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {ids} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data));
    }, [ids]);
    return (
        <div>
            <button onClick={() => navigate(-1)}>back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};