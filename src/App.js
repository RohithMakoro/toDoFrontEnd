import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h5>TodoApp</h5>
            <div className="nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">ViewTodos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CreateTodo</Link>
                </li>
              </ul>
            </div>

          </nav>
          <Route path="/" component={TodosList} exact />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
