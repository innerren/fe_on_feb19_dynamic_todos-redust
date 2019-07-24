import React from "react";
import { connect } from "react-redux";
import { getUser } from "../api";

class ViewUser extends React.Component {
  subData = dataList => {
    return Object.keys(dataList).map(key => (
      <li key={key}>
        <div>{key}:</div>
        {typeof dataList[key] === "object" ? (
          <ul>{this.subData(dataList[key])}</ul>
        ) : (
          <div>{dataList[key]}</div>
        )}
      </li>
    ));
  };

  render() {
    const { user } = this.props;
    return (
      <ul className="todo-list">
        {user ? this.subData(user) : <h2> Loading... </h2>}
      </ul>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    user: getUser(store.users.users, ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(ViewUser);
