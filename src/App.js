import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Panda</Link>
        <Link to="/gif/mapache">Mapache</Link>
        <Link to="/gif/gato">Gato</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword" 
        />
      </section>
    </div>
  );
}

export default App;
