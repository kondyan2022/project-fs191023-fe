import Button from '../Button/Button'
import { Formik, ErrorMessage, Form } from 'formik';
import { BtnShowPassword, FormBox, WrappErrorServer, Input, InputsParent, StatusWrapp, BoxParent, SvgEye, SvgStatus } from './SignInForm.styled';
import { useDispatch } from 'react-redux'
import { validationSchemaLogin } from '../../utils/validateSchemes'
import { useUserSignInMutation } from '../../redux/features/authEndpoints'
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
            error: signInError,
            isError: controlError
        },
    ] = useUserSignInMutation();

    const handleSubmit = async (values) => {
        await loginUser({ ...values });
    };

    useEffect(() => {
        if (singInResult && singInResult.token) {
            dispatch(setToken(singInResult.token))
            console.log(singInResult);
        }
    }, [singInResult, dispatch])

    const initialValues = {
        email: '',
        password: '',
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaLogin}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form autoComplete="off">
                        <FormBox>
                            <BoxParent>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className={`${'defoult'}
                                ${touched.email && !errors.email && 'success'}
                                ${touched.email && errors.email && 'error'}`}
                                />
                                {touched.email && (<StatusWrapp>
                                    <SvgStatus className=
                                        {touched.email && !errors.email
                                            ? `${'success'}`
                                            : `${'error'}`}>
                                        <use href={`${spriteSvG}#icon-circle-fill`} />
                                    </SvgStatus>
                                    {errors.email
                                        ? (<ErrorMessage name="email" component="div" />)
                                        : (<p>Success!</p>)
                                    }
                                </StatusWrapp>)}
                            </BoxParent>

                            <BoxParent>
                                <InputsParent>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`${'defoult'}
                                ${touched.password && !errors.password && 'success'}
                                ${touched.password && errors.password && 'error'}`}
                                    />
                                    {showPassword
                                        ? (<BtnShowPassword
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <SvgEye width='20' height='22'>
                                                <use href={`${spriteSvG}#icon-pasword-visible`} />
                                            </SvgEye>
                                        </BtnShowPassword>)
                                        : (<BtnShowPassword
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <SvgEye width='20' height='22'>
                                                <use href={`${spriteSvG}#icon-password-hidden`} />
                                            </SvgEye>
                                        </BtnShowPassword>)}
                                </InputsParent>
                                {touched.password && (<StatusWrapp>
                                    <SvgStatus className={touched.password && !errors.password
                                        ? `${'success'}`
                                        : `${'error'}`}>
                                        <use href={`${spriteSvG}#icon-circle-fill`} />
                                    </SvgStatus>
                                    {errors.password
                                        ? (<ErrorMessage name="password" component="div" />)
                                        : (<p>Success!</p>)
                                    }
                                </StatusWrapp>)}
                            </BoxParent>
                        </FormBox>
                        <Button primary={true} type='submit'>Sign in</Button>
                        {controlError && <WrappErrorServer>{signInError.data.message}</WrappErrorServer>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignInForm