import { useState } from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList(){

    const [movies, setMovies] = useState([
        {title: 'Iron Man', year: 2020},
        {title: 'The Matrix', year: 1999},
        {title: 'Star Wars', year: 1986},
        {title: 'The Case for Christ', year: 2001},
    ]);

   

    const addButtonHandler = () => {
        setMovies( oldState => [
            ...oldState, {title: 'Amazing Grace', year: 2020}
        ]
            //{title: 'Amazing Grace', year: 2020}
        )
    }

    return (
        <>
        <h2>Movie List</h2>

        <ul>
            {movies.map( movie => <MovieListItem title={movie.title} year={movie.year}/>)}
        </ul>
        <button onClick={addButtonHandler}>Add</button>


        </>
    )
}