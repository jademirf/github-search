import React, {useEffect} from 'react';
import useGithub from '../../hooks/github-hooks'
import * as S from './Styled'

const UserProfile = () => {

  const { githubState } = useGithub();

  useEffect(() => {
    console.log(githubState)
  },[githubState])

  return (
    <S.Container>
      <S.Avatar src={githubState.user.avatar} alt="user profile avatar" />
      <S.WrapperUserInfos>
        <div>
          <h2>{githubState.user.name}</h2>
          <S.BoxUserName>
            <h3>username: <a href={githubState.user.html_url}>{githubState.user.login}</a></h3>
          </S.BoxUserName>
        </div>
        <S.WrapperStatus>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
        </S.WrapperStatus>
      </S.WrapperUserInfos>
    </S.Container>
  );
};

export default UserProfile