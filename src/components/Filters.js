import React from "react";
import { connect } from "react-redux";
import { applyFilter } from "../actions/pageActions";

const Filters = ({ filters, filtred, applyFilter }) => {
  return (
    <ul className="filters">
      {filters.map(filter => (
        <li key={filter.id}>
          <div
            onClick={() => {
              applyFilter(filtred, filter);
            }}
          >
            <span className="radio-text">{filter.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = store => {
  return {
    filters: store.filters.filters,
    filtred:
      store.general.view === "UserList" ? store.users.users : store.todos.todos,
  };
};

const mapDispatch = { applyFilter };

export default connect(
  mapStateToProps,
  mapDispatch
)(Filters);
