import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CalendarApp } from "./CalendarApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </Provider>
  //</React.StrictMode>
);
