import Container from '../../components/Container/Container'
import { useNavigate } from 'react-router-dom'
// import Button from '../../components/Button/Button'
import { MainWrapper, Wrapper, Title, Subtitle, ButtonStyled } from './Error404Page.styled'
import Section from '../../components/Section/Section'

const Error404Page = () => {
  const navigate = useNavigate();
  const handleButton = () => navigate('/');

  return (
    <Section>
      <Container>
        <MainWrapper>
          <Wrapper>
            <Title>404</Title>
            <Subtitle>Sorry, you have reached a page that we could not find.
              It seems that you are lost among the numbers and letters of our
              virtual space. Perhaps this page went on vacation or decided to
              disappear into another dimension. We apologize for this inconvenience.
            </Subtitle>

            <ButtonStyled
              primary={true}
              onClick={handleButton}
            >
              Go Home
            </ButtonStyled>

          </Wrapper>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default Error404Page;
