import {
  Avatar,
  Button,
  IconBtn,
  Photo,
  Subtitle,
  SvgLogoUser,
  TitleName,
  Wrapper,
} from './UserCard.styled';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';

const UserCard = (user) => {
  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = <Photo src={avatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser fill="var( --accent-color-user-ava)" width="62" height="62">
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
    </Wrapper>
  );
};

export default UserCard;
