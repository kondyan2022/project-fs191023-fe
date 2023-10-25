import {
  Backdrop,
  FormBlock,
  Modal,
  Calories,
  ErrorMessage,
  ButtonsList,
  CloseButton,
  Input,
  GramsText,
} from './AddModal.styled';
import Button from '../../Button/Button';
import { Form, Formik } from 'formik';
import { inputSchema } from './AddModalSchema';
import { useState } from 'react';

const AddModal = ({ closeModal, title, calories }) => {
  const [countedCalories, setCalories] = useState(0);
  const initialValues = {
    grams: '',
  };

  const addBtnStyles = {
    display: 'flex',
    padding: '14px 32px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '12px',
    background: 'var(--color-orange)',
    width: '151px',
    height: '52px',
    border: 'none',
    color: 'var(--color-white)',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '24px',
  };
  const cancelBtnStyles = {
    display: 'flex',
    padding: '14px 40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '12px',
    border: '1px solid rgba(239, 237, 232, 0.30)',
    width: '142px',
    height: '52px',
    color: 'var(--color-white)',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24px',
  };

  const errorText = (e) => {
    if (e.includes('grams must be a `number` type')) {
      return 'grams must be a number';
    }
    if (e.includes('required')) {
      return 'grams are required';
    }
    if (e.includes('positive')) {
      return 'grams must be a positive number';
    }
  };

  const onFormSubmit = (value) => {
    setCalories(Math.round((calories / 100) * Number(value.grams)));
    console.log({ ...value, calories: countedCalories });
    closeModal();
  };

  return (
    <Backdrop>
      <Modal>
        <CloseButton type="button" onClick={closeModal}>
          X
        </CloseButton>
        <FormBlock>
          <div>
            <p>{title.length > 25 ? title.slice(0, 24) + '...' : title}</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={inputSchema}
            onSubmit={onFormSubmit}
          >
            {(formik) => (
              <Form>
                <Input name="grams" />
                <ErrorMessage>
                  {formik.errors.grams && errorText(formik.errors.grams)}
                </ErrorMessage>
                <ButtonsList>
                  <li>
                    <Button type="submit" style={addBtnStyles}>
                      Add to diary
                    </Button>
                  </li>
                  <li>
                    <Button onClick={closeModal} style={cancelBtnStyles}>
                      Cancel
                    </Button>
                  </li>
                </ButtonsList>
                <GramsText>grams</GramsText>
                <Calories>
                  Calories:
                  <span>
                    {formik.errors.grams
                      ? ' -'
                      : ' ' +
                        Math.round((calories / 100) * formik.values.grams)}
                  </span>
                </Calories>
              </Form>
            )}
          </Formik>
        </FormBlock>
      </Modal>
    </Backdrop>
  );
};

export default AddModal;
