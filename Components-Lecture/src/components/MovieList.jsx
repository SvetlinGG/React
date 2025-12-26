import MovieListItem from "./MovieListItem";


export default function MovieList(){
    return (
        <>
        <h2>Movie List</h2>

        <ul>
            <MovieListItem title="Man of Steel" year="2003" />
            <MovieListItem title="The Matrix" year="2017" />
            <MovieListItem title="Lord of the Rings" year="2008" />
        </ul>
        </>
    )
}