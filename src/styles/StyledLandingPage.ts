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
  min-height: 40dvh;
  display: flex;
  flex-direction: column;
  padding-bottom: 20dvh;
  border-bottom: 2px solid rgb(51, 51, 51);
  #header {
    font-weight: bold;
    padding-left: 5dvw;
    padding-top: 3dvw;
  }
`;
