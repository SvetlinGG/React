//import { useState } from "react"

export default function MovieListItem({
    title,
    year,
}){
   
    //const [ movies, setMovies] = useState([])
    return (
        <li style={{fontWeight: 'bold'}}>{title} - ({year})</li>
    )
}