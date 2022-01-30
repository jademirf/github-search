import styled from 'styled-components'

export const Container  = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
  border: 1px solid;
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 10px;
`;

export const WrapperUserInfos  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 250px;
  min-height: 200px;
  h2 {
    font-weight: bold;
    font-size: 22px;
  }
`;

export const Avatar  = styled.img`
  border-radius: 50%;
  width: 200px;
  margin-right: 1em;
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

export const BoxUserName  = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: flex-start;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h3>a {
    color: blue;
  }
  h3>a:hover {
    text-decoration: underline;
  }
`;