import React from 'react';
import NavMenu from './SideNav/NavMenu';
import Header from "./Header/Header";

export default props => (
    <div className="page">
       <Header/>
        <div className="page-content d-flex align-items-stretch">
            <NavMenu/>
            <div className="content-inner">
                {props.children}
                <footer className="main-footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Your company &copy; 2017-2019</p>
                            </div>
                            <div className="col-sm-6 text-right">
                                <p>Design by <a href="https://bootstrapious.com/admin-templates" className="external">Bootstrapious</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
);
