
import useCharacters from "./useCharacters";

export default function CharacterList(){

    const [characters] = useCharacters([])
    return (

        <>
        <h2>Character List - useFetch demo</h2>

        <ul>
            {characters.map(character => <li key={character.name}>{character.name}</li>)}
        </ul>
        </>
        
    )
}