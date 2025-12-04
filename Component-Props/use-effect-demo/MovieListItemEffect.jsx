import { useEffect, useState } from "react"


export default function MovieListItemEffect({
    id,
    title, 
    year,
    onDelete,
}){
    const [rating, setRating] = useState(0);
    useEffect(()=> {
        console.log('On Mount');
        
    },[]);

    useEffect(()=> {
        console.log('Rating Updated');
        
    },[rating]);
    // on Unmount (cleanup function)
    useEffect(()=> {
        return () => {
            console.log('On Unmount');
            
        }
    })

    const counterClickHandler = () => {
        setRating(state => state + 1)
    }

    return (
        <>
        <li style={{fontWeight: 'bold'}}>
        <span>{title} - ({year})</span>
        <button onClick={counterClickHandler}>+</button>
        <span>{rating}</span>
        <button onClick={() => onDelete(id)}>x</button>
        </li>
        
        </>
    )
}