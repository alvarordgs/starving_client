import styled from  'styled-components';

export const BotaoCustomizado = styled.button`
  color: #FFF;
  font-size: 1rem;
  border: 30px;
  background-color: #3a3a3a;
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
  padding: 16px;
  cursor: pointer;

  ${props => props.disabled === false &&
    `
      &:hover {
        background-color: #323232;
      }
    `}
  ${props => props.disabled &&`
    opacity: 0.7
  `}
`