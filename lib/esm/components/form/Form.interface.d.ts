/// <reference types="react" />
import { SelectFieldProps } from '../select-field/SelectField.interface';
import { InputFieldProps } from '../input-field/InputField.interface';
declare type unknowobject = {
    [key: string]: any;
};
export declare type category = 'label' | 'select' | 'input';
export declare type labelParameters = {
    innerText: string;
};
declare type parameterMap = {
    label: labelParameters;
    input: InputFieldProps;
    select: SelectFieldProps;
};
export declare type element<T extends category> = {
    category: category;
    className?: string;
    style?: React.CSSProperties;
    parameters: parameterMap[T];
};
declare type submitBtn = {
    className?: string;
    style?: React.CSSProperties;
    text: string;
};
export declare type FormProps = {
    initState: unknowobject;
    schema: unknown;
    Submit: (form: unknowobject) => void | Promise<any>;
    isInitialValid?: boolean;
    formClass?: string;
    formStyle?: React.CSSProperties;
    elements: element<category>[];
    submitBtn: submitBtn;
};
export {};
