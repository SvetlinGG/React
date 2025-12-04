import { useEffect } from "react"


export default function MovieListItemEffect({
    title, 
    year,
}){
    useEffect(()=> {
        console.log('On Mount');
        
    },[]);

    return (
        <li style={{fontWeight: 'bold'}}>{title} - ({year})</li>
    )
}