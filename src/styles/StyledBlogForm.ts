import styled from "styled-components";

export const StyledBlogForm = styled.div`
  min-height: 100dvh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    min-height: 120dvh;
    height: fit-content;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 2rem;
    width: 80%;
    border: 2px solid rgb(51, 51, 51);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  #h1-div {
    font-size: 28px;
    font-weight: bold;
  }
  .first-part-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 33dvh;
    height: fit-content;
    .h4-div {
      width: 50%;
      font-size: 22px;
    }
    #last-first-div {
      width: 50%;
      height: fit-content;
      border-bottom: 1px solid rgb(51, 51, 51);
    }
  }
`;
