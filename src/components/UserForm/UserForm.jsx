import { ErrorMessage, Field, Form, Formik } from 'formik';

import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  WrapperRadio,
  WrapperLevel,
  WrappInput,
  Status,
  StatusWrapper,
  DivInputField,
  WrapperDatepicker,
} from './UserForm.styled';
import RadioOption from '../RadioOption/RadioOption';
import spriteSvG from '../../images/sprite.svg';
import {
  useGetCurrentUserQuery,
  useUserDataUpdateMutation,
} from '../../redux/features/authEndpoints';
import Button from '../Button/Button';
import StyledDatepicker from '../Calendar/StyledDatepicker';
import validationSchemaUserForm from './../../utils/validationSchemaUserForm';
import { bloodOptions, levelOptions, sexOptions } from './../../utils/options';
import Loading from '../Loading/Loading';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsProfile } from '../../redux/features/userToken';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/css';

const UserForm = () => {
  const [userFormUpdate, { isLoading }] = useUserDataUpdateMutation();
  const { data, isFetching } = useGetCurrentUserQuery();
  const [calendarSelected, setCalendarSelected] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: data?.name || '',
    height: data?.profile?.height || 150,
    currentWeight: data?.profile?.currentWeight || 35,
    desiredWeight: data?.profile?.desiredWeight || 35,
    birthday: data?.profile?.birthday || new Date('2000-12-20T00:00:00.000Z'),
    blood: data?.profile?.blood || 1,
    sex: data?.profile?.sex || 'male',
    levelActivity: data?.profile?.levelActivity || 1,
  };

  const toastStyles = css`
    background-color: #e6533c;
    color: #fff;
  `;

  const notify = () =>
    toast.success('The information is saved. Go to the diary', {
      // className: toastStyles,
      // bodyClassName: toastStyles,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      profile: {
        height: values.height,
        currentWeight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        birthday: values.birthday,
        blood: values.blood,
        sex: values.sex,
        levelActivity: values.levelActivity,
      },
    };

    userFormUpdate(data);
    const action = { isProfile: true };
    dispatch(setIsProfile(action));
    setCalendarSelected(false);
    notify();
  };

  return (
    <>
      {!data && <Loading />}
      {data && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaUserForm}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            const isDataChanged = () => {
              if (!data?.profile) {
                return true;
              }
              if (formik.values.name != data.name) {
                return true;
              }
              if (Date(formik.values.birthday) != Date(data.profile.birthday)) {
                return true;
              }

              for (let key in data.profile) {
                // console.log({ [key]: [data.profile[key], formik.values[key]] });
                if (
                  !['DSN', 'BMR', 'birthday'].includes(key) &&
                  data.profile[key] !== formik.values[key]
                ) {
                  return true;
                }
              }
              return false;
            };

            return (
              <Form autoComplete="off">
                <FormContainer>
                  <div>
                    <SectionTitle>Basic info</SectionTitle>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Your name"
                      as={Input}
                      className={`${
                        formik.touched.name && !formik.errors.name && 'success'
                      }
                                ${
                                  formik.touched.name &&
                                  formik.errors.name &&
                                  'error'
                                }`}
                    />
                    {formik.touched.name && (
                      <Status>
                        <svg
                          className={
                            formik.touched.name && !formik.errors.name
                              ? `${'success'}`
                              : `${'error'}`
                          }
                        >
                          <use href={`${spriteSvG}#icon-circle-fill`} />
                        </svg>
                        {formik.errors.name ? (
                          <ErrorMessage name="name" component="p" />
                        ) : (
                          <p>Success!</p>
                        )}
                      </Status>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="email"
                      style={{ color: 'rgba(239, 237, 232, 0.60)' }}
                      defaultValue={data?.email}
                      readOnly
                      disabled
                    />
                  </div>
                </FormContainer>
                <DivInputField>
                  <WrapperInputField>
                    <WrappInput>
                      <label htmlFor="height">Height</label>
                      <Field
                        type="number"
                        name="height"
                        id="height"
                        placeholder="Enter height"
                        as={InputField}
                        className={`${
                          formik.touched.height &&
                          !formik.errors.height &&
                          'success'
                        }
                                ${
                                  formik.touched.height &&
                                  formik.errors.height &&
                                  'error'
                                }`}
                      />

                      {formik.touched.height && (
                        <StatusWrapper>
                          <svg
                            className={
                              formik.touched.height && !formik.errors.height
                                ? `${'success'}`
                                : `${'error'}`
                            }
                          >
                            <use href={`${spriteSvG}#icon-circle-fill`} />
                          </svg>
                          {formik.errors.height ? (
                            <ErrorMessage name="height" component="p" />
                          ) : (
                            <p>Success!</p>
                          )}
                        </StatusWrapper>
                      )}
                    </WrappInput>

                    <WrappInput>
                      <label htmlFor="currentWeight">Current Weight</label>
                      <Field
                        type="number"
                        name="currentWeight"
                        id="currentWeight"
                        placeholder="Enter weight"
                        as={InputField}
                        className={`${
                          formik.touched.currentWeight &&
                          !formik.errors.currentWeight &&
                          'success'
                        }
                                ${
                                  formik.touched.currentWeight &&
                                  formik.errors.currentWeight &&
                                  'error'
                                }`}
                      />
                      {formik.touched.currentWeight && (
                        <StatusWrapper>
                          <svg
                            className={
                              formik.touched.currentWeight &&
                              !formik.errors.currentWeight
                                ? `${'success'}`
                                : `${'error'}`
                            }
                          >
                            <use href={`${spriteSvG}#icon-circle-fill`} />
                          </svg>
                          {formik.errors.currentWeight ? (
                            <ErrorMessage name="currentWeight" component="p" />
                          ) : (
                            <p>Success!</p>
                          )}
                        </StatusWrapper>
                      )}
                    </WrappInput>
                  </WrapperInputField>
                  <WrapperInputField>
                    <WrappInput>
                      <label htmlFor="desiredWeight">Desired Weight</label>
                      <Field
                        type="number"
                        name="desiredWeight"
                        id="desiredWeight"
                        placeholder="Enter weight"
                        as={InputField}
                        required
                        pattern="[35]"
                        className={`${
                          formik.touched.desiredWeight &&
                          !formik.errors.desiredWeight &&
                          'success'
                        }
                                ${
                                  formik.touched.desiredWeight &&
                                  formik.errors.desiredWeight &&
                                  'error'
                                }`}
                      />
                      {formik.touched.desiredWeight && (
                        <StatusWrapper>
                          <svg
                            className={
                              formik.touched.desiredWeight &&
                              !formik.errors.desiredWeight
                                ? `${'success'}`
                                : `${'error'}`
                            }
                          >
                            <use href={`${spriteSvG}#icon-circle-fill`} />
                          </svg>
                          {formik.errors.desiredWeight ? (
                            <ErrorMessage name="desiredWeight" component="p" />
                          ) : (
                            <p>Success!</p>
                          )}
                        </StatusWrapper>
                      )}
                    </WrappInput>
                    <WrapperDatepicker>
                      <StyledDatepicker
                        calendarType={'birthday'}
                        setFormData={new Date(formik.values.birthday)}
                        getData={(date) => {
                          formik.setFieldValue('birthday', date);
                          setCalendarSelected(true);
                        }}
                      />
                    </WrapperDatepicker>
                  </WrapperInputField>
                </DivInputField>

                <SectionTitle>Blood</SectionTitle>
                <WrapperRadio>
                  <div style={{ display: 'flex', marginRight: '20px' }}>
                    <div style={{ display: 'flex', marginRight: '20px' }}>
                      {bloodOptions.map((option) => (
                        <RadioOption
                          type="radio"
                          key={option.id}
                          id={option.id}
                          name="blood"
                          value={option.value}
                          checked={formik.values.blood === option.value}
                          label={option.label}
                          onChange={() =>
                            formik.setFieldValue('blood', option.value)
                          }
                        />
                      ))}
                    </div>

                    <div style={{ display: 'flex' }}>
                      {sexOptions.map((option) => (
                        <RadioOption
                          type="radio"
                          key={option.id}
                          id={option.id}
                          name="sex"
                          value={option.value}
                          checked={formik.values.sex === option.value}
                          label={option.label}
                          onChange={() =>
                            formik.setFieldValue('sex', option.value)
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <WrapperLevel>
                    {levelOptions.map((option) => (
                      <RadioOption
                        type="radio"
                        key={option.id}
                        id={option.id}
                        name="levelActivity"
                        value={option.value}
                        checked={formik.values.levelActivity === option.value}
                        label={option.label}
                        onChange={() =>
                          formik.setFieldValue('levelActivity', option.value)
                        }
                      />
                    ))}
                  </WrapperLevel>
                </WrapperRadio>

                <Button
                  primary={true}
                  type={'submit'}
                  isFetching={isFetching}
                  isLoading={
                    isFetching ||
                    !(isDataChanged() || calendarSelected) ||
                    !formik.isValid
                  }
                >
                  Save
                </Button>

                <ToastContainer />
                {isLoading && (
                  <Loading styles={{ position: 'absolute', top: '-40px' }} />
                )}
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default UserForm;
