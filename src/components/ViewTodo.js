import React from "react";
import { connect } from "react-redux";
import { getTodo } from "../api";

class ViewTodo extends React.Component {
  list = todo =>
    Object.keys(todo).map(key => (
      <li key={key}>
        <div>{key}:</div>
        <div>{todo[key]}</div>
      </li>
    ));

  render() {
    const { todo } = this.props;
    return <div>{todo ? this.list(todo) : <h2> Loading... </h2>}</div>;
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    todo: getTodo(store.todos.todos, ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(ViewTodo);
