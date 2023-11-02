import Button from '../Button/Button'
import { Formik, ErrorMessage, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { validationSchemaRegister } from '../../utils/validateSchemes'
import { useUserSignUpMutation } from '../../redux/features/authEndpoints'
import { setToken } from '../../redux/features/userToken'
import { useEffect, useState } from 'react'
import { BtnShowPassword, FormBox, Input, WrappErrorServer, InputsParent, StatusWrapp, BoxParent, SvgEye, SvgStatus, SubmitParent } from './SignUpForm.styled'
import spriteSvG from '../../images/sprite.svg'
import Loading from '../Loading/Loading'

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const [
        createUser,
        {
            data: createdUser,
            isLoading,
            error: createError,
            isError: isCreateError,
        },
    ] = useUserSignUpMutation();

    const handleSubmit = (values) => {
        createUser({ ...values });
    };

    useEffect(() => {
        if (createdUser && createdUser.token) {
      const { token, user } = createdUser;
      const isProfile = user.profile ? true : false;
      const action = { token, isProfile };
      dispatch(setToken(action));
        }
    }, [createdUser, dispatch]);

    

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaRegister}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, isValid, dirty }) => (
                    <Form autoComplete="off">
                        <FormBox>
                            <BoxParent>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className={`${'defoult'}
                                ${touched.name && !errors.name && 'success'}
                                ${touched.name && errors.name && 'error'}`}
                                />
                                {touched.name && (<StatusWrapp>
                                    <SvgStatus className=
                                        {touched.name && !errors.name
                                            ? `${'success'}`
                                            : `${'error'}`}
                                    >
                                        <use href={`${spriteSvG}#icon-circle-fill`} />
                                    </SvgStatus>
                                    {errors.name
                                        ? (<ErrorMessage name="name" component="div" style={{ fontSize: '12px', color: 'red' }} />)
                                        : (<p style={{ fontSize: '12px', color: 'green' }}>Success!</p>)
                                    }
                                </StatusWrapp>)}
                            </BoxParent>

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
                                        ? (<ErrorMessage name="email" component="div" style={{ fontSize: '12px', color: 'red' }} />)
                                        : (<p style={{ fontSize: '12px', color: 'green' }}>Success!</p>)
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
                                        ? (<ErrorMessage name="password" component="div" style={{ fontSize: '12px', color: 'red' }} />)
                                        : (<p style={{ fontSize: '12px', color: 'green' }}>Success!</p>)
                                    }
                                </StatusWrapp>)}
                            </BoxParent>
                        </FormBox>
                        <SubmitParent>

                            <Button
                                primary={true}
                                type="submit"
                                isLoading={isLoading || (!isValid || !dirty)}
                            >
                                Sign Up
                            </Button>
                            {isLoading && <Loading styles={{ position: 'absolute', top: "-40px" }} />}
                            {isCreateError && <WrappErrorServer>{createError.data.message}</WrappErrorServer>}
                        </SubmitParent>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUpForm;
