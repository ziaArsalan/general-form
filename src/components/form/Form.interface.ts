import { SelectFieldProps } from '../select-field/SelectField.interface'
import { InputFieldProps } from '../input-field/InputField.interface';

type unknowobject = {[key: string]: any}

export type category = 'label' | 'select' | 'input'

export type labelParameters = {
    innerText : string,
}

type parameterMap = {
    label  : labelParameters,
    input  : InputFieldProps,
    select : SelectFieldProps
}

export type element<T extends category> = {
    category   : category
    className? : string
    style?     : React.CSSProperties
    parameters : parameterMap[T]
}

type submitBtn = {
    className? : string
    style?     : React.CSSProperties
    text       : string
}

export type FormProps = {
    initState       : unknowobject
    schema          : unknown
    Submit          : (form: unknowobject) => void | Promise<any>
    isInitialValid? : boolean,
    handleSubmit?   : (form: unknowobject) => unknowobject | Promise<any>,
    formClass?      : string,
    formStyle?      : React.CSSProperties,
    elements        : element<category>[],
    submitBtn       : submitBtn
}

