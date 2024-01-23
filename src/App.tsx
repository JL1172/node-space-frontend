import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "./redux/reducers/root-reducers";
import { fetch_endpoint } from "./redux/actions-creators/sanity";
import { AppProps } from "./global-dto/g-dtos";
import { StyledApp } from "./styles/StyledApp";
import LandingPage from "./components/landing-page-components/LandingPage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/error-handling-components/PageNotFound";
import BlogForm from "./components/form-components/BlogForm";
import ContactForm from "./components/form-components/ContactForm";
import LoginForm from "./components/auth-components/LoginForm";
import RegisterForm from "./components/auth-components/RegisterForm";

function App(props: AppProps) {
  useEffect(() => {
    // props.fetch_endpoint();
  }, []); //eslint-disable-line
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/creator/blog-form" element={<BlogForm />} />
        <Route path="/creator/login" element={<LoginForm />} />
        <Route path="/creator/register" element={<RegisterForm />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </StyledApp>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    landing_page: state.sanity,
  };
};
export default connect(mapStateToProps, { fetch_endpoint })(App);
