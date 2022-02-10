import * as yup from 'yup';
export var generalFormVld = yup.object({
    name: yup.string().required(),
    age: yup.number()
});
