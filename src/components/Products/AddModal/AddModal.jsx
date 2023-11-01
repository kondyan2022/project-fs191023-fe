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
import { useAddDiaryProductsMutation } from '../../../redux/features/userDiaryEndpoints';
import { createPortal } from 'react-dom';
import Loading from '../../Loading/Loading';

const AddModal = ({
  closeModal,
  title,
  calories,
  setExcessCalories,
  id,
  setIsAddedSuccess,
}) => {
  const initialValues = {
    grams: '100',
  };

  const [submitProduct, { isLoading, isSuccess }] =
    useAddDiaryProductsMutation();

  if (isSuccess) {
    setIsAddedSuccess(true);
    closeModal();
  }

  // document.body.style.overflow = 'hidden';

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

  const formattedData = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  const onFormSubmit = (value) => {
    const countedCalories = Math.round((calories / 100) * Number(value.grams));
    setExcessCalories(countedCalories);
    const productData = {
      product: id,
      date: formattedData(),
      amount: Number(value.grams),
      calories: countedCalories,
    };
    submitProduct(productData);
  };

  return createPortal(
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
                        formik.values.grams.trim() === '' ||
                        formik.errors.grams ||
                        isLoading
                      }
                    >
                      Add to diary
                    </StyledAddButton>
                    {isLoading && (
                      <Loading
                        styles={{
                          position: 'absolute',
                          top: '-40px',
                          border: 'none',
                          padding: '0',
                        }}
                      />
                    )}
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
    </Backdrop>,
    document.querySelector('#modal-root'),
  );
};

export default AddModal;
