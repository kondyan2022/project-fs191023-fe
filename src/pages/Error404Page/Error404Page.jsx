import Container from '../../components/Container/Container'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { signUpButtonStyles } from '../../components/Button/Button.styled'
import { MainWrapper, Wrapper, Title, Subtitle } from './Error404Page.styled'

const Error404Page = () => {
  const navigate = useNavigate();
  const handleButton = () => navigate('/');

  return (
    <Container>
      <MainWrapper>
        <Wrapper>
          <Title>404</Title>
          <Subtitle>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</Subtitle>
          <Button onClick={handleButton} style={signUpButtonStyles}>Go Home</Button>
          {/* here will be background img */}
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};

export default Error404Page;
