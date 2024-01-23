import { Alert, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { RegisterContext } from "./register-form-context/RegisterContext";

export default function EmailInput() {
  const { formData, changeHandler, changePage, verifyEmail } =
    useContext(RegisterContext);
  console.log(formData.emailErrorMessage[0].email);
  return (
    <div className="text-field-wrapper">
      <div className="inner-text-field-wrapper">
        <TextField
          name="email"
          value={formData.email}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          label={"Email"}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Object.keys(formData.emailErrorMessage[0].email).length > 0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                Object.keys(formData.emailErrorMessage[0].email).length > 0
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
        {Object.keys(formData.emailErrorMessage[0].email).length > 0 && (
          <Alert className="alerts" variant="outlined" severity="error">
            {typeof formData.emailErrorMessage[0].email !== "string" &&
              Object.values(formData.emailErrorMessage[0].email).map(
                (n: any, i: number) => {
                  return <div key={i}>{n}</div>;
                }
              )}
            {typeof formData.emailErrorMessage[0].email === "string" &&
              formData.emailErrorMessage[0].email}
          </Alert>
        )}
      </div>
      <Button
        onClick={() => changePage(1)}
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
        onClick={() => verifyEmail()}
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
