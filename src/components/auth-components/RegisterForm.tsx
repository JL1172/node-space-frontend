import { Button, TextField, ThemeProvider } from "@mui/material";
import { StyledLoginForm } from "../../styles/login-form/StyledLoginForm";
import { GiAstronautHelmet } from "react-icons/gi";
import { theme } from "./login-form/login-form-themes/input-themes";

export default function RegisterForm() {
  return (
    <StyledLoginForm>
      <ThemeProvider theme={theme}>
        <form>
          <GiAstronautHelmet id="astronaut" />
          <div id="h1-div-header">Login To Creator's Portal For Node-Space</div>
          <div id="input-wrapper">
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
            />
          </div>
          <Button
            sx={{
              bgcolor: "white",
              color: "black",
              fontFamily: "inherit",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginBottom: "1rem",
              marginTop: "2rem",
              height: "3rem",
              width: "50%",
              "&:hover": {
                bgcolor: "transparent",
                color: "white",
              },
            }}
            id="button"
            variant="contained"
          >
            Login
          </Button>
          <a href = "/creator/register">Register</a>
        </form>
      </ThemeProvider>
    </StyledLoginForm>
  );
}
