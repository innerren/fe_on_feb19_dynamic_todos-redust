import React from "react";
import { connect } from "react-redux";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import {
  startLoading,
  finishLoading,
  setTodos,
  applyFilter,
  setFilters,
} from "../actions/pageActions";
import { getFullTodos } from "../api";

class UserList extends React.Component {
  render() {
    const {
      users,
      todos,
      setTodos,
      startLoading,
      applyFilter,
      setFilters,
    } = this.props;

    return (
      <div>
        <Filters />
        <ul className="todo-list">
          {users.map(user => (
            <li className="" key={user.id}>
              <Link to={`/User/${user.id}`} className="link">
                {user.username}
              </Link>
              <div>
                <Link
                  className="button , loadTodo"
                  onClick={async() => {
                    console.log(`LOAD USER TODOS`);
                    startLoading("Loading Todos");
                    const newTodos = todos ? await getFullTodos() : todos;
                    setTodos(newTodos);
                    setFilters(["completed", "title"]);
                    applyFilter(newTodos);
                  }}
                  to={`/TodoList/${user.id}`}
                >
                  Load User Todos
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.filters.filtred,
    todos: store.todos.todos,
  };
};
const mapDispatch = {
  startLoading,
  finishLoading,
  setTodos,
  applyFilter,
  setFilters,
};

export default connect(
  mapStateToProps,
  mapDispatch
)(UserList);
