import MovieListItem from "./MovieListItem";




export default function MovieList(){
    

    return (
        <>
        <h2>Movie List</h2>

        <ul>
            <MovieListItem title="Iron man" year='2020' />
            <MovieListItem title="The Matrix" year='1999'/>
            <MovieListItem title="Star Wars" year='1986' />
        </ul>
        </>
    )
}