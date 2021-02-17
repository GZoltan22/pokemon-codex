import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
