import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';
import Section from '../../components/Section/Section';
import { Redirect, Text, Title } from './SignInPage.styled';

const SignInPage = () => {
  return (
    <Section>
      <Container>
        <div>
          <Title>Sign In</Title>
          <Text>Welcome! Please enter your credentials to login to the platform:</Text>
          <SignInForm />
          <Redirect>Don`t have an account? <Link to='/signup'>Sign Up</Link></Redirect>
        </div>
      </Container>
    </Section>
  );
};

export default SignInPage;
