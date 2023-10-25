import Container from '../../components/Container/Container';

// import { TestSignIn } from '../../components/TestSignIn/TestSignIn';

import StyledDatepicker from '../../components/Calendar/StyledDatepicker';

const SignInPage = () => {
  return (
    <Container>
      <StyledDatepicker />
      <div>SignIn Page</div>
      {/* <TestSignIn /> */}
    </Container>
  );
};

export default SignInPage;
