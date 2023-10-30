import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import WelcomeInfoCalories from '../../components/WelcomeInfoCalories/WelcomeInfoCalories';
import WelcomeInfoVideo from '../../components/WelcomeInfoVideo/WelcomeInfoVideo';
import { WrappTitle, Wrapper, WrapperFlex } from './WelcomePage.styled';
import { buttonStyles } from '../../components/Button/Button.styled';
import Section from '../../components/Section/Section';
import iconSvg from '../../images/sprite.svg'
import { IconCircleDecorStyled, IconPlayVideoStyled, IconRunMenStyled } from './WelcomeIcons.styled';



const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonSignUp = () => navigate('/signup');
  const handleButtonSignIn = () => navigate('/signin');

  return (
    <Section>
      <Container>
        <Wrapper>
          <WrappTitle>
            <h1>Transforming your body shape with Power Pulse</h1>
            <IconCircleDecorStyled>
              <use href={`${iconSvg}#icon-Line`} />
            </IconCircleDecorStyled>
          </WrappTitle>
          <WrapperFlex>
            <Button
              onClick={handleButtonSignUp}
              style={buttonStyles}
              primary={true}
            >
              Sign Up
            </Button>
            <Button onClick={handleButtonSignIn} style={buttonStyles}>
              Sign In
            </Button>
          </WrapperFlex>
        </Wrapper>
        <WelcomeInfoVideo
          icon={
            <IconPlayVideoStyled>
              <use href={`${iconSvg}#icon-play`} />
            </IconPlayVideoStyled>
          }
          number={'350+'}
          value={'Video tutorial'}
        />
        <WelcomeInfoCalories
          icon={
            <IconRunMenStyled>
              <use href={`${iconSvg}#icon-run-man`} />
            </IconRunMenStyled>}
          number={'500'}
          value={'cal'}
        />
      </Container>
    </Section>
  );
};

export default WelcomePage;
