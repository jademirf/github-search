import React from 'react'
import * as S from './Styled'
import CardRepository from '../CardRepository'

const Repositories = () => {
  return (
    <S.Container>
      <header>User Repositories</header>
      <S.WrapperCards>
        <CardRepository></CardRepository>
        <CardRepository></CardRepository>
      </S.WrapperCards>
    </S.Container>
  );
};

export default Repositories