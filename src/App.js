import React, { Fragment } from "react";
import { connect } from "react-redux";

import "./App.css";

import Header from "./components/Header";

const App = ({ children }) => (
  <Fragment>
    <section className="todoapp">
      <Header />
      <section className="main">{children}</section>
    </section>
  </Fragment>
);

export default connect()(App);
