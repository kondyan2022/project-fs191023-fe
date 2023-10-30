import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import CardInfoVideo from '../../components/CardInfoVideo/CardInfoVideo';
import { WrappTitle, Wrapper, WrapperFlex, IconCircleDecorStyled } from './WelcomePage.styled';
import { buttonStyles } from '../../components/Button/Button.styled';
import Section from '../../components/Section/Section';
import iconSvg from '../../images/sprite.svg'
import CardInfoCalories from '../../components/CardInfoCalories/CardInfoCalories';


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
        <CardInfoVideo />
        <CardInfoCalories />
      </Container>
    </Section>
  );
};

export default WelcomePage;
