import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if (this.props.isAuthenticated === false) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (this.props.isAuthenticated === false) {
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
    };

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    };

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.userAuthentication.isAuthenticated
        };
    }

    return connect(mapStateToProps, null)(Authenticate);
}