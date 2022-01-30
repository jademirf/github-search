import React from 'react'
import * as S from './Styled'

const Repositories = ({ }) => {
  return (
    <S.Container>
      <header>User Repositories</header>
      <S.WrapperCards>
        <S.Card>
          <h4>Repository name</h4>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
          <S.WrapperStatus>
            <div>
              <h4>Stargarzer</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Watchers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Forks</h4>
              <span>10</span>
            </div>
          </S.WrapperStatus>
          <a href="#">link para o repositório</a>
        </S.Card>
        <S.Card>
          <h4>Repository name</h4>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
          <S.WrapperStatus>
            <div>
              <h4>Stargarzer</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Watchers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Forks</h4>
              <span>10</span>
            </div>
          </S.WrapperStatus>
          <a href="#">link para o repositório</a>
        </S.Card>
      </S.WrapperCards>
    </S.Container>
  );
};

export default Repositories