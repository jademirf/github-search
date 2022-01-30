import React from 'react';
import * as S from './Styled'

const Home = ( {children} ) => {
  return (
    <S.Container>
      <header>Page title</header>
      {children}
    </S.Container>
  );
};

export default Home