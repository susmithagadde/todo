import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";
import TodoResults from "./Components/TodoResults";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" strict exact component={TodoList} />
        <Route path="/results" component={TodoResults} />
      </div>
    </Router>
  );
}

export default App;
