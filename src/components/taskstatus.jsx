import React from "react";
class Taskstatus extends React.Component {
  render() {
    return (
      <div class="product-tab-list tab-pane ">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="review-content-section">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="devit-card-custom">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Pro</th>
                          <th>Tsk</th>
                          <th>Start</th>
                          <th>End</th>
                          <th>Diff</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mamun</td>
                          <td>Roshid</td>
                          <td>@Facebook</td>
                          <td>Roshid</td>
                          <td>@Facebook</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Suhag</td>
                          <td>Khan</td>
                          <td>@Twitter</td>
                          <td>Roshid</td>
                          <td>@Facebook</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Sakil</td>
                          <td>Shak</td>
                          <td>@Linkedin</td>
                          <td>Roshid</td>
                          <td>@Facebook</td>
                        </tr>
                      </tbody>
                    </table>
                    <a
                      href="#"
                      class="btn btn-primary waves-effect waves-light"
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

export default Taskstatus;
