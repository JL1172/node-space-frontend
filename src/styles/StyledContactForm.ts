import styled from "styled-components";

export const StyledContactForm = styled.div`
  display: flex;
  min-height: 100dvh;
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  #io-icon {
    position: absolute;
    left: .5rem;
    top: 1rem;
    display: flex;  
    align-items: center;
    justify-content: space-evenly;
    width: 12%;
    height: 5%;
    transition: 100ms ease-in-out;
    cursor: pointer;
    border-radius: 10rem;
    &:hover{
      color: #FB542D;
      transition: 100ms ease-in-out;
      outline: 1px solid rgb(51, 51, 51);
    }
    &:active {
      background-color: rgb(51, 51, 51);
    }
    div {
      font-size: 14px;
    }
  }
  #second-wrapper-cf {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70dvh;
    width: 50%;
    align-items: center;
    img {
      border-radius: 100%;
      width: 35rem;
    }
  }
  .h1-div-cf {
    font-size: 40px;
    font-family: "Fira Code", monospace;
    margin: 2rem;
  }
  #form-wrapper {
    border: 1px solid rgb(51, 51, 51);
    height: fit-content;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  form {
    position: relative;
    width: 50%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 75dvh;
    height: fit-content;
    padding-bottom: 2rem;
    border-right: 1px solid rgb(51, 51, 51);
    .text-field-class-div {
      width: 70%;
      margin-bottom: 2rem;
    }
    .text-field-class {
      margin-top: 1rem;
      width: 70%;
      margin-bottom: 2rem;
    }
  }
  #button {
    width: 70%;
  }
  @media screen and (max-width: 1280px) {
    #form-wrapper {
      flex-direction: column-reverse;
      width: 95%;
      align-items: center;
      form,
      #second-wrapper-cf {
        width: 90%;
        border: none;
      }
    }
    form {
      min-height: 85dvh;
      height: fit-content;
    }
    #second-wrapper-cf {
      border-bottom: 1px solid rgb(51, 51, 51) !important;
      /* img {
        width: 50%;
      } */
    }
  }
  @media screen and (max-width: 900px) {
    #io-icon {
      width: 20%;
      height: 3.4%;
    }
    #button {
        width: 95%;
    }
    #form-wrapper {
        width: 95%;

    }
    form {
      min-height: 90dvh;
      height: fit-content;
        .text-field-class, .text-field-class-div {
            width: 98%;
        }
    }
    #second-wrapper-cf, form {
        width: 100%;
    }
    #second-wrapper-cf {
    }
  }
  @media screen and (max-width: 500px) {
    form {
      min-height: 100dvh;
      height: fit-content;
      padding: 1rem;
      .text-field-class {
        margin-top: 3rem;
      }
      .text-field-class-div {
        margin-top: 3rem;
      }
    }
    #second-wrapper-cf {
        justify-content: center;
        img {
            width: 26rem;
        }
    }
  }
  @media screen and (max-width: 490px) {
    #second-wrapper-cf {
        img {
            width: 80%;
            margin-bottom: 2rem;
        }
    }
  }
  @media screen and (max-width: 320px) {
    #second-wrapper-cf {
        padding: 1rem;
        img {
            width: 75%;

        }
    }
  }
`;
