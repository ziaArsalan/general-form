import * as yup from 'yup'

export const generalFormVld = yup.object({
    name : yup.string().required(),
    age  : yup.number()
})