import GameListItem from '../src/GameListItem'
export default function GameList(){

    return (
        <>
        <h1>Game List</h1>
        <hr />
        <ul>
            <GameListItem title="Need For Speed" src="/public/1311158.jpeg" />
            <GameListItem title="Game Of Thrones" src="/public/OIP.jpeg" />
            <GameListItem title="War Kraft" src="/public/world-of-warcraft-1920x1080-d2oib3m87tnra9oo.jpg" />
        </ul>
        </>
    )
}