import styled, { keyframes } from "styled-components";
const spinAnimation = keyframes`
100% {
  transform: rotate(360deg);
}
`
export const StyledContentLanding = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  #node-wrapper {
    display: flex;
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    padding-top: 5rem;
    h1 {
      font-size: 3.8rem;
    }
  }
  img {
    width: 12rem;
    height: 10rem;
    animation: ${spinAnimation} 20s linear infinite;
  }

  @media screen and (max-width: 1600px) {
    img {
      width: 14rem;
      height: 10rem;
    }
  }
  @media screen and (max-width: 1050px) {
    #node-wrapper {
      h1 {
        font-size: 3rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    img {
      width: 8rem;
      height: 7rem;
    }
    #node-wrapper {
      padding: 2.5dvw;
      h1 {
        font-size: 2.5rem;
      }
    }
  }
  @media screen and (max-width: 660px) {
    img {
      width: 8rem;
      height: 7rem;
    }
    #node-wrapper {
      padding: 0;
      padding-left: 2dvw;
      padding-right: 2dvw;
      h1 {
        font-size: 7dvw;
      }
    }
  }
  @media screen and (max-width: 530px) {
    img {
      width: 8rem;
      height: 7rem;
    }
    #node-wrapper {
      padding: 0;
      padding-left: 2dvw;
      padding-right: 2dvw;
      h1 {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 5rem;
      height: 5rem;
    }
    #node-wrapper {
      padding: 0;
      padding-left: 2dvw;
      padding-top: 2rem;
      padding-right: 2dvw;
      h1 {
        font-size: 7.5dvw;
      }
    }
  }
`;
