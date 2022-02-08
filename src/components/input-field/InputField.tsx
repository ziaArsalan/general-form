import React from 'react'
import { InputFieldProps } from './InputField.interface'
import PropTypes from 'prop-types'

import './InputField.scss'

function InputField(props : InputFieldProps) {
    return (
        <div id="InputField" className={props.className}>
            <input 
                type        = {props.type}
                style       = {props.inputStyle}
                className   = {`form-control custom-border ${props.inputClass} ${props.error && 'is-invalid'}`}
                placeholder = {props.placeholder}
                name        = {props.name}
                value       = {props.value}
                onChange    = {props.onChange}
                onBlur      = {props.onBlur}
                readOnly    = {props.readOnly}
                max         = {props.max}
                min         = {props.min}
            />
            {<div className="error-label">{props.error && props.error}</div>}
        </div>
    )
}


export default InputField

