import React from 'react';
import './ButtonPrimary.scss';
function ButtonPrimary(props) {
    return (React.createElement("div", { id: "ButtonPrimary", className: props.className },
        React.createElement("button", { className: "".concat(props.buttonClass, " btn btn-primary w-100"), style: props.buttonStyle, type: props.type || 'button', disabled: props.disabled, onClick: props.onClick },
            props.loading && React.createElement("span", { className: "spinner-border custom-border" }),
            !props.loading && React.createElement("span", null, props.btnText))));
}
export default ButtonPrimary;
