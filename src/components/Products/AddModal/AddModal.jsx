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
import { useEffect } from 'react';
import sprite from '../../../images/sprite.svg';
// import { useAddDiaryProductsMutation } from '../../../redux/features/userDiaryEndpoints';

const AddModal = ({ closeModal, title, calories, setExcessCalories }) => {
  const initialValues = {
    grams: '100',
  };

  // const [f, { isSuccess, isError, isLoading }] = useAddDiaryProductsMutation();

  // console.log(isUninitialized);
  // console.log(f);


  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeESC);

    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, [closeModal]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
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
    const countedCalories = Math.round((calories / 100) * Number(value.grams));
    setExcessCalories(countedCalories);
    console.log({ ...value, calories: countedCalories });
    closeModal();
  };

  return (
    <Backdrop onClick={handleClickBackground}>
      <Modal>
        <CloseButton onClick={closeModal}>
          <svg>
            <use href={`${sprite}#icon-x`}></use>
          </svg>
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
                    <StyledAddButton
                      type="submit"
                      disabled={
                        formik.values.grams.trim() === '' || formik.errors.grams
                      }
                    >
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
