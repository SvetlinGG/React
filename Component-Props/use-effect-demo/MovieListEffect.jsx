import { useState } from "react";
import MovieListItemEffect from "./MovieListItemEffect";

export default function MovieListEffect(0){
    const [count, setCount] = useState();

    const [movies, setMovies] = useState([
        {id: 1, title: 'Iron Man', year: 2020},
        {id: 2, title: 'The Matrix', year: 1999},
        {id: 3, title: 'Star Wars', year: 1986},
        {id: 4, title: 'The Case for Christ', year: 2001},
    ]);

    const counterClickHandler = () => {
        setCount(state => state + 1)
    }

    const addButtonHandler = () => {
        setMovies( oldState => [
            {id: oldState.length + 1, title: 'Amazing Grace', year: 2020},
            ...oldState,
        ]);
    }

    return (
        <>
        <h2>Movie List Effect</h2>

        <ul>
            {movies.map( movie => <MovieListItemEffect key={movie.id} title={movie.title} year={movie.year}/>)}
        </ul>
        <p>Count: {count}</p>
        <button onClick={addButtonHandler}>Add</button>
        <button onClick={counterClickHandler}>+</button>


        </>
    )
}