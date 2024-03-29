import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: rgb(51, 51, 51);
  min-height: 40dvh;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .f-divs {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    min-height: 15dvh;
    height: fit-content;
    width: fit-content;
    /* margin-left: 1rem; */
    cursor: pointer;
  }
  .f-div-head {
    font-size: 28px;
    font-weight: bold;
    color: whitesmoke;
    text-align: center;
  }
  .f-cat-div {
    color: whitesmoke;
    &:hover {
        color: white;
        transition: 100ms ease-in-out;
    }
  }
  #social-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .social-icons {
    width: 1.8rem;
    height: 1.8rem;
    color: whitesmoke;
    &:hover {
      transform: scale(105%);
      color: white;
      transition: 100ms ease-in-out;
    }
  }
  #logo {
    width: 5rem;
    border-radius: 100%;
    
  }
  @media screen and (max-width: 820px) {
    .f-divs {
       flex-grow: 2;
       margin: 2rem;
       #social-wrapper {
        width: 10rem;
       }
    }
  }
`;
