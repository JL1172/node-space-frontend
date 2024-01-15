import styled from "styled-components";
import {keyframes} from 'styled-components';

const onLoad = keyframes`
100% {
  opacity :1;
}
`
export const StyledLandingPage = styled.div`
  opacity: 0;
  animation: ${onLoad} .8s ease-in-out forwards;
  height: fit-content;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  #header {
    font-weight: bold;
    padding-left: 5dvw;
    padding-top: 3dvw;
  }
`;
