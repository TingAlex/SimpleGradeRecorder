import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Recorder from "./components/Recorder";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Recorder />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
