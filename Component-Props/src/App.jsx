
import './App.css'
import MovieListItemEffect from '../use-effect-demo/MovieListItemEffect'
import MovieListEffect from '../use-effect-demo/MovieListEffect'
import Gallery from './key-press-demo/Gallery'
import CharacterList from './fetch-demo/CharacterList'

function App() {
  

  return (
    <main>
    <MovieListEffect />
    <hr />
    
    <MovieListItemEffect />

    <hr />

    <Gallery />

    <hr />

    <CharacterList />
    </main>
  )
}

export default App
