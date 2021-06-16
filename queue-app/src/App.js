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

function App() {
  const [game, setGame] = useState("");
  return (
    <div className="App">
      <Landing />
      <SignUp />
      <LogIn />
      <Router>
        <nav className="nav-bar">
          <Link to="/me">Profile</Link>
          <Link to="/">Home</Link>
          <Link to="/inbox">Inbox</Link>
        </nav>
        <Switch>
          <Route path="/" component={Home}>
            <GamingBar setGame={setGame} />
          </Route>
          <Route path="/me" component={Profile}>
            <Profile />
            <GameCard />
            {game === "" ? null : <GameCard />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
