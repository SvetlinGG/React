export default function MovieListItem({
    title, 
    year,
}){

    return (
        <li style={{fontWeight: 'bold'}}>{title} - ({year})</li>
    )
}