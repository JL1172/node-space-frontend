import { Alert, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "./auth-form-context/AuthContext";

export default function PasswordInput() {
  const { formData, changeHandler, changePage, verifyPassword } =
    useContext(AuthContext);
    const [visibility,setVisibility] = useState(false);
    const toggle = () => {
        setVisibility(!visibility);
    }
  return (
    <div className="text-field-wrapper">
      <div className="inner-text-field-wrapper">
        <TextField
          name="password"
          type={visibility ? "text" : "password"}
          value={formData.password}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          label={"Password"}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Object.keys(formData.passwordErrorMessage[0].password).length >
                0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                Object.keys(formData.passwordErrorMessage[0].password).length >
                0
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
        {Object.keys(formData.passwordErrorMessage[0].password).length >
          0 && (
          <Alert className="alerts" variant="outlined" severity="error">
            {Object.values(formData.passwordErrorMessage[0].password).map(
              (n: any, i: number) => {
                return <div key={i}>{n}</div>;
              }
            )}
          </Alert>
        )}
        <span onClick={()=> toggle()} id = "toggle-pass">{!visibility ? "Show" : "Hide"}</span>
      </div>
      <Button
        onClick={() => changePage(2)}
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
        Back
      </Button>
      <Button
        onClick={() => verifyPassword()}
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
        Register User
      </Button>
    </div>
  );
}
