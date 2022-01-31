import styled, { createGlobalStyle } from 'styled-components';

export default function Button({ content }) {
    return <StyledButton>
        {content}
    </StyledButton>
}

const StyledButton = styled.button`
background: linear-gradient(to right, #004524, #34C924 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  &:active{
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #696969;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
`;