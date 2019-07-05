import React from "react";
class Taskmanager extends React.Component {
  render() {
    return (
      <div
        className="product-tab-list tab-pane fade active in"
        id="description"
      >
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="review-content-section">
              <div id="dropzone1" className="pro-ad addcoursepro">
                <form action="/upload">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group res-mg-t-15">
                        <div className="form-select-list">
                          <select
                            className="form-control custom-select-value"
                            name="account"
                          >
                            <option>Patient 1</option>
                            <option>Patient 2</option>
                            <option>Patient 3</option>
                            <option>Patient 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group res-mg-t-15">
                        <input
                          name="department"
                          type="text"
                          className="form-control"
                          placeholder="Task"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="description"
                          placeholder="Task Description"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="payment-adress">
                        <button
                          type="submit"
                          className="btn btn-primary waves-effect waves-light pull-left"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Taskmanager;
