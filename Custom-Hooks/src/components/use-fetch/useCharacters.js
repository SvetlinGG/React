import { useEffect, useState } from "react";

export default function useCharacters(){
    const [ characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(result => {
                setCharacters(result.results)
    });
    },[]);

    return [characters, setCharacters];
}