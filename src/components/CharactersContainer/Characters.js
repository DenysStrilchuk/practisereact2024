import {rickAndMortyAPIService} from "../../services/rickAndMortyAPIService";
import {useEffect, useState} from "react";
import {Character} from "../CharacterContainer/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        rickAndMortyAPIService.getAll().then(({data}) => setCharacters(data));
    }, []);
    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};