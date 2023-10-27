import * as yup from 'yup'

export const validationSchemaRegister = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Minimum 2 letters!')
        .max(16, 'Maximim 16 letters')
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Only letters, apostrophe, dash and spaces'
        )
        .required('Required!'),
    email: yup.string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
        .required('Required!'),
    password: yup.string()
        .min(6, 'Minimum 6 characters!')
        .max(16, 'Password must be no more than 16 characters')
        .required('Required!'),
});

export const validationSchemaLogin = yup.object({
    email: yup
        .string('Enter your email')
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Minimum 6 characters!')
        .max(16, 'Password must be no more than 16 characters')
        // .matches(/^(?=.*[a-z])/, 'Please create a stronger password')
        .required('Password is required'),
});