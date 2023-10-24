import { ErrorMessage, Form, Formik } from 'formik'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import { validationSchemaLogin } from '../../utils/validateSchemes'
import { TextFields } from './SignInForm.styled'
import {
    useUserSignInMutation,
    useGetRegUserProfileQuery
} from '../../redux/features/endpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect } from 'react'

const SignInForm = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.token.isLogin);

    const [
        loginUser,
        {
            data: singInResult,
            // isFetching: loader,
            isSuccess: successResponse,
            error: singInError,
            // isError: controlError
        },
    ] = useUserSignInMutation();

    const {
        data,
        // isFetching,
        // isSuccess,
        // error,
        // isError
    } = useGetRegUserProfileQuery(isLogin, {
        skip: !isLogin,
        refetchOnReconnect: true,
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { resetForm }, event) => {
        event.preventDefault();
        const { email, password } = event.currentTarget;
        await loginUser({ email: email.value, password: password.value })
        resetForm();
    };

    useEffect(() => {
        if (successResponse) {
            dispatch(setToken(singInResult.token))
            console.log('isSuccess :', data);
        } else {
            console.log('Error: ', singInError);
        }

    }, [successResponse, singInResult, data, dispatch, singInError])

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaLogin}
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
                        <Button primary={true} type='submit'>Sign in</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm