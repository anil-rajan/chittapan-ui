import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Task from "./components/task";
import Project from "./components/project";
import List from "./components/list";
import Print from "./components/print";
import Lock from "./components/lock";
import Login from "./components/login";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div class="all-content-wrapper11">
        <Router>
          <Route path="/login" component={Login} />{" "}
          <Route path="/lock" component={Lock} /> <Header />
          <Route path="/" exact component={Task} />{" "}
          <Route path="/taskmanager" exact component={Task} />{" "}
          <Route path="/taskstatus" exact component={Task} />{" "}
          <Route path="/projectadd" exact component={Project} />{" "}
          <Route path="/projectlist" exact component={Project} />{" "}
          <Route path="/list" exact component={List} />{" "}
          <Route path="/print" exact component={Print} /> <Footer />
        </Router>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
