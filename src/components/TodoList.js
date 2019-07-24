import React from "react";
import { connect } from "react-redux";
import Filters from "./Filters";
import { getUserTodos, getUsers } from "../api";
import { setUsers, startLoading } from "../actions/pageActions";
import { Link } from "react-router-dom";

class TodoList extends React.Component {
  render() {
    const { todos, users, setUsers, startLoading } = this.props;
    return (
      <div>
        <Filters />
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                className="toggle"
              />
              <label>
                <Link
                  className="link"
                  onClick={async() => {
                    console.log(`LOAD USER Users`);
                    startLoading("Loading Todos");
                    const newUsers = users ? await getUsers() : users;
                    setUsers(newUsers);
                  }}
                  to={`/User/${todo.userId}`}
                >
                  {todo.username}
                </Link>
                {todo.title}
              </label>
              <div className="but">
                <Link to={`/Todo/${todo.id}`} className="button">
                  Load Todo
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  //console.log(ownProps.match.params.id);
  //console.log(getUserTodos(store.filters.filtred, ownProps.match.params.id));
  return {
    todos: getUserTodos(store.filters.filtred, ownProps.match.params.id),
    users: store.users.users,
  };
};

const mapDispatch = {
  setUsers,
  startLoading,
};

export default connect(
  mapStateToProps,
  mapDispatch
)(TodoList);
