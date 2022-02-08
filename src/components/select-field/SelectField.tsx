import React from 'react'
import { SelectFieldProps } from './SelectField.interface'

import './SelectField.scss'


function SelectField(props: SelectFieldProps) {
    return (
        <div id="SelectField" className={props.className}>
            <select
                style       = {props.inputStyle}
                className   = {`form-control ${props.inputClass} ${props.error && 'is-invalid'}`}
                placeholder = {props.placeholder}
                name        = {props.name}
                value       = {props.value}
                onChange    = {props.onChange}
                onBlur      = {props.onBlur}
                disabled    = {props.disabled}
            >
                <option disabled={props.disabledNone} value={''}>-- None --</option>
                {(props.options||[]).map((option,idx)=><option key={idx} value={option.value}>{option.label}</option>)}
            </select>
            {<div className="error-label">{props.error && props.error}</div>}
        </div>
    )
}

export default SelectField

