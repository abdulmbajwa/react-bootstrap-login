import React from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.scss';
import userImage from "../../../assets/img/avatar-1.jpg";
import NavItem from "./NavItem";

export default props => (
    <nav className="side-navbar">
        <div className="sidebar-header d-flex align-items-center">
            <div className="avatar"><img src={userImage} alt="..." className="img-fluid rounded-circle"/></div>
            <div className="title">
                <h1 className="h4">Mark Stephen</h1>
                <p>Web Designer</p>
            </div>
        </div>
        <span className="heading">Main</span>
        <ul className="list-unstyled">
            <NavItem to={"/dashboard"} name={"Dashboard"} icon={<i className={"icon-home"}/>} activeClassName={"active"}/>
            <NavItem to={"/office/"} name={"Offices"} icon={<i className="material-icons md-24">store</i>} activeClassName={"active"}/>
            <NavItem to={"/purchase-order"} name={"Purchase Orders"} icon={<i className="material-icons">add_shopping_cart</i>} activeClassName={"active"}/>
            <li><a href=""> <i className="icon-grid"/>Tables </a></li>
            <li><a href=""> <i className="fa fa-bar-chart"/>Charts </a></li>
            <li><a href=""> <i className="icon-padnote"/>Forms </a></li>
            <li><a href="" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows"/>Example
                dropdown </a>
                <ul id="exampledropdownDropdown" className="collapse list-unstyled show">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                </ul>
            </li>
            <li><a href="login.html"> <i className="icon-interface-windows"/>Login page </a></li>
        </ul>
        <span className="heading">Extras</span>
        <ul className="list-unstyled">
            <li><a href="#"> <i className="icon-flask"/>Demo </a></li>
            <li><a href="#"> <i className="icon-screen"/>Demo </a></li>
            <li><a href="#"> <i className="icon-mail"/>Demo </a></li>
            <li><a href="#"> <i className="icon-picture"/>Demo </a></li>
        </ul>
    </nav>
);
