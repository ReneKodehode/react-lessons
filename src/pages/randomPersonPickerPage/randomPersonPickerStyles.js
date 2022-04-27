import styled from "styled-components";
import { keyframes } from "styled-components";
// !!KEYFRAMES!!

const sneakIn = keyframes`
0% {
    opacity: 0;
}

20% {
    opacity: .005;
}

50% {
    opacity: 0.01;
}
100% {
    opacity: 1;
}
`;

export const PageContainer = styled.div`
  height: 100%;
  justify-content: center;
  align-content: center;
`;

export const RandomPersonBox = styled.div`
  background-color: salmon;
  font-size: 5rem;
  border: solid black 3px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  margin-top: 8rem;
`;

export const RandomText = styled.p`
  font-size: 5rem;
  opacity: 1;
  animation: ${sneakIn} ${props => props.textAnimation}4s forwards;
`;

export const StyledButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.txtColor};
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: fit-content;
  padding: 1rem;
  font-size: 1.5rem;
`;
