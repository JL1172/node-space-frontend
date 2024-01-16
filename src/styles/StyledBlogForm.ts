import styled from "styled-components";

export const StyledBlogForm = styled.div`
  min-height: 160dvh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    min-height: 170dvh;
    height: fit-content;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
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
    margin-bottom: 3rem;
  }
  .first-part-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 40dvh;
    height: fit-content;
    .h4-div {
      width: 50%;
      font-size: 22px;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
    #last-first-div {
      width: 50%;
      height: fit-content;
      border-bottom: 1px solid rgb(51, 51, 51);
    }
  }
  .paragraph-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 70dvh;
    height: fit-content;
    .h4-div {
      width: 50%;
      font-size: 22px;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
  }
  #paragraph-alert {
    width: 50%;
    border-bottom: 1px solid rgb(51, 51, 51);
    margin-top: 1rem;
  }

  .media-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 25dvh;
    height: fit-content;
    .h4-div {
      width: 50%;
      font-size: 22px;
      margin-top: 2rem;
    }
    #upload-div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      min-height: 23dvh;
      height: fit-content;
      border-bottom: 1px solid rgb(51, 51, 51);
    }
  }
  #blog-upload {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .text-field-class {
    width: 50%;
    margin: 10px;
  }
  @media screen and (max-width: 1000px) {
    #paragraph-alert {
      width: 99%;
    }
    form {
      width: 99%;
    }
    .paragraph-div {
      .h4-div {
        width: 98%;
      }
    }
    .first-part-div {
      height: 50dvh;
      .h4-div{
        width: 98%;
      }
    }
    #last-first-div {
      width: 98% !important;
    }
    .text-field-class {
      width: 98%;
    }
  }
  @media screen and (max-width: 500px) {
    .paragraph-div {
      justify-content: space-around;
      .h4-div {
        margin-top: .5rem;
      }
    }
    .first-part-div {
      height: 60dvh;
      justify-content: space-around;
      .h4-div {
        margin-top: 0;
      }
    }
    /* #blog-upload {
      width: 75%;
    }
    #upload-div {
      width: 99%;
      display: flex;
      align-items: center ;    
    }
    .buttons-class {
      width: 75%;
    }
    .media-div {
      width: 99%;
      display: flex;
      align-items: center ;
      .h4-div {
        width: 98%;
        text-align: center;
      }
    } */
  }
  @media screen and (max-width: 490px) {
    .paragraph-div {
      justify-content: space-around;
      .h4-div {
        margin-top: .5rem;
      }
    }
    .first-part-div {
      height: 75dvh;
      justify-content: space-around;
      .h4-div {
        margin-top: 0;
      }
    }
    #blog-upload {
      width: 75%;
    }
    #upload-div {
      width: 99% !important;
      display: flex;
      align-items: center ;    
    }
    .buttons-class {
      width: 75%;
    }
    .media-div {
      width: 99%;
      display: flex;
      align-items: center ;
      .h4-div {
        width: 98%;
        text-align: center;
      }
    }
  }
`;
