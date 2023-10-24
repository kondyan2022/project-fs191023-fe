import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import WelcomeInfoCalories from '../../components/WelcomeInfoCalories/WelcomeInfoCalories'
import WelcomeInfoVideo from '../../components/WelcomeInfoVideo/WelcomeInfoVideo'
import { Title, WrappTitle, WrapperFlex } from './WelcomePage.styled'
import { IconCircleDecorationStyled, IconPlayVideoStyled, IconRunMenStyled } from './WelcomeIcons.styled'
import { buttonStyles } from '../../components/Button/Button.styled'
import { Section } from '../../components/Section/Section.styled'


const WelcomePage = () => {

  const navigate = useNavigate();

  const handleButtonSignUp = () => navigate('/signup');
  const handleButtonSignIn = () => navigate('/signin');

  return (
    <Section>
      <Container>
        <div>
          <WrappTitle>
            <Title>Transforming your body shape with Power Pulse</Title>
            <IconCircleDecorationStyled />
          </WrappTitle>
          <WrapperFlex>
            <Button onClick={handleButtonSignUp} style={buttonStyles} primary={true}>Sign Up</Button>
            <Button onClick={handleButtonSignIn} style={buttonStyles}>Sign In</Button>
          </WrapperFlex>
          <div>
            <WelcomeInfoVideo
              icon={<IconPlayVideoStyled />}
              number={'350+'}
              value={'Video tutorial'}
            />
            <WelcomeInfoCalories
              icon={<IconRunMenStyled />}
              number={'500'}
              value={'cal'}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WelcomePage;
