import Container from '../../components/Container/Container';
import UserCard from '../../components/UserCard/UserCard';
import {
  OrangCardProfile,
  Span,
  Title,
  WrapperContent,
  WrapperForm,
} from './ProfilePage.styled';
import UserForm from '../../components/UserForm/UserForm';
import Logout from '../../components/Logout/Logout';
import Nottice from '../../components/Nottice/Nottice';
import { WrapperDaily } from '../../components/UserCard/UserCard.styled';
import sprite from '../../images/sprite.svg';
import { useGetCurrentUserQuery } from '../../redux/features/authEndpoints';

const ProfilePage = () => {
  const { data } = useGetCurrentUserQuery();
  const countedDSN = data?.profile?.DSN || null;
  const countedBMR = data?.profile?.BMR || null;

  return (
    <Container>
      <Title>Profile Settings</Title>
      <WrapperContent>
        <div>
          <UserCard name={data?.name} />
          <WrapperDaily>
            <OrangCardProfile>
              <div>
                <svg>
                  <use href={`${sprite}#icon-fork-knife`}></use>
                </svg>
                <p>Daily calorie intake</p>
              </div>
              <Span>{countedBMR ? countedBMR : '-'}</Span>
            </OrangCardProfile>
            <OrangCardProfile>
              <div>
                <svg>
                  <use href={`${sprite}#icon-daily-dumbbell`}></use>
                </svg>
                <p>Daily norm of sports</p>
              </div>
              <Span>{countedDSN ? countedDSN : '- '} min</Span>
            </OrangCardProfile>
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
