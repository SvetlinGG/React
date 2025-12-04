export default function MovieListItem(props){

    return (
        <li style={{fontWeight: 'bold', color: 'red', border: '2px solid blue'}}>{props.title} - ({props.year})</li>
    )
}