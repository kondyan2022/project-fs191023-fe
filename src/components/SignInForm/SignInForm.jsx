import Button from '../Button/Button'
import { Formik, ErrorMessage } from 'formik';
import { FormBox, Input } from './SignInForm.styled';
import { useDispatch } from 'react-redux'
import { validationSchemaLogin } from '../../utils/validateSchemes'
import {
    useUserSignInMutation,
} from '../../redux/features/authEndpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect, useState } from 'react'
import spriteSvG from '../../images/sprite.svg'

const SignInForm = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);


    const [
        loginUser,
        {
            data: singInResult,
            // isFetching: loader,
            // isSuccess: successResponse,
            // error: singInError,
            isError: controlError
        },
    ] = useUserSignInMutation();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        await loginUser({ ...values });
    };

    useEffect(() => {
        if (singInResult && singInResult.token) {
            dispatch(setToken(singInResult.token))
            console.log(singInResult);
        }
    }, [singInResult, dispatch])


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaLogin}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <FormBox>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={`${'defoult'}
                    ${touched.name && !errors.name && 'success'}
                    ${touched.name && errors.name && 'error'}`}
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                        />

                        <Input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={`${'defoult'}
                    ${touched.name && !errors.name && 'success'}
                    ${touched.name && errors.name && 'error'}`}
                        />
                        <ErrorMessage name="password" component="div" />
                        {showPassword ? (
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                            >
                                <svg>
                                    <use href={`${spriteSvG}#icon-pasword-visible`} />
                                </svg>
                            </button>
                        ) : (<button
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            <svg>
                                <use href={`${spriteSvG}#icon-password-hidden`} />
                            </svg>
                        </button>)}
                        <Button primary={true} type='submit'>Sign in</Button>
                        {controlError && <div>{controlError.message}</div>}
                    </FormBox>
                )}
            </Formik>
        </div>
    )
}

// ---------------------------------------------------------
//     return (
//         <div>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchemaLogin}
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
//                         <Button primary={true} type='submit'>Sign in</Button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )
// }

export default SignInForm
