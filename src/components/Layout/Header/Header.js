import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {actionCreators} from "../../../store/UserAuthentication";
import {bindActionCreators} from "redux";
import {Link, withRouter} from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    const logoutUser = ()=>{
      props.actions.logoutUser();
      props.history.push("/login");
    };
    return (
        <header className="header">
            <nav className="navbar">
                <div className="search-box">
                    <button className="dismiss">
                        <i className="icon-close"/>
                    </button>
                    <form id="searchForm" action="" role="search">
                        <input type="search" placeholder="What are you looking for..." className="form-control"/>
                    </form>
                </div>
                <div className="container-fluid">
                    <div className="navbar-holder d-flex align-items-center justify-content-between">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">
                                <div className="brand-text brand-big"><span>BootStrap</span><strong> Dashboard</strong>
                                </div>
                                <div className="brand-text brand-small"><strong>BD</strong></div>
                            </Link>
                            <a id="toggle-btn" href="" className="menu-btn active"><span/><span/><span/></a>
                        </div>
                        <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                            <li className="nav-item d-flex align-items-center"><a id="search" href=""><i
                                className="icon-search"/></a></li>
                            <li className="nav-item dropdown"><a id="notifications" rel="nofollow" data-target=""
                                                                 href="" data-toggle="dropdown" aria-haspopup="true"
                                                                 aria-expanded="false" className="nav-link"><i
                                className="fa fa-bell-o"/><span className="badge bg-red">12</span></a>
                                <ul aria-labelledby="notifications" className="dropdown-menu">
                                    <li><a rel="nofollow" href="" className="dropdown-item">
                                        <div className="notification">
                                            <div className="notification-content"><i
                                                className="fa fa-envelope bg-green"/>You have 6 new messages
                                            </div>
                                            <div className="notification-time">
                                                <small>4 minutes ago</small>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="" className="dropdown-item">
                                        <div className="notification">
                                            <div className="notification-content"><i className="fa fa-twitter bg-blue"/>You
                                                have 2 followers
                                            </div>
                                            <div className="notification-time">
                                                <small>4 minutes ago</small>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="" className="dropdown-item">
                                        <div className="notification">
                                            <div className="notification-content"><i
                                                className="fa fa-upload bg-orange"/>Server Rebooted
                                            </div>
                                            <div className="notification-time">
                                                <small>4 minutes ago</small>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="" className="dropdown-item">
                                        <div className="notification">
                                            <div className="notification-content"><i className="fa fa-twitter bg-blue"/>You
                                                have 2 followers
                                            </div>
                                            <div className="notification-time">
                                                <small>10 minutes ago</small>
                                            </div>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href=""
                                           className="dropdown-item all-notifications text-center"> <strong>view all
                                        notifications </strong></a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a id="messages" rel="nofollow" data-target="" href=""
                                                                 data-toggle="dropdown" aria-haspopup="true"
                                                                 aria-expanded="false" className="nav-link">
                                <i className="fa fa-envelope-o"/>
                                <span className="badge bg-orange">10</span></a>
                                <ul aria-labelledby="notifications" className="dropdown-menu">
                                    <li><a rel="nofollow" href="" className="dropdown-item d-flex">
                                        <div className="msg-profile"><img src="img/avatar-1.jpg" alt="..."
                                                                          className="img-fluid rounded-circle"/></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Jason Doe</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="" className="dropdown-item d-flex">
                                        <div className="msg-profile"><img src="img/avatar-2.jpg" alt="..."
                                                                          className="img-fluid rounded-circle"/></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Frank Williams</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href="" className="dropdown-item d-flex">
                                        <div className="msg-profile"><img src="img/avatar-3.jpg" alt="..."
                                                                          className="img-fluid rounded-circle"/></div>
                                        <div className="msg-body">
                                            <h3 className="h5">Ashley Wood</h3><span>Sent You Message</span>
                                        </div>
                                    </a></li>
                                    <li><a rel="nofollow" href=""
                                           className="dropdown-item all-notifications text-center"> <strong>Read all
                                        messages </strong></a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a onClick={logoutUser} className="nav-link logout icon-hand">
                                    Logout
                                    <i className="fa fa-sign-out"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {};
Header.defaultProps = {};
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)});
export default withRouter(connect(null, mapDispatchToProps)(Header));
