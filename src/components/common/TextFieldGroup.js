import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({field, value, label, placeholder, error, type, onChange, onBlur, isRequired}) => {
    return (
        <div className={classnames('form-group', {'has-error': error})}>
            <label className="form-control-label">
                {label}
                {isRequired === true && <span className="text-danger">*</span>}
            </label>
            <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                type={type}
                name={field}
                placeholder={placeholder}
                className="form-control"
            />
            {error && <span className="help-block">{error}</span>}
        </div>  );
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
    type: 'text'
};

export default TextFieldGroup;