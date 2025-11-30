import MovieListItem from "./MovieListItem";


export default function MovieList(){

    return (
        <>
        <h2>Movie List</h2>

        <ul>
            <li>Star Wars</li>
            <li>The Matrix</li>
            <MovieListItem />
            <li>Heat</li>
        </ul>
        </>
    )
}