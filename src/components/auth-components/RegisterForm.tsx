import { ThemeProvider } from "@mui/material";
import { GiAstronautHelmet } from "react-icons/gi";
import { theme } from "./login-form/login-form-themes/input-themes";
import { StyledRegisterForm } from "../../styles/register-form/StyledRegisterForm";
import FullNameInput from "./register-form/FullName";
import {
  initialState,
  useForm,
} from "./register-form/register-form-hooks/useForm";
import { RegisterContext } from "./register-form/register-form-context/RegisterContext";
import UsernameInput from "./register-form/Username";
import EmailInput from "./register-form/Email";
import PasswordInput from "./register-form/Password";

export default function RegisterForm() {
  const [
    formData,
    changeHandler,
    changePage,
    verifyFull,
    verifyUsername,
    verifyEmail,
    verifyPassword,
  ] = useForm(initialState);
  return (
    <StyledRegisterForm>
      <RegisterContext.Provider
        value={{
          formData,
          changeHandler,
          changePage,
          verifyFull,
          verifyUsername,
          verifyEmail,
          verifyPassword,
        }}
      >
        <ThemeProvider theme={theme}>
          <form onSubmit={(e) => e.preventDefault()}>
            <GiAstronautHelmet id="astronaut" />
            <div id="h1-div-header">Register For A Creator's Account</div>
            <div id="input-wrapper">
              {formData.pageNumber === 0 && <FullNameInput />}
              {formData.pageNumber === 1 && <UsernameInput />}
              {formData.pageNumber === 2 && <EmailInput />}
              {formData.pageNumber === 3 && <PasswordInput />}
            </div>
            <span className="span-or-login">or</span>
            <a href="/creator/login" className="alternate-auth-path">
              Login
            </a>
          </form>
        </ThemeProvider>
      </RegisterContext.Provider>
    </StyledRegisterForm>
  );
}
