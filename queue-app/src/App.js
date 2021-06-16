import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import GamingBar from "./components/GamingBar";
import GameCard from "./components/GameCard";
import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";

function App() {
  const [game, setGame] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/me" component={Profile}>
            <Nav />
            <Profile />
            <GameCard />
            {game === "" ? null : <GameCard />}
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/home" component={Home}>
            <Nav />
            <GamingBar setGame={setGame} />
          </Route>
          <Route path="/" component={Landing}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
