import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import { Title, WrapperContent } from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import Nottice from '../../components/Nottice/Nottice';


import { useUserLogOutMutation } from '../../redux/features/authEndpoints';



const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>

      <UserForm />

      <WrapperContent>
        <UserCard />
        {/* <Nottice /> */}
        {/* <Logout /> */}
        <UserForm />
      </WrapperContent>

      {/* <Nottice /> */}
      {/* <Logout /> */}
    </Container>
  );
};

export default ProfilePage;
