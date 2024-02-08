import {useEffect, useState} from "react";
import {Character} from "../CharacterContainer/Character";
import {charactersService} from "../../services/charactersService";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        charactersService.getAll().then(({data}) => setCharacters(data));
    }, []);
    return (
        <div>
            {characters(<Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};