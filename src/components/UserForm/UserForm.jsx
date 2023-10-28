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
  Button,
} from './UserForm.styled';
import RadioOption from '../RadioOption/RadioOption';
import spriteSvG from '../../images/sprite.svg';
import StyledDatepicker from './../Calendar/StyledDatepicker';

const initialValues = {
  name: '',
  height: '',
  currentWeight: '',
  desiredWeight: '',
  blood: '',
  sex: '',
  levelActivity: '',
};

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
  // // birthday - date; must be older than 18 years;  required
  // blood: yup.number().allowedValues([1, 2, 3, 4]).required(),
  // sex - string; allowed values "male", "female"; required
  // levelActivity - number; allowed values 1, 2, 3, 4, 5; required
});

const bloodOptions = [
  { id: '1', value: '1', label: '1' },
  { id: '2', value: '2', label: '2' },
  { id: '3', value: '3', label: '3' },
  { id: '4', value: '4', label: '4' },
];

const sexOptions = [
  { id: 'Male', value: 'male', label: 'Male' },
  { id: 'Female', value: 'female', label: 'Female' },
];

const levelOptions = [
  {
    id: 'level-1',
    value: '1',
    label: 'Sedentary lifestyle (little or no physical activity)',
  },
  {
    id: 'level-2',
    value: '2',
    label: 'Light activity (light exercises/sports 1-3 days per week)',
  },
  {
    id: 'level-3',
    value: '3',
    label: 'Moderately active (moderate exercises/sports 3-5 days per week)',
  },
  {
    id: 'level-4',
    value: '4',
    label: 'Very active (intense exercises/sports 6-7 days per week)',
  },
  {
    id: 'level-5',
    value: '5',
    label:
      'Extremely active (very strenuous exercises/sports and physical work)',
  },
];

const UserForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <Form utoComplete="off">
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
              </WrappInput>
              {/* <StyledDatepicker /> */}
            </WrapperInputField>
            <SectionTitle>Blood</SectionTitle>
            <WrapperRadio>
              <div style={{ display: 'flex', marginRight: '20px' }}>
                <div style={{ display: 'flex', marginRight: '20px' }}>
                  {bloodOptions.map((option) => (
                    <RadioOption
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
            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
