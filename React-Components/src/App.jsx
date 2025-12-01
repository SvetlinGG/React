import Children from "./Children"
import Component from "./Component"
import MovieList from "./MovieList"

function App() {
 

  return (
    <main>
      <Component />
      <hr />
      <MovieList />

      <hr />

      <Children>
        <p>Some text here.</p>
        <p>Some text here.</p>
        <p>Some text here.</p>
      </Children>
    </main>
  )
}

export default App
