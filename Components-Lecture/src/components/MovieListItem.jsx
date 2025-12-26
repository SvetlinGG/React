

export default function MovieListItem(props){
    console.log(props);
    
    return (
        <li style={{fontWeight: 'bold', color: 'blue'}}>{props.title} - {props.year}</li>
    )
}