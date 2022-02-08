import { FormikErrors } from "formik";
import React from "react";

export type option = {
    label  : string
    value? : string | number
}

export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className     : string
    inputClass    : string
    name          : string
    inputStyle    : React.CSSProperties
    options       : option[]
    disabledNone? : boolean
    error?        : string | false | string[] | FormikErrors<any> | FormikErrors<any>[]
}
