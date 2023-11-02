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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import { useGetCurrentUserQuery } from '../../redux/features/authEndpoints';

axios.defaults.baseURL = 'https://power-plus-service.onrender.com';

const UserCard = ({ name }) => {
  const fileInputRef = useRef(null);

  const [newAvatar, setNewAvatar] = useState(null);
  const token = useSelector(selectToken);
  const [loadedAvatar, setLoadedAvatar] = useState(null);
  const { data } = useGetCurrentUserQuery();

  const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setNewAvatar(file);
  };

  useEffect(() => {
    const handleUpdateAvatar = async () => {
      if (newAvatar) {
        try {
          const formData = new FormData();
          formData.append('avatar', newAvatar);
          setToken(token);
          const { data } = await axios.patch('/users/avatars', formData, {
            headers: { 'content-type': 'multipart/form-data' },
          });

          setLoadedAvatar(data.avatarURL);
        } catch (error) {
          console.error('Error updating avatar', error);
        }
      }
    };
    handleUpdateAvatar();
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
