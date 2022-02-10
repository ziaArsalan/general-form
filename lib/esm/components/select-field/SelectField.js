import React from 'react';
import './SelectField.scss';
function SelectField(props) {
    return (React.createElement("div", { id: "SelectField", className: props.className },
        React.createElement("select", { style: props.inputStyle, className: "form-control ".concat(props.inputClass, " ").concat(props.error && 'is-invalid'), placeholder: props.placeholder, name: props.name, value: props.value, onChange: props.onChange, onBlur: props.onBlur, disabled: props.disabled },
            React.createElement("option", { disabled: props.disabledNone, value: '' }, "-- None --"),
            (props.options || []).map(function (option, idx) { return React.createElement("option", { key: idx, value: option.value }, option.label); })),
        React.createElement("div", { className: "error-label" }, props.error && props.error)));
}
export default SelectField;
