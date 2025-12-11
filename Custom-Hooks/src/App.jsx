import CharacterList from './components/use-fetch/CharacterList'
import './App.css'
import Login from './components/login-demo/Login'
import Header from './components/header/Header'
import ControlledLogin from './components/controlled-login-demo/ControlledLogin'
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';

function App() {

  const [user, setUser] = useState(null);

  const loginHandler = (email, password ) => {
    setUser({
      email,
      password,

    })
  }
  

  return (
    <UserContext.Provider value={{user, loginHandler}}>
     <h1>React Hooks</h1>
     <Header />
     <hr />

     <CharacterList />
     <hr />
     <Login />
     <hr />
     <ControlledLogin />
    </UserContext.Provider>
  )
}

export default App
