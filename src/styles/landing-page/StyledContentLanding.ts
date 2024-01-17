import styled, { keyframes } from "styled-components";
const spinAnimation = keyframes`
25% {
  transform: translateY(1rem) rotate(5deg);
}
50% {
  transform: translateY(-1rem) rotate(0deg);
}
75% {
  transform: translateY(1.2rem) rotate(-5deg);
}
100% {
  transform: translateY(1rem) rotate(5deg);
}
`;
const writer = keyframes`
100% {
  opacity: 1;
}
`;
const changeColor2 = keyframes`
from {
  color : white;
} 
to {
  color: rgb(60, 135, 58);
}
`;

export const StyledContentLanding = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .writer {
    opacity: 0;
    color: white;
    animation: ${writer} 1s ease-in-out forwards,
      ${changeColor2} 5s linear infinite;
    font-family: "Fira Code", monospace;
  }
  .one {
    animation-delay: 150ms;
  }
  .two {
    animation-delay: 200ms;
  }
  .three {
    animation-delay: 250ms;
  }
  .four {
    animation-delay: 300ms;
  }
  .five {
    animation-delay: 350ms;
  }
  .six {
    animation-delay: 400ms;
  }
  #node-wrapper {
    position: relative;
    display: flex;
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    padding-top: 5rem;
    h1 {
      font-size: 3.8rem;
      z-index: 10;
      animation: ${writer} 1s ease-in-out forwards,
    }
  }
  img {
    width: 12rem;
    height: 10rem;
    border-radius: 10rem;
    animation: ${spinAnimation} 10s linear infinite alternate;
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
      width: 9rem;
      height: 8rem;
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
      border-radius: 10rem;
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
