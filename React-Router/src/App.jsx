import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"




function App() {
  

  return (
    
    <div className="bg-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     </div>
     
  )
}

export default App
