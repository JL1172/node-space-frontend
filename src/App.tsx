import React, { ReactPropTypes, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "./redux/reducers/root-reducers";
import { fetch_endpoint } from "./redux/actions-creators/sanity";
import { AppProps } from "./global-dto/g-dtos";
import { StyledApp } from "./styles/StyledApp";
import LandingPage from "./components/LandingPage";

function App(props: AppProps) {
  useEffect(() => {
    props.fetch_endpoint();
  },[])
  return (
    <StyledApp>
      <LandingPage />
    </StyledApp>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    landing_page: state.sanity
  }
}
export default connect(mapStateToProps,{fetch_endpoint})(App);
