import styled, { keyframes } from "styled-components";

const colorChanger1 = keyframes`
from {
  color: white;
}
to {
  color: #E0234E;
}
`;
const colorChanger2 = keyframes`
from {
  color: white;
}
to {
  color: rgb(97, 219, 251);
}
`;
const colorChanger3 = keyframes`
from {
  color: white;
}
to {
  color: #0064a5;
}
`;
const slideRight = keyframes`
100%{
  transform: translateX(100dvw);
  opacity: 1;
}
`
const slideLeft = keyframes`
100% {
  transform: translateX(-100dvw);
  opacity: 1;
}
`

export const StyledCategory = styled.div`
  border-top: 1px solid rgb(51, 51, 51);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 9rem;
  .injection-site-hidden::before {
    content: "";
    position: absolute;
    outline: 2px solid white;
    box-shadow: 0 0 1em white;
    border-radius: 5rem;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
  .injection-site-shown::before {
    content: "";
    position: absolute;
    outline: 2px solid white;
    box-shadow: 0 0 1em white;
    border-radius: 5rem;
    width: 2rem;
    bottom: 0;
    animation: ${slideRight} 2s ease-in-out forwards;
    /* animation-iteration-count: 2; */
  }
  .injection-site-hidden::after {
    content: "";
    position: absolute;
    outline: 2px solid white;
    box-shadow: 0 0 1em white;
    border-radius: 5rem;
    top: 0;
    width: 2rem;
    right: 0;
    opacity: 0;
  }
  .injection-site-shown::after {
    content: "";
    position: absolute;
    outline: 2px solid white;
    box-shadow: 0 0 1em white;
    border-radius: 5rem;
    top: 0;
    right: 0;
    animation: ${slideLeft} 2s ease-in-out forwards;
  }
  .button-div {
    width: 100%;
  }
  #h1-div {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5rem;
    font-size: 30px;
    height: 10dvh;
    border-bottom: 1px solid rgb(51, 51, 51);
  }
  #cat-wrapper {
    min-height: 75dvh;
    height: fit-content; 
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
  }
  .cat-divs {
    width: 27dvw;
    margin: 1rem;
    outline: 1px solid rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    min-height: 60dvh;
    height: fit-content;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 1em rgb(51, 51, 51);
      transition: 0.2s ease-in-out;
    }
  }
  .div-1 {
    &:hover {
      .cat-head {
        animation: ${colorChanger1} 0.4s ease-in-out forwards;
      }
    }
  }
  .div-2 {
    &:hover {
      .cat-head {
        animation: ${colorChanger2} 0.4s ease-in-out forwards;
      }
    }
  }
  .div-3 {
    &:hover {
      .cat-head {
        animation: ${colorChanger3} 0.4s ease-in-out forwards;
      }
    }
  }
  .cat-icons {
    width: 10rem;
    height: 10rem;
  }
  .cat-head {
    font-family: "Fira Code", monospace;
    font-weight: bold;
    font-size: 24px;
    width: 100%;
  }
  @media screen and (max-width: 1460px) {
    .cat-divs {
      width: fit-content;
      height: fit-content;
    }
  }
  @media screen and (max-width: 500px) {
    .cat-desc {
      margin-bottom: 1.5rem;
    }
    .cat-head {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    #cat-wrapper {
      width: 100%;
      margin-top: 2rem;
    }
    #h1-div {
      padding: 0;
      justify-content: center;
    }
    .div-1 {
      margin-top: 2rem;
    }
    .div-1, .div-2 {
      margin-bottom: 2rem;
    }
  }
`;
