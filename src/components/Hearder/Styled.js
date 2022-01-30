import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  input[type=text] {
    border: 1px solid gray;
    border-radius: 5px;
    width: 100%;
    line-height: 40px;
    padding: 5px;
  }

  input[type=button] {
    background-color: #ccc;
    padding: 8px 16px;
    margin-left: 10px;
    border-radius: 5px;
  }
`;