import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Profile from "./components/Profile";
import GamingBar from "./components/GamingBar";
import GameCard from "./components/GameCard";

function App() {
  const [game, setGame] = useState("");
  return (
    <div className="App">
      <Router>
        <nav className="nav-bar">
          <Link to="/">Queue Requests</Link>
          <Link to="/me">Profile</Link>
          <Link to="/posts">QoTd</Link>
          <Link to="/inbox">Messages</Link>
        </nav>
        <Profile />
        <GamingBar setGame={setGame} />
        <GameCard />
        {game === "" ? null : <GameCard />}
      </Router>
    </div>
  );
}

export default App;
