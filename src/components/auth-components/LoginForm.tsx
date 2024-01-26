import { Alert, Button, TextField, ThemeProvider } from "@mui/material";
import { StyledLoginForm } from "../../styles/login-form/StyledLoginForm";
import { GiAstronautHelmet } from "react-icons/gi";
import { useContext, useState } from "react";
import { AuthContext } from "./auth-form/auth-form-context/AuthContext";
import { theme } from "../form-components/blog-form/blog-form-themes/input-theme";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { RegisterProps } from "../../global-dto/g-dtos";
import { setLoadingState } from "../../redux/actions-creators/global-auth-creators";
import SpinnerLoader from "../protected-components/Spinner";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

function LoginForm(props: RegisterProps) {
  const { formData, changeHandler, login } = useContext(AuthContext);
  const [visibility, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visibility);
  };
  return props.authState.loading_state ? (
    <SpinnerLoader />
  ) : (
    <StyledLoginForm>
      {props.authState.success_message && (
        <Alert id="success-message" severity="success">
          {props.authState.success_message}
        </Alert>
      )}
      <ThemeProvider theme={theme}>
        <form onSubmit={(e) => e.preventDefault()}>
          <GiAstronautHelmet id="astronaut" />
          <div id="h1-div-header">Login To Creator's Portal</div>
          <div id="input-wrapper">
            <div className="text-field-wrapper">
              <div className="inner-text-field-wrapper">
                <TextField
                  name="login_username"
                  value={formData.login_username}
                  onChange={(e) => changeHandler(e.target.name, e.target.value)}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  label={"Username"}
                  sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor:
                          formData.log_username_err || formData.loginError
                            ? "#f44336"
                            : "white",
                      },
                    "& .MuiInputLabel-root": {
                      color:
                        formData.log_username_err || formData.loginError
                          ? "#f44336"
                          : "white",
                    },
                    "& .MuiInputLabel-shrink": {
                      color: "white",
                    },
                  }}
                  // sx={{ width: "50%" }}
                  className="text-field-class"
                />
                {(formData.log_username_err || formData.loginError) && (
                  <Alert className="alerts" variant="outlined" severity="error">
                    {formData.log_username_err || formData.loginError}
                  </Alert>
                )}
              </div>
              <div className="inner-text-field-wrapper">
                <TextField
                  type={visibility ? "text" : "password"}
                  name="login_password"
                  value={formData.login_password}
                  onChange={(e) => changeHandler(e.target.name, e.target.value)}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  label={"Password"}
                  sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor:
                          formData.log_password_err || formData.loginError
                            ? "#f44336"
                            : "white",
                      },
                    "& .MuiInputLabel-root": {
                      color:
                        formData.log_password_err || formData.loginError
                          ? "#f44336"
                          : "white",
                    },
                    "& .MuiInputLabel-shrink": {
                      color: "white",
                    },
                  }}
                  // sx={{ width: "50%" }}
                  className="text-field-class"
                />
                {(formData.log_password_err || formData.loginError) && (
                  <Alert className="alerts" variant="outlined" severity="error">
                    {formData.log_password_err || formData.loginError}
                  </Alert>
                )}
                <span onClick={() => toggle()} id="toggle-pass">
                  {!visibility ? "Show" : "Hide"}
                </span>
              </div>
              <Button
                onClick={() => login()}
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontFamily: "inherit",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  marginBottom: "1rem",
                  marginTop: "2rem",
                  height: "3rem",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "white",
                  },
                }}
                className="text-field-class"
                variant="contained"
              >
                Login
              </Button>
            </div>
          </div>
          <span className="span-or-login">or</span>
          <div className="link-wrapper">
            <Link className="alternate-auth-path" to="/creator/register">
              Register
            </Link>
            <Link to="/" className="alternate-auth-path home">
              <MdHomeFilled />
              Home
            </Link>
          </div>
        </form>
      </ThemeProvider>
    </StyledLoginForm>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    authState: state.globalAuth,
  };
};
export default connect(mapStateToProps, { setLoadingState })(LoginForm);
