import sprite from '../../../images/sprite.svg';
import {
  ListItem,
  Workout,
  TitleBlock,
  IconWraper,
  Title,
  Statistics,
  StatData,
  Span,
  Button,
} from './ExerciseItem.styled';
export const ExerciseItem = ({ exerciseCard }) => {
  const { target, bodyPart, burnedCalories, name } = exerciseCard;

  return (
    <>
      <ListItem>
        <Workout>WORKOUT</Workout>
        <TitleBlock>
          <IconWraper>
            <svg
              width="24"
              height="24"
              style={{
                fill: '#EFEDE8',
                zIndex: 10,
              }}
            >
              <use href={sprite + '#icon-run-man'} />
            </svg>
          </IconWraper>

          <Title>{name}</Title>
        </TitleBlock>
        <Statistics>
          <StatData>
            Burned calories: <Span>{burnedCalories}</Span>
          </StatData>
          <StatData>
            Body part: <Span>{bodyPart}</Span>
          </StatData>
          <StatData>
            Target: <Span>{target}</Span>
          </StatData>
        </Statistics>
        <Button type="button">
          Start
          <svg
            width={16}
            height={16}
            style={{ verticalAlign: 'top', stroke: '#E6533C' }}
          >
            <use href={sprite + '#icon-arrow'} />
          </svg>
        </Button>
      </ListItem>
    </>
  );
};
