import { useState } from 'react';
import {
  Avatar,
  Button,
  IconBtn,
  Photo,
  Subtitle,
  TitleName,
  Wrapper,
} from './UserCard.styled';
import sprite from '../../images/sprite.svg';
import { useRef } from 'react';
import {
  useGetCurrentUserQuery,
  useUploadUserAvatarMutation,
} from '../../redux/features/authEndpoints';
import { RotatingLines } from 'react-loader-spinner';

const UserCard = ({ name }) => {
  const fileInputRef = useRef(null);

  // const [uploadOnRender, setUploadOnRender] = useState(null); // my fix
  const [isPhotoFetching, setIsPhotoFetching] = useState(null);

  const { data, isFetching } = useGetCurrentUserQuery();
  const [loadAvatar, { isError, error }] = useUploadUserAvatarMutation();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // const urlAvatar = URL.createObjectURL(file); // зіставляє урл адресу з поточної машини, хоч то сервер хоч локальна машина
      setIsPhotoFetching(true);
      // setUploadOnRender(urlAvatar);
      loadAvatar(file)
        .unwrap()
        .then()
        .catch()
        .finally(() => {
          setIsPhotoFetching(false);
        });
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const avatarUser = <Photo src={data?.avatarURL} width="100%" alt="Avatar" />;

  return (
    <Wrapper>
      {isError && <p>{error.data.message}</p>}

      <Avatar>
        {isPhotoFetching || isFetching ? (
          <RotatingLines
            strokeColor="#e6533c"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        ) : (
          avatarUser
        )}
      </Avatar>
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
