import { useEffect, useState } from "react"


export default function MovieListItemEffect({
    title, 
    year,
}){
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log('On Mount');
        
    },[]);

    const counterClickHandler = () => {
        setCount(state => state + 1)
    }

    return (
        <>
        <p>Count: {count}</p>
        <li style={{fontWeight: 'bold'}}>{title} - ({year})</li>
        <button onClick={counterClickHandler}>+</button>
        </>
    )
}