import {
  ExCard,
  ExCardData,
  ExCardImage,
  ExCardText,
  ExCardTitle,
} from './ExercisesCard.styled';

const capitalizeFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const ExercisesCard = ({
  exercisesCard,
  handleBoardClick,
  handleExNameClick,
}) => {
  const { name, filter, imgURL } = exercisesCard;

  const onClick = (name) => {
    handleBoardClick(name);
    handleExNameClick(name);
  };

  return (
    <ExCard to={`groups/${exercisesCard._id}`} onClick={() => onClick(name)}>
      <ExCardImage src={imgURL} alt={name} width={402} height={387} />
      <ExCardData>
        <ExCardTitle>{capitalizeFirstLetter(name)}</ExCardTitle>
        <ExCardText>{filter}</ExCardText>
      </ExCardData>
    </ExCard>
  );
};
