import styled from "styled-components";

export const StyledCategory = styled.div`
  margin-top: 6rem;
  border-top: 1px solid rgb(51, 51, 51);
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  #h1-div {
    width: 100%;
    display: flex;
    align-items : center;
    padding-left: 5rem;
    font-size: 24px;
    height: 10dvh;
    border-bottom: 1px solid rgb(51, 51, 51);
  }
  #cat-wrapper {
    min-height: 75dvh;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
  }
  .cat-divs {
    border: 1px solid rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    height: 55dvh;
  }
  .cat-icons {
    width: 10rem;
    height: 10rem;
  }
  .cat-desc {
  }
  .cat-head {
    font-weight: bold;
    font-size: 24px;
  }
`;
