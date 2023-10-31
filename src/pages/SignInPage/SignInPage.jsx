import Container from '../../components/Container/Container';
import SignInForm from '../../components/SignInForm/SignInForm';
import Section from '../../components/Section/Section';
import { LinkTo, Redirect, Wrapper, Text } from './SignInPage.styled';
import CardInfoVideo from '../../components/CardInfoVideo/CardInfoVideo';
import CardInfoCalories from '../../components/CardInfoCalories/CardInfoCalories';

const SignInPage = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <h2>Sign In</h2>
          <Text>
            Welcome! Please enter your credentials to login to the platform:
          </Text>
          <SignInForm />
          <Redirect>
            Don`t have an account? <LinkTo to="/signup">Sign Up</LinkTo>
          </Redirect>
          <a href="http://localhost:3000/users/google">Google</a>
          <CardInfoVideo />
          <CardInfoCalories />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default SignInPage;
