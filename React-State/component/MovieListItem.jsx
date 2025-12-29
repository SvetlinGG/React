
export default function MovieListItem({
    title,
    year,
}){
   
    
    return (
        <li style={{fontWeight: 'bold', color: 'red', border: '2px solid blue'}}>{title} - ({year})</li>
    )
}