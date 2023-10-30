import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import Section from '../../components/Section/Section'
import { Text, Title, Redirect } from './SignUpPage.styled'


const SignUpPage = () => {
  return (
    <Section>
      <Container>
        <div>
          <Title>Create account</Title>
          <Text>Thank you for your interest in our platform.
            To complete the registration process, please provide us with the following information.</Text>
          <SignUpForm />
          <Redirect>Already have account? <Link to='/signin'> Sign In</Link></Redirect>
        </div>
      </Container>
    </Section>
  );
};

export default SignUpPage;
