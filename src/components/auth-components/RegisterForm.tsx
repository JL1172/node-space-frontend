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

export default function RegisterForm() {
  const [formData, changeHandler, changePage, verifyFull] = useForm(initialState);

  return (
    <StyledRegisterForm>
      <RegisterContext.Provider value={{ formData, changeHandler, changePage, verifyFull }}>
        <ThemeProvider theme={theme}>
          <form>
            <GiAstronautHelmet id="astronaut" />
            <div id="h1-div-header">Register For A Creator's Account</div>
            <div id="input-wrapper">
              {formData.pageNumber === 0 && <FullNameInput />}
              {/* <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Last Name"}
              // sx={{ width: "50%" }}
              className="text-field-class"
            />
            <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Email"}
              // sx={{ width: "50%" }}
              className="text-field-class"
            />
            <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Username"}
              // sx={{ width: "50%" }}
              className="text-field-class"
            />
            <TextField
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Password"}
              // sx={{ width: "50%" }}
              className="text-field-class"
            /> */}
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
