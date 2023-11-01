import Container from '../../components/Container/Container'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import Section from '../../components/Section/Section'
import { Redirect, LinkTo, Wrapper, Text } from './SignUpPage.styled'

import CardInfoVideo from '../../components/CardInfoVideo/CardInfoVideo'
import CardInfoCalories from '../../components/CardInfoCalories/CardInfoCalories'
import ButtonGoogle from '../../components/ButtonGoogle/ButtonGoogle'


const SignUpPage = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <h2>Create account</h2>
          <Text>Thank you for your interest in our platform.
            To complete the registration process, please provide us with the following
            information.</Text>
          <SignUpForm />
          <ButtonGoogle />
          <Redirect>Already have account? <LinkTo to='/signin'> Sign In</LinkTo></Redirect>

          <CardInfoVideo />
          <CardInfoCalories />

        </Wrapper>
      </Container>
    </Section>
  );
};

export default SignUpPage;
