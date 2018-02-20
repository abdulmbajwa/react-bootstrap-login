import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {actionCreators} from '../../store/UserAuthentication';
import {bindActionCreators} from "redux";
import toastr from "toastr"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: {},
            username: "",
            password: "",
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    onFocus = e => {
        const name = e.target.name;
        this.setState({focus: {[name]: true}});
    };
    onBlur = e => {
        const name = e.target.name;
        this.setState({focus: {[name]: false}});
    };
    onSubmit = async (e) =>{
        e.preventDefault();
        try {
            await this.props.actions.loginUser(this.state);
            this.props.history.push("/dashboard");
        }
        catch (error) {
            if(error.response){
                const data = error.response.data.error_description;
                toastr.error(data);
            }
            else{
                toastr.error(error);
            }
        }
    };

    render() {
        return (
            <div className="page login-page">
                <div className="container d-flex align-items-center">
                    <div className="form-holder has-shadow">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="info d-flex align-items-center">
                                    <div className="content">
                                        <div className="logo">
                                            <h1>Dashboard</h1>
                                        </div>
                                        <p>DashbLorem ipsum dolor sit amet, consectetur adipisicing elit.oard</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 bg-white">
                                <div className="form d-flex align-items-center">
                                    <div className="content">
                                        <form id="login-form" onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <input id="login-username"
                                                       type="text"
                                                       name="username"
                                                       onChange={this.onChange}
                                                       onFocus={this.onFocus}
                                                       onBlur={this.onBlur}
                                                       required=""
                                                       className="input-material"/>
                                                <label
                                                    className={classnames("label-material", {"active": this.state.focus.username || this.state.username !== ""})}>
                                                    User Name
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <input id="login-password"
                                                       type="password"
                                                       name="password"
                                                       required=""
                                                       className="input-material"
                                                       onChange={this.onChange}
                                                       onFocus={this.onFocus}
                                                       onBlur={this.onBlur}/>
                                                <label
                                                    className={classnames("label-material", {"active": this.state.focus.password || this.state.password !== ""})}>
                                                    Password
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </form>
                                        <a href="#" className="forgot-pass">Forgot Password?</a>
                                        <br/>
                                        <small>Do not have an account?</small>
                                        <a href="register.html" className="signup">Signup</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrights text-center">
                    <p>Design by <a href="https://bootstrapious.com/admin-templates"
                                    className="external">Bootstrapious</a></p>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};
const setStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);
