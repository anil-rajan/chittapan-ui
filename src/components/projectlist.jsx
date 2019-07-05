import React from "react";
class projectlist extends React.Component {
  render() {
    return (
      <div className="product-tab-list tab-pane ">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="review-content-section">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="devit-card-custom">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>

                          <th>Pro</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mamun</td>
                          <td>Roshid</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Suhag</td>
                          <td>Khan</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sakil</td>
                          <td>Shak</td>
                        </tr>
                      </tbody>
                    </table>
                    <a
                      href="#"
                      className="btn btn-primary waves-effect waves-light"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default projectlist;
