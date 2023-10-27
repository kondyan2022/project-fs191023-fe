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
  StyledAddButton,
  StyledCancelButton,
} from './AddModal.styled';
import { Form, Formik } from 'formik';
import { inputSchema } from './AddModalSchema';
import { useState } from 'react';

const AddModal = ({ closeModal, title, calories }) => {
  const [countedCalories, setCountedCalories] = useState(0);
  const initialValues = {
    grams: '',
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
    setCountedCalories(Math.round((calories / 100) * Number(value.grams)));
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
                    <StyledAddButton type="submit" >
                      Add to diary
                    </StyledAddButton>
                  </li>
                  <li>
                    <StyledCancelButton onClick={closeModal} type="button">
                      Cancel
                    </StyledCancelButton>
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
