import { FormikErrors } from "formik";
import React from "react";
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClass?: string;
    inputStyle?: React.CSSProperties;
    name: string;
    error?: string | false | string[] | FormikErrors<any> | FormikErrors<any>[];
}
