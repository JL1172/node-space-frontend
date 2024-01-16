import styled from "styled-components";

export const StyledNotFound = styled.div`
  .not-found-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgb(21, 21, 21);
  }

  .not-found-content {
    text-align: center;
    color: #fff;
    padding: 40px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    max-width: 500px;
    width: 100%;
  }

  h1 {
    font-size: 3.5em;
    margin-bottom: 20px;
    font-weight: bold;
    color: rgb(60, 135, 58) /* Coral color for a pop of vibrancy */
  }

  p {
    font-size: 1.6em;
    margin-top: 0;
  }

  /* Add a subtle box-shadow for a polished look */
  .not-found-content {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
`;
