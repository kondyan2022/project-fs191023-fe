import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import { Title, WrapperContent, WrapperForm } from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import Nottice from '../../components/Nottice/Nottice';
import { WrapperDaily } from '../../components/UserCard/UserCard.styled';
import { OrangCard } from '../../components/OneStatistic/OneStatistic.styled';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <div>
          <UserCard />
          <WrapperDaily>
            <OrangCard>
              <p>Daily calorie intake</p>
            </OrangCard>
            <OrangCard>
              <p>Daily norm of sports</p>
            </OrangCard>
            {/* <Nottice /> */}
          </WrapperDaily>
          <Nottice />
          <Logout />
        </div>
        <WrapperForm>
          <UserForm />
        </WrapperForm>
      </WrapperContent>
    </Container>
  );
};

export default ProfilePage;
