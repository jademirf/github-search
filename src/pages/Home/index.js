import React from 'react';
import * as S from './Styled'
import Header from '../../components/Hearder'

const Home = ( {children} ) => {
  return (
    <S.Container>
      <Header/>
      {children}
    </S.Container>
  );
};

export default Home