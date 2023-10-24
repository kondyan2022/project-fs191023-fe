import { useState } from 'react';
import {
  Backdrop,
  Form,
  Modal,
  Grams,
  Calories,
  ButtonsList,
  CloseButton,
} from './AddModal.styled';
import Button from '../../Button/Button';

const AddModal = ({ closeModal, title, calories }) => {
  const [grams, setGrams] = useState(null);

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
  return (
    <Backdrop>
      <Modal>
        <CloseButton type="button" onClick={closeModal}>
          X
        </CloseButton>
        <Form>
          <div>
            <p>{title.length > 25 ? title.slice(0, 24) + '...' : title}</p>
          </div>
          <Grams>
            <input
              type="text"
              value={grams}
              onChange={(e) => {
                setGrams(e.target.value);
              }}
            />
            <p>grams</p>
          </Grams>
        </Form>
        <Calories>
          Calories: <span>{Math.round((calories / 100) * grams)}</span>
        </Calories>
        <ButtonsList>
          <li>
            <Button onClick={() => {}} type="submit" style={addBtnStyles}>
              Add to diary
            </Button>
          </li>
          <li>
            <Button onClick={closeModal} style={cancelBtnStyles}>
              Cancel
            </Button>
          </li>
        </ButtonsList>
      </Modal>
    </Backdrop>
  );
};

export default AddModal;
