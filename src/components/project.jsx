import React from "react";
import Projectadd from "./projectadd";
import Projectlist from "./projectlist";

import { Route, Link, NavLink } from "react-router-dom";

function Project() {
  return (
    <div className="single-pro-review-area mt-t-30 mg-b-15">
      <div className="container-fluid givespace-top">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="product-payment-inner-st">
              <ul id="myTabedu1" className="tab-review-design">
                <li>
                  <NavLink to="/projectadd" activeClassName="current">
                    PManager
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projectlist" activeClassName="current">
                    {" "}
                    PStatus
                  </NavLink>
                </li>
              </ul>

              <div
                id="myTabContent"
                className="tab-content custom-product-edit"
              >
                <Route path="/projectadd" component={Projectadd} />
                <Route path="/projectlist" component={Projectlist} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
