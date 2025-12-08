import { useState } from "react";

export default function CharacterList(){

    const [characters, setCharacters] = useState([])

    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(result => {
        console.log(result.results);
        
    });

    return (

        <>
        <h2>Character List (fetch-demo)</h2>

        <ul>
            {characters.map(character => <li>{character.name}</li>}
        </ul>
        </>
        
    )
}