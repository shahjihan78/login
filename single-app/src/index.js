import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import HashRouter from "react-router-dom/HashRouter";
import Switch from "react-router-dom/Switch";
import ReactDOM from "react-dom";

//view page
import Login from "./login/Login";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" name="Login Page" component={Login}/>
      console.log("test");
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);


