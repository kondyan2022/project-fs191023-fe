import Button from '../Button/Button'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaRegister } from '../../utils/validateSchemes'
import {
    useUserRegisterMutation,
    useGetRegUserProfileQuery
} from '../../redux/features/endpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect, useState } from 'react'

const SignUpForm = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.token.isLogin);
    const [status, setStatus] = useState('');

    const [
        registerUser,
        {
            data: singUpResult,
            // isFetching: loader,
            // isSuccess: successResponse,
            // error: singUpError,
            // isError: controlError
        },
    ] = useUserRegisterMutation();

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
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await registerUser({ ...values });
            if (response.error.message) {
                setStatus(response.error.messaage);
            } else {
                setStatus('');
                resetForm();
            }
        } catch (error) {
            console.error('Error :', error);
            setStatus('Error sending a request');
        }
    };

    useEffect(() => {
        if (singUpResult) {
            dispatch(setToken(singUpResult.token));
        }
    }, [singUpResult, dispatch]);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaRegister}
                onSubmit={handleSubmit}
            >
                {formikProps => (
                    <Form>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                        />

                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                        />

                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                        />

                        <Button primary={true} type='submit'>Sign Up</Button>
                        {status && <div>{status}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm;


// ----------------------------------------------------
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchemaRegister}
//                 onSubmit={handleSubmit}
//             >
//                 {props => (
//                     <Form>
//                         <Grid
//                             container
//                             direction="column"
//                             justifyContent="flex-start"
//                             alignItems="flex-start"
//                         >
//                             <TextFields
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 variant="outlined"
//                                 label="Name"
//                             />
//                             <ErrorMessage
//                                 name="name"
//                                 component="div"
//                             />
//                             <TextFields

//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 variant="outlined"
//                                 label="Email"
//                             />
//                             <ErrorMessage
//                                 name="email"
//                                 component="div"
//                             />
//                             <TextFields
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 variant="outlined"
//                                 label="Password"
//                             />
//                             <ErrorMessage
//                                 name="password"
//                                 component="div"
//                             />
//                         </Grid>
//                         <Button primary={true} type='submit'>Sign Up</Button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

// export default SignUpForm