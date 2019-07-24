import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsers, startLoading, finishLoading } from "./actions/pageActions";
import { getUsers, getUser } from "./api";
import "./App.css";

class App extends Component {
  render() {
    const {
      users,
      payload,
      todos,
      setUsers,
      startLoading,
      finishLoading,
    } = this.props;
    console.log(users);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dinamic todo List</h1>
          <button
            onClick={async() => {
              startLoading();
              const users = await getUsers();
              finishLoading();
              console.log(payload);
              setUsers(users);
            }}
          >
            Add Users
          </button>
          {payload ? (
            <h2>Loading...</h2>
          ) : (
            <h2>{console.log(getUser(users, 5))}</h2>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    users: store.users.users,
    todos: store.todos.todos,
    payload: store.general.payload,
  };
};

const mapDispatch = { setUsers, startLoading, finishLoading };
export default connect(
  mapStateToProps,
  mapDispatch
)(App);
