import { connect } from "react-redux";
import { RootState } from "./redux/reducers/root-reducers";
import { AppProps } from "./global-dto/g-dtos";
import { StyledApp } from "./styles/StyledApp";
import LandingPage from "./components/landing-page-components/LandingPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import PageNotFound from "./components/error-handling-components/PageNotFound";
import ContactForm from "./components/form-components/ContactForm";
import LoginForm from "./components/auth-components/LoginForm";
import RegisterForm from "./components/auth-components/RegisterForm";
import { AuthContext } from "./components/auth-components/auth-form/auth-form-context/AuthContext";
import {
  initialState,
  useForm,
} from "./components/auth-components/auth-form/auth-form-custom-hooks/useForm";
import ProtectedRoute from "./components/protected-components/ProtectedRoute";
import {
  initiateLogout,
  setLoadingState,
  setSuccessMessage,
} from "./redux/actions-creators/global-auth-creators";
import { useEffect } from "react";
import { Alert } from "@mui/material";

function App(props: AppProps) {
  const { initiateLogout } = props;
  const nav = useNavigate();
  const [
    formData,
    changeHandler,
    changePage,
    verifyFull,
    verifyUsername,
    verifyEmail,
    verifyPassword,
    login,
  ] = useForm(
    initialState,
    nav,
    props.setLoadingState,
    props.setSuccessMessage
  );
  useEffect(() => {
    // const handleBeforeUnload = async (e: Event) => {
    //   e.preventDefault();
    //   await initiateLogout();
    //   localStorage.clear();
    // };
    // window.addEventListener("beforeunload", handleBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, [initiateLogout]);
  return (
    <StyledApp>
      {props.authState.jwt_error && (
        <Alert severity="error">{props.authState.jwt_error}.</Alert>
      )}
      <AuthContext.Provider
        value={{
          formData,
          changeHandler,
          changePage,
          verifyFull,
          verifyUsername,
          verifyEmail,
          verifyPassword,
          login,
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/creator/blog-form" element={<ProtectedRoute />} />
          <Route path="/creator/login" element={<LoginForm />} />
          <Route path="/creator/register" element={<RegisterForm />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthContext.Provider>
    </StyledApp>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    authState: state.globalAuth,
  };
};
export default connect(mapStateToProps, {
  setLoadingState,
  initiateLogout,
  setSuccessMessage,
})(App);
