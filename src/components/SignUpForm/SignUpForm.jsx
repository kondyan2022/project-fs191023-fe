import Button from '../Button/Button'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaRegister } from '../../utils/validateSchemes'
import {
    useUserRegisterMutation,
    useGetRegUserProfileQuery
} from '../../redux/features/endpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect } from 'react'
import { FormBox, Input } from './SignUpForm.styled';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.token.isLogin);
    // const [status, setStatus] = useState('');

    const [
        createUser,
        {
            data: createdUser,
            // isFetching: loader,
            isSuccess: isCreateSuccess,
            error: createError,
            isError: isCreateError,
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
        if (values) {
            await createUser({ ...values });
            resetForm();
        } else {
            console.log('Error')
        }
    };

    useEffect(() => {
        if (isCreateSuccess) {
            dispatch(setToken(createdUser.token));
            navigate('/')
            console.log(createdUser);
        }
        // if (isCreateError) {
        // setStatus(createError)
        // }
    }, [createdUser,
        dispatch,
        isCreateSuccess,
        navigate,
        // createError,
        // isCreateError
    ]);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaRegister}
                onSubmit={handleSubmit}
            >
                {formikProps => (
                    <FormBox>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                        />

                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                        />

                        <Input
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
                        {isCreateError && <div>{createError.message}</div>}
                    </FormBox>
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