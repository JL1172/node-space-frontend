import { Alert, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { RegisterContext } from "./register-form-context/RegisterContext";

export default function FullNameInput() {
  const { formData, changeHandler, verifyFull } = useContext(RegisterContext);
  return (
    <div className="text-field-wrapper">
      <div className="inner-text-field-wrapper">
        <TextField
          error={
            Object.values(formData.fullNameErrorMessage[0].first_name).length >
            0
          }
          name="fname"
          value={formData.fname}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Object.keys(formData.fullNameErrorMessage[0].first_name)
                  .length > 0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                Object.keys(formData.fullNameErrorMessage[0].first_name)
                  .length > 0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-shrink": {
              color: "white",
            },
          }}
          label={"First Name"}
          // sx={{ width: "50%" }}
          className="text-field-class"
        />
        {Object.keys(formData.fullNameErrorMessage[0].first_name).length >
          0 && (
          <Alert className="alerts" variant="outlined" severity="error">
            {Object.values(formData.fullNameErrorMessage[0].first_name).map(
              (n: any, i: number) => {
                return <div key={i}>{n}</div>;
              }
            )}
          </Alert>
        )}
      </div>
      <div className="inner-text-field-wrapper">
        <TextField
          error={
            Object.values(formData.fullNameErrorMessage[1].last_name).length > 0
          }
          name="lname"
          value={formData.lname}
          onChange={(e) => changeHandler(e.target.name, e.target.value)}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          label={"Last Name"}
          // sx={{ width: "50%" }}
          className="text-field-class"
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                Object.keys(formData.fullNameErrorMessage[1].last_name).length >
                0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                Object.keys(formData.fullNameErrorMessage[1].last_name).length >
                0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-shrink": {
              color: "white",
            },
          }}
        />
        {Object.keys(formData.fullNameErrorMessage[1].last_name).length > 0 && (
          <Alert className="alerts" variant="outlined" severity="error">
            {Object.values(formData.fullNameErrorMessage[1].last_name).map(
              (n: any, i: number) => {
                return <div key={i}>{n}</div>;
              }
            )}
          </Alert>
        )}
      </div>
      <Button
        onClick={() => verifyFull()}
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
