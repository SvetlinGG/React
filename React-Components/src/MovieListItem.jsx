

export default function MovieListItem(props){
    console.log(props);
    
    return (
        <li style={{fontWeight: 'bold', color: 'red', border: '2px solid blue'}}>{props.title} - ({props.year})</li>
    )
}