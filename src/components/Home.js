import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <header className="page-header">
            <div className="container-fluid">
                <h2 className="no-margin-bottom">Dashboard</h2>
            </div>
        </header>
        <section className="feeds">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="checklist card">
                            <div className="card-close">
                                <div className="dropdown">
                                    <button type="button" id="closeCard5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-ellipsis-v"></i></button>
                                    <div aria-labelledby="closeCard5" className="dropdown-menu dropdown-menu-right has-shadow"><a href="#" className="dropdown-item remove"> <i className="fa fa-times"></i>Close</a><a href="#" className="dropdown-item edit"> <i className="fa fa-gear"></i>Edit</a></div>
                                </div>
                            </div>
                            <div className="card-header d-flex align-items-center">
                                <h2 className="h3">To Do List </h2>
                            </div>
                            <div className="card-body no-padding">
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-1" name="input-1" className="checkbox-template"/>
                                        <label htmlFor="input-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-2" name="input-2" className="checkbox-template"/>
                                        <label htmlFor="input-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-3" name="input-3" className="checkbox-template"/>
                                        <label htmlFor="input-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-4" name="input-4" className="checkbox-template"/>
                                        <label htmlFor="input-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-5" name="input-5" className="checkbox-template"/>
                                        <label htmlFor="input-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                                <div className="item d-flex">
                                    <input type="checkbox" id="input-6" name="input-6" className="checkbox-template"/>
                                        <label htmlFor="input-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default connect()(Home);
