import styled from "styled-components";

export const StyledRegisterForm = styled.div`
  background-color: black;
  min-height: 100dvh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  #astronaut {
    color: royalblue;
    height: 6rem;
    width: 6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #h1-div-header {
    font-size: 22px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    /* width: 90%; */
  }
  form {
    margin-top: 2rem;
    background-color: rgb(21, 21, 21);
    min-height: 60dvh;
    height: fit-content;
    width: 28rem;
    border-radius: 10px;
    box-shadow: 0 0 1em rgb(21, 21, 21);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }

  #input-wrapper {
    display: flex;
    border-top: 1px solid rgb(51, 51, 51);
    border-bottom: 1px solid rgb(51, 51, 51);
    flex-direction: column;
    width: 90%;
    justify-content: space-evenly;
    min-height: 25dvh;
    height: fit-content;
  }
  .span-or-login {
    color: gray;
    margin-top: 1rem;
  }
  .text-field-class {
    margin: 1rem;
  }
  .alternate-auth-path {
    margin-top: 1rem;
    color: royalblue !important;
    text-decoration: underline !important;
  }
  .text-field-wrapper {
    display: flex;
    min-height: 20dvh;
    height: fit-content;
    justify-content: space-around;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    form {
      min-height: 100dvh;
      height: fit-content;
    }
  }
`;
