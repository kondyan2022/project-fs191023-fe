import * as yup from 'yup';

const validationSchemaUserForm = yup.object({
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
  birthday: yup.date().required(),
  blood: yup.number().required(),
  sex: yup.string().required(),
  levelActivity: yup.number().required(),
});

export default validationSchemaUserForm;
