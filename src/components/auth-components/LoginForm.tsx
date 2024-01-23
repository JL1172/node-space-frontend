import { Alert, Button, TextField, ThemeProvider } from "@mui/material";
import { StyledLoginForm } from "../../styles/login-form/StyledLoginForm";
import { GiAstronautHelmet } from "react-icons/gi";
import { theme } from "./login-form/login-form-themes/input-themes";
import { useContext, useState } from "react";
import { RegisterContext } from "./register-form/register-form-context/RegisterContext";

export default function LoginForm() {
  const { formData, changeHandler, login } = useContext(RegisterContext);
  const [visibility, setVisibility] = useState(false);
  const toggle = () => {
    setVisibility(!visibility);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("timeout ran");
  //     changeHandler("registerSuccessMessage", "");
  //   }, 2000);
  // }, []); //eslint-disable-line
  return (
    <StyledLoginForm>
      {formData.registerSuccessMessage && (
        <Alert id="success-message" variant="outlined" severity="success">
          {formData.registerSuccessMessage}
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
          <a className="alternate-auth-path" href="/creator/register">
            Register
          </a>
        </form>
      </ThemeProvider>
    </StyledLoginForm>
  );
}
