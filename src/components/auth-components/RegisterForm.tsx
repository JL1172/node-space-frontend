import { ThemeProvider } from "@mui/material";
import { GiAstronautHelmet } from "react-icons/gi";
import { StyledRegisterForm } from "../../styles/register-form/StyledRegisterForm";
import FullNameInput from "./auth-form/FullName";
import UsernameInput from "./auth-form/Username";
import EmailInput from "./auth-form/Email";
import PasswordInput from "./auth-form/Password";
import { useContext } from "react";
import { AuthContext } from "./auth-form/auth-form-context/AuthContext";
import { Link } from "react-router-dom";
import { theme } from "../form-components/blog-form/blog-form-themes/input-theme";

export default function RegisterForm() {
  const {
    formData,
  } = useContext(AuthContext);
  return (
    <StyledRegisterForm>
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
          <Link to = "/creator/login" className="alternate-auth-path">
            Login
          </Link>
        </form>
      </ThemeProvider>
    </StyledRegisterForm>
  );
}
