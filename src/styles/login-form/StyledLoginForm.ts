import styled from "styled-components";

export const StyledLoginForm = styled.div`
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
  #success-message {
    position: fixed;
    top: 0;
    width: 100%;
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
    width: 100%;
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
  .inner-text-field-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    position: relative;
  }
  .link-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .home {
    color: gray !important;
    display: flex;
    align-items: center;
  }
  .alerts {
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
  }
  #toggle-pass {
    position: absolute;
    right: 0;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    &:hover {
      color: royalblue;
      text-decoration: underline;
      transition: 100ms;
    }
  }

  @media screen and (max-width: 500px) {
    form {
      margin: 0;
      border-radius: 0;
      min-height: 100dvh;
      height: fit-content;
    }
  }
`;
