import React from "react";

export interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?   : string
    buttonClass? : string
    buttonStyle? : React.CSSProperties
    btnText      : string
    loading?     : boolean
}