import React from 'react';
import * as S from './Styled'
import CardRepository from '../CardRepository'

const Starred = ( {} ) => {
  const data = {
    name: 'nome do repositório',
    link: 'https://github.com/users/jademirf'
  }
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