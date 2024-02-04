import {Characters} from "./componetnts/Characters";

const App = () => {
    const arr = [
        {
            "id": 7,
            "name": "Abradolf Lincler",
            "status": "unknown",
            "species": "Human",
            "type": "Genetic experiment",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        },
        {
            "id": 8,
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        },
        {
            "id": 9,
            "name": "Agency Director",
            "status": "Dead",
            "species": "Human",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        },
        {
            "id": 10,
            "name": "Alan Rails",
            "status": "Dead",
            "species": "Human",
            "type": "Superhuman (Ghost trains summoner)",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        },
        {
            "id": 11,
            "name": "Albert Einstein",
            "status": "Dead",
            "species": "Human",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        },
        {
            "id": 12,
            "name": "Alexander",
            "status": "Dead",
            "species": "Human",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        },
        {
            "id": 13,
            "name": "Alien Googah",
            "status": "unknown",
            "species": "Alien",
            "type": "none",
            "gender": "unknown",
            "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        },
        {
            "id": 14,
            "name": "Alien Morty",
            "status": "unknown",
            "species": "Alien",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        },
        {
            "id": 15,
            "name": "Alien Rick",
            "status": "unknown",
            "species": "Alien",
            "type": "none",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        },
        {
            "id": 16,
            "name": "Amish Cyborg",
            "status": "Dead",
            "species": "Alien",
            "type": "Parasite",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        },
        {
            "id": 17,
            "name": "Annie",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        },
        {
            "id": 18,
            "name": "Antenna Morty",
            "status": "Alive",
            "species": "Human",
            "type": "Human with antennae",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        }
    ]
    return (
        <div>
            {arr.map(character => <Characters character={character} key={character.id}/>)}
        </div>
    );
};

export {App};