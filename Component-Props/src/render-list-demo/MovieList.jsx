import { useState } from "react";
import MovieListItem from "./MovieListItem";

export default function MovieList(){

    const [movies, setMovies] = useState([
        {id: 1, title: 'Iron Man', year: 2020},
        {id: 2, title: 'The Matrix', year: 1999},
        {id: 3, title: 'Star Wars', year: 1986},
        {id: 4, title: 'The Case for Christ', year: 2001},
    ]);

   

    const addButtonHandler = () => {
        setMovies( oldState => [
            {title: 'Amazing Grace', year: 2020},
            ...oldState,
        ]);
    }

    return (
        <>
        <h2>Movie List</h2>

        <ul>
            {movies.map( movie => <MovieListItem key={movie.id} title={movie.title} year={movie.year}/>)}
        </ul>
        <button onClick={addButtonHandler}>Add</button>


        </>
    )
}