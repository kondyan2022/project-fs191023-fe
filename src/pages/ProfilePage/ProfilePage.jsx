
import { Container } from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import { Title, WrapperContent } from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
    <UserForm />
      <WrapperContent>
        <UserCard />
      </WrapperContent>
      {/* <Nottice /> */}
      {/* <Logout /> */}
    </Container>
  );
};

export default ProfilePage;
