import styled from 'styled-components'


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid;
  margin: 1em;
  padding: 1em;
  border-radius: 10px;
`;

export const CardDetails  = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  div {
    text-align: center;
  }
`;