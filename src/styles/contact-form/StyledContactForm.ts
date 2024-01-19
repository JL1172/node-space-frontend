import styled from "styled-components";

export const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  height: fit-content;
  #outer-wrapper {
    border: 1px solid rgb(51, 51, 51);
    display: flex;
    min-height: 85dvh;
    height: fit-content;
    width: 87%;
    box-shadow: 0 0 0.4em rgb(51, 51, 51);
  }
  #first-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    min-height: 90dvh;
    height: fit-content;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    border-right: 1px solid rgb(51, 51, 51);
  }
  .select-input {
    margin-top: 2rem;
  }
  .form-inputs {
    width: 90%;
  }
  .alerts {
    width: 90%;
    position: sticky;
  }
  .spans {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  #home-return-icon {
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 5rem;
    justify-content: space-evenly;
    transition: 100ms ease-in-out;
    border-radius: 10rem;
    outline: 1px solid rgb(51, 51, 51);
    &:hover {
      color: dodgerblue;
      transition: 100ms ease-in-out;
    }
    &:active {
      background-color: rgb(51, 51, 51);
    }
  }
  #second-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #contact-us {
      font-size: 40px;
      font-weight: bold;
      font-family: "Fira Code", monospace;
    }
    img {
      width: 35rem;
      border-radius: 10rem;
    }
  }
  @media screen and (max-width: 1360px) {
    #outer-wrapper {
      width: 95%;
    }
    #second-box {
      img {
        width: 30rem;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    #second-box {
      img {
        width: 28rem;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    #outer-wrapper {
      flex-direction: column-reverse;
      min-height: 140dvh;
      height: fit-content;  
    }
    #first-box{
      width: 100%;
      margin-top: 3rem;
      border:0;
      border-top: 1px solid rgb(51, 51, 51);
    }
    #second-box {
      width: 100%;
      border: 0;
    }
  }
  @media screen and (max-width: 500px) {
    #button {
      width: 85%;
    }
    #home-return-icon {
      position: sticky;
      background-color: rgb(21,21,21);
      z-index: 5;
      width: 90%;
      justify-content: center;
      height: 2rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
      div {
        margin-left: 1rem;
      }
    }
    #first-box {
      min-height: 100dvh;
    }
    .spans{
      margin-bottom: 2rem;
    }
    #second-box {
      padding-top: 1rem;
      img {
        width: 90%;
      }
    }
  }
`;
