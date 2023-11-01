import { useState } from 'react';
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

import sprite from '../../images/sprite.svg';
import { useUploadUserAvatarMutation } from '../../redux/features/authEndpoints';

const UserCard = ({ avatarURL, name }) => {
  const [newAvatar, setNewAvatar] = useState(avatarURL);

  const uploadAvatar = useUploadUserAvatarMutation();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setNewAvatar(file);
  };

  const handleUpdateAvatar = async () => {
    if (newAvatar) {
      try {
        const formData = new FormData();
        formData.append('avatar', newAvatar);

        const updatedUser = await uploadAvatar.mutateAsync(formData);
        setNewAvatar(updatedUser.avatarURL);
      } catch (error) {
        console.error('Error updating avatar', error);
      }
    }
  };

  const avatarUser = <Photo src={newAvatar} width="100%" alt="Avatar" />;
  const avatarLogo = (
    <SvgLogoUser fill="var( --accent-color-user-ava)" width="62" height="62">
      <use href={`${sprite}#icon-user`}></use>
    </SvgLogoUser>
  );

  return (
    <Wrapper>
      <Avatar>{newAvatar ? avatarUser : avatarLogo}</Avatar>
      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
        <label htmlFor="file-input">
          <Button onClick={handleUpdateAvatar}>
            <IconBtn>
              <use href={`${sprite}#icon-plus`}></use>
            </IconBtn>
          </Button>
        </label>
      </form>
      <TitleName>{name}</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};

export default UserCard;
