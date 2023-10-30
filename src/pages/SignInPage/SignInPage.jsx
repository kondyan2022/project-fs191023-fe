import Container from '../../components/Container/Container';
import SignInForm from '../../components/SignInForm/SignInForm';
import Section from '../../components/Section/Section';
import { LinkTo, Redirect, Wrapper, Text } from './SignInPage.styled';

const SignInPage = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <h2>Sign In</h2>
          <Text>Welcome! Please enter your credentials to login to the platform:</Text>
          <SignInForm />
          <Redirect>Don`t have an account? <LinkTo to='/signup'>Sign Up</LinkTo></Redirect>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SignInPage;
