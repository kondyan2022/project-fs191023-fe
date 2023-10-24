import { ErrorMessage, Form, Formik } from 'formik'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { validationSchemaRegister } from '../../utils/validateSchemes'
import { TextFields } from './SignUpForm.styled'
import {
    useUserRegisterMutation,
    useGetRegUserProfileQuery
} from '../../redux/features/endpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect } from 'react'


const SignUpForm = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.token.isLogin);

    const [
        registerUser,
        {
            data: singUpResult,
            // isFetching: loader,
            isSuccess: successResponse,
            error: singUpError,
            // isError: controlError
        },
    ] = useUserRegisterMutation();

    const { data,
        // isFetching,
        // isSuccess,
        // error,
        // isError
    } = useGetRegUserProfileQuery(isLogin, {
        skip: !isLogin,
        refetchOnReconnect: true,
    });

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { resetForm }, event) => {
        event.preventDefault();
        const { name, email, password } = event.currentTarget;
        registerUser({ name: name.value, email: email.value, password: password.value })
        resetForm();
    };

    useEffect(() => {
        if (successResponse) {
            dispatch(setToken(singUpResult.token))
            console.log('isSuccess :', data);
        } else {
            console.log('Error: ', singUpError);
        }

    }, [successResponse, singUpResult, data, dispatch, singUpError])

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
                            <TextFields
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
                            <TextFields

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
                            <TextFields
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
                        <Button primary={true} type='submit'>Sign Up</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm