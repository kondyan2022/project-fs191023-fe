import { Container } from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import { Title, WrapperContent } from './ProfilePage.styled';

const ProfilePage = () => {
  return (
    <Container>

      <Title>Profile Settings</Title>
      <WrapperContent>
        <UserCard />
      </WrapperContent>
      {/* <Nottice /> */}
      {/* <Logout /> */}

    </Container>
   
  );
};

export default ProfilePage;
