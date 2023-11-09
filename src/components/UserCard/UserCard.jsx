import { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import {
  useGetCurrentUserQuery,
  useUploadUserAvatarMutation,
} from '../../redux/features/authEndpoints';

const UserCard = ({ name }) => {
  const fileInputRef = useRef(null);

  const [newAvatar, setNewAvatar] = useState(null);
  const token = useSelector(selectToken);
  const [loadedAvatar, setLoadedAvatar] = useState(null);
  const { data } = useGetCurrentUserQuery();
  const [loadAvatart, { isSuccess, isError, error }] =
    useUploadUserAvatarMutation();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setNewAvatar(file);
  };

  useEffect(() => {
    console.log(newAvatar);
    if (newAvatar) {
      loadAvatart(newAvatar);
      isSuccess && setLoadedAvatar(data.avatarURL);
    }
  }, [newAvatar, token]);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const avatarUser = (
    <Photo
      src={loadedAvatar ? loadedAvatar : data?.avatarURL}
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
