import { Alert, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { RegisterContext } from "./register-form-context/RegisterContext";

export default function UsernameInput() {
  const { formData, changeHandler, changePage, verifyUsername } =
    useContext(RegisterContext);
  return (
    <div className="text-field-wrapper">
      <div className="inner-text-field-wrapper">
        <TextField
          name="username"
          value={formData.username}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          label={"Username"}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Object.keys(formData.usernameErrorMessage[0].username).length >
                0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                Object.keys(formData.usernameErrorMessage[0].username).length >
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
         {Object.keys(formData.usernameErrorMessage[0].username).length > 0 && (
          <Alert className="alerts" variant="outlined" severity="error">
            {typeof formData.usernameErrorMessage[0].username !== "string" &&
              Object.values(formData.usernameErrorMessage[0].username).map(
                (n: any, i: number) => {
                  return <div key={i}>{n}</div>;
                }
              )}
            {typeof formData.usernameErrorMessage[0].username === "string" &&
              formData.usernameErrorMessage[0].username}
          </Alert>
        )}
      </div>
      <Button
        onClick={() => changePage(0)}
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
        onClick={() => verifyUsername()}
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
        Next
      </Button>
    </div>
  );
}
