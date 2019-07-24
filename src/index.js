import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { store } from "./store/configureStore";
import "./index.css";
import App from "./App";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import ViewUser from "./components/ViewUser";
import ViewTodo from "./components/ViewTodo";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/UserList" component={UserList} />
          <Route exact path="/TodoList" component={TodoList} />
          <Route path="/TodoList/:id" component={TodoList} />
          <Route path="/User/:id" component={ViewUser} />
          <Route path="/Todo/:id" component={ViewTodo} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
