import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid;
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 10px;
  width: 100%;
`;
export const WrapperCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid;
  padding: 1em;
  border-radius: 10px;
  width: 100%;
`;

export const WrapperStatus  = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  div {
    text-align: center;
  }
`;