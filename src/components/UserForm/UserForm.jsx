// import RadioOption from '../RadioOption/RadioOption';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  SectionTitle,
  Input,
  WrapperInputField,
  InputField,
  WrapperRadio,
  Wrapper,
  WrapperLevel,
  WrappInput,
  Status,
  StatusWrapper,
  BirthdayWrapper,
} from './UserForm.styled';
import RadioOption from '../RadioOption/RadioOption';
import spriteSvG from '../../images/sprite.svg';
import {
  useGetCurrentUserQuery,
  useUserDataUpdateMutation,
} from '../../redux/features/authEndpoints';
import Button from '../Button/Button';
import StyledDatepicker from '../Calendar/StyledDatepicker';

// import StyledDatepicker from './../Calendar/StyledDatepicker';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Only letters, apostrophe, dash and spaces',
    )
    .required('Name is required'),
  height: yup.number().min(150, 'Min 150!').required('Height is required'),
  currentWeight: yup
    .number()
    .min(35, 'Min 35kg!')
    .required('Current weight is required'),
  desiredWeight: yup
    .number()
    .min(35, 'Min 35kg!')
    .required('Desired weight is required'),
  // birthday - date; must be older than 18 years;  required
  // blood: yup.number().allowedValues([1, 2, 3, 4]).required(),
  // sex - string; allowed values "male", "female"; required
  // levelActivity - number; allowed values 1, 2, 3, 4, 5; required
});

const bloodOptions = [
  { id: '1', value: 1, label: '1' },
  { id: '2', value: 2, label: '2' },
  { id: '3', value: 3, label: '3' },
  { id: '4', value: 4, label: '4' },
];

const sexOptions = [
  { id: 'Male', value: 'male', label: 'Male' },
  { id: 'Female', value: 'female', label: 'Female' },
];

const levelOptions = [
  {
    id: 'level-1',
    value: 1,
    label: 'Sedentary lifestyle (little or no physical activity)',
  },
  {
    id: 'level-2',
    value: 2,
    label: 'Light activity (light exercises/sports 1-3 days per week)',
  },
  {
    id: 'level-3',
    value: 3,
    label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
  },
  {
    id: 'level-4',
    value: 4,
    label: 'Very active (intense exercises/sports 6-7 days per week)',
  },
  {
    id: 'level-5',
    value: 5,
    label:
      'Extremely active (very strenuous exercises/sports and physical work)',
  },
];

const UserForm = () => {
  const [userFormUpdate] = useUserDataUpdateMutation();
  const { data } = useGetCurrentUserQuery();
  console.log(data?.profile);

  const initialValues = {
    name: data?.name || '',
    height: data?.profile.height || 150,
    currentWeight: data?.profile.currentWeight || 35,
    desiredWeight: data?.profile.defaultValue || 35,
    birthday: new Date(data?.profile.birthday),
    blood: data?.profile.blood || 1,
    sex: data?.profile.sex || 'male',
    levelActivity: data?.profile.levelActivity || 1,
  };

  const handleSubmit = (values, { resetForm }) => {
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
    console.log('values>>>>', values);
    // console.log(isError);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form utocomplete="off">
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
                    formik.touched.height && !formik.errors.height && 'success'
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
              <Wrapper>
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
                      {formik.errors.nacurrentWeightme ? (
                        <ErrorMessage name="currentWeight" component="p" />
                      ) : (
                        <p>Success!</p>
                      )}
                    </StatusWrapper>
                  )}
                </WrappInput>
              </Wrapper>
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

                <StyledDatepicker
                  calendarType={'birthday'}
                  setFormData={formik.values.birthday}
                  getData={(date) => {
                    formik.setFieldValue('birthday', date);
                  }}
                />
              </WrappInput>
            </WrapperInputField>
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
                      onChange={() => formik.setFieldValue('sex', option.value)}
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
              type="submit"
              isLoading={formik.isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
