import { ErrorMessage, Form, Formik } from 'formik'
import Button from '../Button/Button'
// import { useDispatch } from 'react-redux'
import { Grid, TextField } from '@mui/material'
import { validationSchemaRegister } from '../../layouts/validateSchemes'


const SignUpForm = () => {
    // const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        // dispatch(signUpUser(values));
        resetForm();
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaRegister}
                onSubmit={handleSubmit}
            >
                {props => (
                    <Form>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <TextField
                                type="text"
                                id="name"
                                name="name"
                                variant="outlined"
                                label="Name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                            />
                            <TextField

                                type="email"
                                id="email"
                                name="email"
                                variant="outlined"
                                label="Email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                            />
                            <TextField
                                type="password"
                                id="password"
                                name="password"
                                variant="outlined"
                                label="Password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                            />
                        </Grid>
                        <Button primary={true}>Sign Up</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm