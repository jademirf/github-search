import React from 'react';
import * as S from './Styled'
import CardRepository from '../CardRepository'

const Starred = () => {

  return (
    <S.Container>
      <header>User Starred Repositories</header>
      <CardRepository
        name='nome do repositorio'
      />
    </S.Container>
  );
};

export default Starred