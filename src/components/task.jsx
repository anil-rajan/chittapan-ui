import React from "react";
import Taskmanager from "./taskmanager";
import Taskstatus from "./taskstatus";
import { Route, Link, NavLink } from "react-router-dom";

function Task() {
  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid givespace-top">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li>
                  <NavLink to="/taskmanager" activeClassName="current">
                    Task Manager
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/taskstatus" activeClassName="current">
                    Task Status
                  </NavLink>
                </li>
              </ul>
              <div className="tab-content custom-product-edit">
                <Route path="/" exact component={Taskmanager} />
                <Route path="/taskmanager" component={Taskmanager} />
                <Route path="/taskstatus" component={Taskstatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
