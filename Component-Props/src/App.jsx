
import './App.css'
import MovieListItemEffect from '../use-effect-demo/MovieListItemEffect'
import MovieListEffect from '../use-effect-demo/MovieListEffect'
import Gallery from './key-press-demo/Gallery'

function App() {
  

  return (
    <main>
    <MovieListEffect />
    <hr />
    
    <MovieListItemEffect />

    <hr />

    <Gallery />
    </main>
  )
}

export default App
