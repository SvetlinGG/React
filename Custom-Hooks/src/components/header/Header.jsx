import { useContext } from "react";
import { UserContext} from '../../contexts/UserContext'

export default function Header(){

    const {user} = useContext(UserContext)

    return (
        <div>Header Navigation link 1 | link 2 | link 3 <span>{user ? user.email : 'please login'}</span></div>
    );

}