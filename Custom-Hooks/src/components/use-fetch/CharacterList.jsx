import { useEffect, useState } from "react";

export default function CharacterList(){

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const abortController = new AbortController();


        fetch('https://swapi.dev/api/people', {signal: abortController.signal})
            .then(res => res.json())
            .then(result => {
                setCharacters(result.results)
    });

    return () => {
        abortController.abort();
    }
    },[])

    

    return (

        <>
        <h2>Character List - useFetch demo</h2>

        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>
        </>
        
    )
}