import Container from '../../components/Container/Container'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { SvgLogo, Wrapper, WrappParent } from './Error404Page.styled'
import Section from '../../components/Section/Section'
import spriteSvG from '../../images/sprite.svg'


const Error404Page = () => {
  const navigate = useNavigate();
  const handleButton = () => navigate('/');

  return (
    <Section>
      <Container>
        <WrappParent>
          <Wrapper>
            <h1>404</h1>
            <p>Sorry, you have reached a page that we could not find.
              It seems that you are lost among the numbers and letters of our
              virtual space. Perhaps this page went on vacation or decided to
              disappear into another dimension. We apologize for this inconvenience.
            </p>

            <Button
              primary={true}
              onClick={handleButton}
            >
              Go Home
            </Button>

          </Wrapper>

          <Link to="/">
            <SvgLogo width="126" height="13">
              <use href={`${spriteSvG}#icon-Logo`} />
            </SvgLogo>
          </Link>

        </WrappParent>
      </Container>
    </Section>
  );
};

export default Error404Page;
