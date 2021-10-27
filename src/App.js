import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import LoginComponent from "./components/LoginComponent";
import Signup from "./components/Signup";
import Alert from "./components/Alert";

function App() {
  return (
    <NoteState>
      <Router>
        <div>
          <Navbar />
          <div className=" alertedit">
          <Alert/>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Login">
              <LoginComponent/>
            </Route>
            <Route exact path="/SignUp">
              <Signup/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
