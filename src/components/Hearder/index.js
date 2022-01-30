import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './Styled';

const Header = () => {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {

    if(!usernameForSearch) return;

    getUser(usernameForSearch)
  }

  return (
    <S.Wrapper>
      <input 
        type="text" 
        name="search" 
        placeholder="type username to search"
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
      <input type="button" value="Search" onClick={submitGetUser} />
    </S.Wrapper>
  )
}

export default Header;