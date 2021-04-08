import "./App.css";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import League from "./Components/League/League";
import NotMatch from "./Components/NotMatch/NotMatch";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/league/:id">
            <League />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
