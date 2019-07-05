import React from "react";

function Lock() {
  return (
    <div className="error-pagewrap">
      <div className="error-page-int">
        <div className="hpanel">
          <div className="panel-body text-center lock-inner">
            <i className="fa fa-lock" aria-hidden="true" />
            <br />
            <h4>
              <span className="text-success">3:43:15 PM</span>{" "}
              <strong>Friday, February 27, 2015</strong>
            </h4>
            <p>
              Your are in lock screen. Main app was shut down and you need to
              enter your passwor to go back to app.
            </p>
            <form action="#" className="m-t">
              <div className="form-group">
                <input
                  type="password"
                  required=""
                  placeholder="******"
                  className="form-control"
                />
              </div>
              <button
                className="btn btn-primary block full-width"
                type="submit"
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
        <div className="text-center login-footer">
          <p>
            Copyright © 2018. All rights reserved. Template by{" "}
            <a href="https://colorlib.com/wp/templates/">Colorlib</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lock;
