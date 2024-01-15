import styled from "styled-components";

export const StyledSearchBar = styled.div`
  min-height: 30dvh;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  #searchContainer {
    position: relative;
  }
  #searchIcon {
    position: absolute;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    right: 1rem;
    top: 9px;
  }
  #search {
    width: 40rem;
    background-color: rgb(51, 51, 51);
    border: none;
    color: rgb(172, 172, 172);
    height: 2.8rem;
    border-radius: 2rem;
    padding-left: 10px;
    transition: .5s ease-in-out;
    &:hover {
      outline: none;
      border: none;
      outline: 1px solid white;
      transition: .5s ease-in-out;
    }
    &:focus {
      outline: none;
      border: none;
      outline: 1px solid white;
      transition: .5s ease-in-out;
    }
  }
  #button {
    margin-left: 0.7rem;
    margin: 1rem;
  }
  img {
    height: 15dvh;
    right: 1rem;
  }

@media screen and (max-width: 1066px) {
  #search {
    width: 30rem;

  }
  /* #button {
    width: 20dvw;
  } */
}

@media screen and (max-width: 860px) {
  img {
    display: none;
  }
  #search {
    width: 68dvw;

  }
  #button {
    width: 20dvw;
  }
}
`;
