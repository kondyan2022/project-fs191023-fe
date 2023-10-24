import * as yup from 'yup'

export const validationSchemaRegister = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Minimum 2 letter!')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Only letters, apostrophe, dash and spaces'
        )
        .required('Required!'),
    email: yup.string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
        .required('Required!'),
    password: yup.string().min(6, 'Minimum 6 letters!').required('Required!'),
});

export const validationSchemaLogin = yup.object({
    email: yup
        .string('Enter your email')
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Minimum 6 letters!')
        .required('Password is required'),
});