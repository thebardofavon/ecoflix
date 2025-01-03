import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;
