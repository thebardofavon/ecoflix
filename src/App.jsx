import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./components/Login"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
