import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setUsers,
  startLoading,
  finishLoading,
  setTodos,
  applyFilter,
  setFilters,
} from "../actions/pageActions";
import { getUsers, getFullTodos } from "../api";

import "../App.css";

const Header = ({
  setUsers,
  setTodos,
  startLoading,
  finishLoading,
  applyFilter,
  setFilters,
}) => (
  <header className="header">
    <h1>todos App</h1>

    <Link
      className="button bigger"
      to="/UserList"
      onClick={async() => {
        startLoading("Loading Users");
        const users = await getUsers();
        setUsers(users);
        setFilters(["id", "username"]);
        applyFilter(users);
        finishLoading("UserList");
      }}
    >
      List Users
    </Link>
    <Link
      className="button bigger"
      to="/TodoList"
      onClick={async() => {
        startLoading("Loading Todos");
        const todos = await getFullTodos();
        setTodos(todos);
        setFilters(["completed", "username", "title"]);
        applyFilter(todos);
        finishLoading("TodoList");
      }}
    >
      List Todos
    </Link>
  </header>
);

const mapDispatch = {
  setUsers,
  startLoading,
  finishLoading,
  setTodos,
  applyFilter,
  setFilters,
};
export default connect(
  null,
  mapDispatch
)(Header);
