
import useCharacters from "./useCharacters";
import useFetch from "./useFetch";

export default function CharacterList(){

    //const [characters] = useCharacters([]);

    const [characters, setCharacters] = useFetch('https://swapi.dev/api/people', []);
    return (

        <>
        <h2>Character List - useFetch demo</h2>

        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>
        </>
        
    )
}