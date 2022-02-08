import React from 'react'

import { ButtonPrimaryProps } from './ButtonPrimary.interface'

import './ButtonPrimary.scss'

function ButtonPrimary(props: ButtonPrimaryProps) {
    return (
        <div id="ButtonPrimary" className={props.className}>
            <button 
                className = {`${props.buttonClass} btn btn-primary w-100`}
                style     = {props.buttonStyle}
                type      = {props.type || 'button'}
                disabled  = {props.disabled}
                onClick   = {props.onClick}
            >
                {props.loading && <span className="spinner-border custom-border"></span>}
                {!props.loading && <span>{props.btnText}</span>}
            </button>
        </div>
    )
}

export default ButtonPrimary

