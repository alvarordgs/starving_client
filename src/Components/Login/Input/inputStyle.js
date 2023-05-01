import styled from  'styled-components';

export const InputCustomizado = styled.input`
  min-width: 350px;
  padding: 16px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background: #f7f7f7;
  &:focus {
      outline: none;
  }

  input::placeholder {
      font-size: 12px;
      opacity 0.7;
  }
`