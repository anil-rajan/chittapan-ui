import React from "react";

function Project() {
  return (
    <div class="single-pro-review-area mt-t-30 mg-b-15">
      <div class="container-fluid givespace-top">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="product-payment-inner-st">
              <ul id="myTabedu1" class="tab-review-design">
                <li class="active">
                  <a href="#description">PManager</a>
                </li>
                <li>
                  <a href="#reviews"> PStatus</a>
                </li>
              </ul>
              <div id="myTabContent" class="tab-content custom-product-edit">
                <div
                  class="product-tab-list tab-pane fade active in"
                  id="description"
                >
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div class="review-content-section">
                        <div id="dropzone1" class="pro-ad addcoursepro">
                          <form action="/upload">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group res-mg-t-15">
                                  <input
                                    name="department"
                                    type="text"
                                    class="form-control"
                                    placeholder="Pt"
                                  />
                                </div>

                                <div class="form-group">
                                  <textarea
                                    name="description"
                                    placeholder=" Description"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="payment-adress">
                                  <button
                                    type="submit"
                                    class="btn btn-primary waves-effect waves-light pull-left"
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
                <div class="product-tab-list tab-pane fade" id="reviews">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
