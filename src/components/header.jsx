import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Header() {
    return (
      <div>
         <div className="header-advance-area">
          <div className="header-top-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="header-top-wraper">
                    <div className="row">

                      <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                        <div className="header-top-menu tabl-d-n">
                          <ul className="nav navbar-nav mai-top-nav">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item"><Link to="/projectadd" className="nav-link">Patient</Link>
                            </li>
                            <li className="nav-item"><Link to="/print" className="nav-link">Report</Link>
                            </li>

                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="header-right-info">
                          <ul className="nav navbar-nav mai-top-nav header-right-menu">


                            <li className="nav-item">
                              <a href="#" data-toggle="dropdown" role="button"
                                aria-expanded="false" className="nav-link dropdown-toggle">
                                <img src="img/product/pro4.jpg" alt="" />
                                <span className="admin-name">Prof.Anderson</span>
                                <i className="fa fa-angle-down edu-icon edu-down-arrow"></i>
                              </a>
                              <ul role="menu"
                                className="dropdown-header-top author-log dropdown-menu  ">
                                <li><a href="#"><span
                                  className="edu-icon edu-home-admin author-log-ic"></span>My
                                                        Account</a>
                                </li>
                                <li><a href="#"><span
                                  className="edu-icon edu-user-rounded author-log-ic"></span>My
                                                        Profile</a>
                                </li>
                                <li><a href="#"><span
                                  className="edu-icon edu-money author-log-ic"></span>User
                                                        Billing</a>
                                </li>
                                <li><a href="#"><span
                                  className="edu-icon edu-settings author-log-ic"></span>Settings</a>
                                </li>
                                <li><a href="#"><span
                                  className="edu-icon edu-locked author-log-ic"></span>Log
                                                        Out</a>
                                </li>
                              </ul>
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="mobile-menu">
                    <nav id="dropdown">
                      <ul className="mobile-menu-nav">
                        <li><a data-toggle="collapse" data-target="#Charts" href="#">Home <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul className="collapse dropdown-header-top">
                            <li><a href="index.html">Dashboard v.1</a></li>
                            <li><a href="index-1.html">Dashboard v.2</a></li>
                            <li><a href="index-3.html">Dashboard v.3</a></li>
                            <li><a href="analytics.html">Analytics</a></li>
                            <li><a href="widgets.html">Widgets</a></li>
                          </ul>
                        </li>
                        <li><a href="events.html">Event</a></li>
                        <li><a data-toggle="collapse" data-target="#demoevent" href="#">Professors <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="demoevent" className="collapse dropdown-header-top">
                            <li><a href="all-professors.html">All Professors</a>
                            </li>
                            <li><a href="add-professor.html">Add Professor</a>
                            </li>
                            <li><a href="edit-professor.html">Edit Professor</a>
                            </li>
                            <li><a href="professor-profile.html">Professor Profile</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#demopro" href="#">Students <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="demopro" className="collapse dropdown-header-top">
                            <li><a href="all-students.html">All Students</a>
                            </li>
                            <li><a href="add-student.html">Add Student</a>
                            </li>
                            <li><a href="edit-student.html">Edit Student</a>
                            </li>
                            <li><a href="student-profile.html">Student Profile</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#democrou" href="#">Courses <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="democrou" className="collapse dropdown-header-top">
                            <li><a href="all-courses.html">All Courses</a>
                            </li>
                            <li><a href="add-course.html">Add Course</a>
                            </li>
                            <li><a href="edit-course.html">Edit Course</a>
                            </li>
                            <li><a href="course-profile.html">Courses Info</a>
                            </li>
                            <li><a href="course-payment.html">Courses Payment</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#demolibra" href="#">Library <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="demolibra" className="collapse dropdown-header-top">
                            <li><a href="library-assets.html">Library Assets</a>
                            </li>
                            <li><a href="add-library-assets.html">Add Library Asset</a>
                            </li>
                            <li><a href="edit-library-assets.html">Edit Library Asset</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#demodepart" href="#">Departments
                                        <span className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="demodepart" className="collapse dropdown-header-top">
                            <li><a href="departments.html">Departments List</a>
                            </li>
                            <li><a href="add-department.html">Add Departments</a>
                            </li>
                            <li><a href="edit-department.html">Edit Departments</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#demomi" href="#">Mailbox <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="demomi" className="collapse dropdown-header-top">
                            <li><a href="mailbox.html">Inbox</a>
                            </li>
                            <li><a href="mailbox-view.html">View Mail</a>
                            </li>
                            <li><a href="mailbox-compose.html">Compose Mail</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#Miscellaneousmob" href="#">Interface
                                        <span className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="Miscellaneousmob" className="collapse dropdown-header-top">
                            <li><a href="google-map.html">Google Map</a>
                            </li>
                            <li><a href="data-maps.html">Data Maps</a>
                            </li>
                            <li><a href="pdf-viewer.html">Pdf Viewer</a>
                            </li>
                            <li><a href="x-editable.html">X-Editable</a>
                            </li>
                            <li><a href="code-editor.html">Code Editor</a>
                            </li>
                            <li><a href="tree-view.html">Tree View</a>
                            </li>
                            <li><a href="preloader.html">Preloader</a>
                            </li>
                            <li><a href="images-cropper.html">Images Cropper</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#Chartsmob" href="#">Charts <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="Chartsmob" className="collapse dropdown-header-top">
                            <li><a href="bar-charts.html">Bar Charts</a>
                            </li>
                            <li><a href="line-charts.html">Line Charts</a>
                            </li>
                            <li><a href="area-charts.html">Area Charts</a>
                            </li>
                            <li><a href="rounded-chart.html">Rounded Charts</a>
                            </li>
                            <li><a href="c3.html">C3 Charts</a>
                            </li>
                            <li><a href="sparkline.html">Sparkline Charts</a>
                            </li>
                            <li><a href="peity.html">Peity Charts</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#Tablesmob" href="#">Tables <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="Tablesmob" className="collapse dropdown-header-top">
                            <li><a href="static-table.html">Static Table</a>
                            </li>
                            <li><a href="data-table.html">Data Table</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#formsmob" href="#">Forms <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="formsmob" className="collapse dropdown-header-top">
                            <li><a href="basic-form-element.html">Basic Form Elements</a>
                            </li>
                            <li><a href="advance-form-element.html">Advanced Form Elements</a>
                            </li>
                            <li><a href="password-meter.html">Password Meter</a>
                            </li>
                            <li><a href="multi-upload.html">Multi Upload</a>
                            </li>
                            <li><a href="tinymc.html">Text Editor</a>
                            </li>
                            <li><a href="dual-list-box.html">Dual List Box</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#Appviewsmob" href="#">App views
                                        <span className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="Appviewsmob" className="collapse dropdown-header-top">
                            <li><a href="basic-form-element.html">Basic Form Elements</a>
                            </li>
                            <li><a href="advance-form-element.html">Advanced Form Elements</a>
                            </li>
                            <li><a href="password-meter.html">Password Meter</a>
                            </li>
                            <li><a href="multi-upload.html">Multi Upload</a>
                            </li>
                            <li><a href="tinymc.html">Text Editor</a>
                            </li>
                            <li><a href="dual-list-box.html">Dual List Box</a>
                            </li>
                          </ul>
                        </li>
                        <li><a data-toggle="collapse" data-target="#Pagemob" href="#">Pages <span
                          className="admin-project-icon edu-icon edu-down-arrow"></span></a>
                          <ul id="Pagemob" className="collapse dropdown-header-top">
                            <li><a href="login.html">Login</a>
                            </li>
                            <li><a href="register.html">Register</a>
                            </li>
                            <li><a href="lock.html">Lock</a>
                            </li>
                            <li><a href="password-recovery.html">Password Recovery</a>
                            </li>
                            <li><a href="404.html">404 Page</a></li>
                            <li><a href="500.html">500 Page</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="breadcome-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="breadcome-list single-page-breadcome">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="breadcome-heading">
                          <form role="search" className="sr-input-func">
                            <input type="text" placeholder="Search..."
                              className="search-int form-control" />
                            <a href="#"><i className="fa fa-search"></i></a>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <ul className="breadcome-menu">
                          <li><a href="#">Home</a> <span className="bread-slash">/</span>
                          </li>
                          <li><span className="bread-blod">Add Courses</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      
      </div >
    );
  }
  
  export default Header;