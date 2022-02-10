import React from 'react';
import './InputField.scss';
function InputField(props) {
    return (React.createElement("div", { id: "InputField", className: props.className },
        React.createElement("input", { type: props.type, style: props.inputStyle, className: "form-control custom-border ".concat(props.inputClass, " ").concat(props.error && 'is-invalid'), placeholder: props.placeholder, name: props.name, value: props.value, onChange: props.onChange, onBlur: props.onBlur, readOnly: props.readOnly, max: props.max, min: props.min }),
        React.createElement("div", { className: "error-label" }, props.error && props.error)));
}
export default InputField;
