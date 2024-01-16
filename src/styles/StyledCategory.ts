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

export const StyledCategory = styled.div`
  margin-top: 6rem;
  border-top: 1px solid rgb(51, 51, 51);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  .button-div {
    width: 100%;
  }
  #h1-div {
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 5rem;
    font-size: 24px;
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
