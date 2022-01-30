import React from 'react';
import * as S from './Styled'

const CardRepository = ({name}) => {
  return <S.Card>
    <h4>Repository name {name}</h4>
    <p>lorem ipsum dolor sit amet, consectetur adip</p>
    <S.CardDetails>
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
    </S.CardDetails>
    <a href="https://www.google.com">link para o repositório</a>
  </S.Card>;
}

export default CardRepository;