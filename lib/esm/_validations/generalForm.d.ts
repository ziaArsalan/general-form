import * as yup from 'yup';
export declare const generalFormVld: import("yup/lib/object").OptionalObjectSchema<{
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    age: yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}, import("yup/lib/object").AnyObject, import("yup/lib/object").TypeOfShape<{
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    age: yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
}>>;
