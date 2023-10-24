import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <div>
        <h2>Create account</h2>
        <p>Thank you for your interest in our platform.
          To complete the registration process, please provide us with the following information.</p>
        <SignUpForm />
        <p>Already have account? <Link to='/signin'> Sign In</Link></p>
      </div>
    </Container>
  );
};

export default SignUpPage;
