import {
  Avatar,
  Button,
  IconBtn,
  Photo,
  Subtitle,
  SvgLogoUser,
  TitleName,
  Wrapper,
  WrapperDaily,
} from './UserCard.styled';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
// import dayStatistics from '../../../resources/dayStatistics.json';

import { OrangCard } from '../OneStatistic/OneStatistic.styled';
// import { OneStatistic } from './../OneStatistic/OneStatistic';
import Nottice from './../Nottice/Nottice';
import Logout from '../Logout/Logout';

const UserCard = (user) => {
  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = <Photo src={avatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser
      fill="background: rgba(239, 237, 232, 0.1);"
      width="68"
      height="68"
    >
      <use href={`${sprite}#icon-user`}></use>
    </SvgLogoUser>
  );

  return (
    <Wrapper>
      <Avatar>{avatar ? avatarUser : avatarLogo}</Avatar>
      <Button>
        <IconBtn>
          <use href={`${sprite}#icon-plus`}></use>
        </IconBtn>
      </Button>
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
      <WrapperDaily>
        <OrangCard
          style={{
            width: '214px',
            height: '108px',
          }}
        >
          <p>Daily calorie intake</p>
        </OrangCard>
        <OrangCard
          style={{
            width: '214px',
            height: '108px',
          }}
        >
          <p>Daily norm of sports</p>
        </OrangCard>
      </WrapperDaily>
      <Nottice />
      <Logout />
    </Wrapper>
  );
};

export default UserCard;
