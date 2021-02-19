import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Pokemons from "./components/pages/Pokemons";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemons" component={Pokemons} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
