import { useEffect, useState } from "react";

export default function CharacterList(){

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(result => {
                setCharacters(result.results)
    });
    },[])

    

    return (

        <>
        <h2>Character List (fetch-demo)</h2>

        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>
        </>
        
    )
}