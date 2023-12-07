import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import {
  ExCard,
  ExCardData,
  ExCardImage,
  ExCardText,
  ExCardTitle,
} from './ExercisesCard.styled';

export const ExercisesCard = ({ exercisesCard }) => {
  const { name, filter, imgURL } = exercisesCard;

  return (
    <ExCard to={`?value=${name}`}>
      <ExCardImage src={imgURL} alt={name} width={402} height={387} />
      <ExCardData>
        <ExCardTitle>{capitalizeFirstLetter(name)}</ExCardTitle>
        <ExCardText>{filter}</ExCardText>
      </ExCardData>
    </ExCard>
  );
};
