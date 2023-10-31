import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import {
  OrangCardProfile,
  Title,
  WrapperContent,
  WrapperForm,
} from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import Nottice from '../../components/Nottice/Nottice';
import { WrapperDaily } from '../../components/UserCard/UserCard.styled';
import sprite from '../../images/sprite.svg';
// import { TestAvatar } from '../../components/TestSignIn/TestAvatar';

const ProfilePage = () => {
  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <div>
          <UserCard />
          <WrapperDaily>
            <OrangCardProfile>
              <div>
                <svg>
                  <use href={`${sprite}#icon-fork-knife`}></use>
                </svg>
                <p>Daily calorie intake</p>
              </div>
            </OrangCardProfile>
            <OrangCardProfile>
              <div>
                <svg>
                  <use href={`${sprite}#icon-daily-dumbbell`}></use>
                </svg>
                <p>Daily norm of sports</p>
              </div>
            </OrangCardProfile>
          </WrapperDaily>
          <Nottice />
          {/* <TestAvatar /> */}
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
