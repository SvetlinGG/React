import AdvancedCounter from "./AdvancedCounter"
import Children from "./Children"
import Component from "./Component"
import Counter from "./Counter"
import MovieList from "./MovieList"
import Timer from "./Timer"

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

      <hr />
      <Timer />

      <hr />

      <Counter />

      <hr />
      <AdvancedCounter />
    </main>
  )
}

export default App
