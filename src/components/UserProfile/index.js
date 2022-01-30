import React from 'react';
import * as S from './Styled'

const UserProfile = ({ }) => {
  return (
    <S.Container>
      <S.Avatar src="https://avatars.githubusercontent.com/u/6626665?v=4" alt="user profile avatar" />
      <S.WrapperUserInfos>
        <div>
          <h2>Nome do usuário</h2>
          <S.BoxUserName>
            <h3>username: <a href="#">jademirf</a></h3>
          </S.BoxUserName>
        </div>
        <S.WrapperStatus>
          <div>
            <h4>Followers</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>10</span>
          </div>
        </S.WrapperStatus>
      </S.WrapperUserInfos>
    </S.Container>
  );
};

export default UserProfile