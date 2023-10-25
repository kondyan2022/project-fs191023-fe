import { Icon, Text, WrapperInfo, WrapperMark } from './Nottice.styled';
import sprite from '../../images/sprite.svg';

const Nottice = () => {
  return (
    <WrapperInfo>
      <WrapperMark>
        <Icon>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-attention`}></use>
          </svg>
        </Icon>

        <Text>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </Text>
      </WrapperMark>
    </WrapperInfo>
  );
};

export default Nottice;
