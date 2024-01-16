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
    color: rgb(21, 21, 21);
    text-align: center;
  }
  .f-cat-div {
    color: rgb(21, 21, 21);
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
    color: rgb(21, 21, 21);
    &:hover {
      transform: scale(105%);
      color: white;
      transition: 100ms ease-in-out;
    }
  }
`;
