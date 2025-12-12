import Header from "./components/Header"
import Home from "./components/Home"




function App() {
  

  return (
    
    <div className="bg-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


     
     </div>
     
  )
}

export default App
