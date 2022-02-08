import { useFormik } from 'formik';
import React, { useState } from 'react';
import SelectField from '../select-field/SelectField';
import ButtonPrimary from '../button-primary/ButtonPrimary';
import InputField from '../input-field/InputField';
import { SelectFieldProps } from '../select-field/SelectField.interface'
import { InputFieldProps } from '../input-field/InputField.interface';

type unknowobject = {[key: string]: any}

type category = 'label' | 'select' | 'input'

interface inputParameters{
    inputClass  : string,
    inputStyle  : React.CSSProperties,
    name        : string,
    type        : string,
    placeholder : string,
    readonly    : boolean
}

type labelParameters = {
    innerText : string,
}

interface selecParameters extends inputParameters{
    options : {label: string, value: unknown}[]
}

type parameterMap = {
    label  : labelParameters,
    input  : InputFieldProps,
    select : SelectFieldProps
}


type element<T extends category> = {
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

type Props = {
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

function Form(props: Props) {

    const [state, setState] = useState({
        processing : false,
        error      : ''
    })

    const Submit = async () => {
        setState({processing: true, error: ''})
        const {error} = props.handleSubmit && await props.handleSubmit(formik.values)
        if(error) return setState({processing: false, error: error.message})
        setState({processing: false, error: ''})
    }

    const formik = useFormik({
        initialValues    : { ...props.initState },
        onSubmit         : props.Submit,
        validationSchema : props.schema,
        isInitialValid   : props.isInitialValid || false
    })

    return <div id="Form" className="container">
        <form className={`row ${props.formClass}`} style={props.formStyle} onSubmit={formik.handleSubmit}>
            {props.elements.map((element: element<category>, idx: number)=>(<>
                {element.category == 'label' && 
                <div
                    key       = {idx}
                    className = {`mt-7 mb-7 w-100 px-15 ${element.className}`}
                    style     = {element.style}
                >
                    {(element.parameters as labelParameters).innerText}
                </div>}
                {element.category === 'select' &&
                <SelectField 
                    key         = {idx}
                    className   = {`mt-7 mb-7 w-100 px-15 ${element.className}`}
                    inputClass  = {(element.parameters as SelectFieldProps).inputClass}
                    inputStyle  = {(element.parameters as SelectFieldProps).inputStyle}
                    placeholder = {(element.parameters as SelectFieldProps).placeholder}
                    name        = {(element.parameters as SelectFieldProps).name}
                    options     = {(element.parameters as SelectFieldProps).options}
                    value       = {formik.values[(element.parameters as SelectFieldProps).name]}
                    onChange    = {formik.handleChange}
                    onBlur      = {formik.handleBlur}
                    error       = {formik.touched[(element.parameters as SelectFieldProps).name] && formik.errors[(element.parameters as SelectFieldProps).name]}
                />}
                {element.category === 'input' &&
                <InputField
                    key         = {idx}
                    className   = {`mt-7 mb-7 w-100 px-15 ${element.className}`}
                    inputClass  = {(element.parameters as InputFieldProps).inputClass}
                    inputStyle  = {(element.parameters as InputFieldProps).inputStyle}
                    placeholder = {(element.parameters as InputFieldProps).placeholder}
                    type        = {(element.parameters as InputFieldProps).type}
                    name        = {(element.parameters as InputFieldProps).name}
                    readOnly    = {(element.parameters as InputFieldProps).readOnly}
                    value       = {formik.values[(element.parameters as InputFieldProps).name]}
                    onChange    = {formik.handleChange}
                    onBlur      = {formik.handleBlur}
                    error       = {formik.touched[(element.parameters as InputFieldProps).name] && formik.errors[(element.parameters as InputFieldProps).name]}
                />}
            </>))}
            <ButtonPrimary 
                className   = {props.submitBtn.className}
                buttonStyle = {props.submitBtn.style}
                btnText     = {props.submitBtn.text}
                type        = {'submit'}
                loading     = {state.processing}
                disabled    = {state.processing || !formik.isValid}
            />
        </form>
        <div className="error-label">{state.error}</div>
    </div>;
}

export default Form;
