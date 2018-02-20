import isEmpty from 'lodash/isEmpty';
const validator = require('validator');

export function validateInput(data) {
    let errors = {};
    if ((data.selectedProduct)) {
        errors.name = 'This field is required';
    }
    if (data.quantity <= 0) {
        errors.quantity = 'Quantity should be greater than 0';
    }
    if (data.purchasePrice <= 0) {
        errors.purchasePrice = 'Price should be greater than 0';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}