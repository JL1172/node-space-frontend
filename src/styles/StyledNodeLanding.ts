import styled, { keyframes } from "styled-components";

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
export const StyledNodeLanding = styled.div`
  margin-top: 5rem;
  border-top: 1px solid rgb(51, 51, 51);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
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
  .spn {
    font-family: "Fira Code", monospace;
    background-color: rgb(51, 51, 51);
  }
  .heading {
    width: 100%;
    font-size: 28px;
    margin-bottom: 10px;
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
  #desc-wrapper {
    min-height: 50dvh;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 3rem;
  }
  .div-cards {
    margin: 1rem;
    border: 1px solid rgb(51, 51, 51);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    min-height: 60dvh;
    height: fit-content;
    transition: 0.2s ease-in-out;
    flex-wrap: wrap-reverse;
  }
  .div-one {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
  #div-card-3 {
    width: 100%;
    flex-wrap: wrap-reverse;
    .heading {
      font-size: 40px;
      font-weight: bold;
    }
    .desc-w {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 1000px) {
    .div-one {
      width: 100%;
    }
    #div-card-3 {
      width: 100%;
      flex-wrap: wrap-reverse;
      .heading {
        width: 100%;
        font-size: 40px;
        font-weight: bold;
      }
      .desc-w {
        width: 100%;
        font-size: 26px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .div-one {
      padding: 0;
    }
    #h1-div {
      padding: 0;
      justify-content: center;
    }
  }
`;
