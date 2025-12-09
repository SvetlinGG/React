
export default function Header({
    user,
}){

    return (
        <div>Header Navigation link 1 | link 2 | link 3 <span>{user ? user.email : 'please login'}</span></div>
    );

}