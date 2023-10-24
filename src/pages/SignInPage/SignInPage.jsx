import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <Container>
      <div>
        <h2>Sign In</h2>
        <p>Welcome! Please enter your credentials to login to the platform:</p>
        <SignInForm />
        <p>Don`t have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    </Container>
  );
};

export default SignInPage;
