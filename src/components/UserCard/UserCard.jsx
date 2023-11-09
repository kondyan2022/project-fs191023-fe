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
import { useRef } from 'react';
import {
  useGetCurrentUserQuery,
  useUploadUserAvatarMutation,
} from '../../redux/features/authEndpoints';

const UserCard = ({ name }) => {
  const fileInputRef = useRef(null);

  const [uploadOnRender, setUploadOnRender] = useState(null); // my fix
  const { data } = useGetCurrentUserQuery();
  const [loadAvatar, { isSuccess, isError, error }] =
    useUploadUserAvatarMutation();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const urlAvatar = URL.createObjectURL(file);

      setUploadOnRender(urlAvatar);
      loadAvatar(file);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const avatarUser = (
    <Photo
      src={uploadOnRender ? uploadOnRender : data?.avatarURL}
      width="100%"
      alt="Avatar"
    />
  );
  // const avatarLogo = (
  //   <SvgLogoUser fill="var(--accent-color-user-ava)" width="62" height="62">
  //     <use href={`${sprite}#icon-user`}></use>
  //   </SvgLogoUser>
  // );

  return (
    <Wrapper>
      {isError && <p>{error.data.message}</p>}

      <Avatar>{avatarUser}</Avatar>
      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
          ref={fileInputRef}
        />
        <Button onClick={openFileInput}>
          <IconBtn>
            <use href={`${sprite}#icon-plus`}></use>
          </IconBtn>
        </Button>
      </form>
      <TitleName>{name}</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};

export default UserCard;
