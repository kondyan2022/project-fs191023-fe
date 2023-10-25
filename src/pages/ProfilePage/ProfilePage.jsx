import { Container } from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import { Title, WrapperContent } from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import Nottice from '../../components/Nottice/Nottice';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <UserCard />
        {/* <Nottice /> */}
        {/* <Logout /> */}
        <UserForm />
      </WrapperContent>
    </Container>
  );
};

export default ProfilePage;
