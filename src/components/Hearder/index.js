import React from 'react'
import * as S from './Styled';

const Header = () => {
  return (
    <S.Wrapper>
      <input type="text" name="search" placeholder="type username to search" />
      <input type="button" value="Search" />
    </S.Wrapper>
  )
}

export default Header;