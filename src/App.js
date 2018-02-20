import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Login from "./components/Login";
import {connect} from "react-redux";
import requireAuth from "./utils/requireAuth";

export default (props) => {
    return (
        <div>
            <Route exact path="/login" component={Login}/>
            <Layout>
                <Route path='/dashboard' component={requireAuth(Home)}/>
            </Layout>
        </div>

    );
}
