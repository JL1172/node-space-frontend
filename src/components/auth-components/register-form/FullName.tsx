import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { RegisterContext } from "./register-form-context/RegisterContext";

export default function FullNameInput() {
  const {formData,changeHandler, verifyFull } = useContext(RegisterContext);
  return (
    <div className="text-field-wrapper">
      <TextField
        name = "fname"
        value = {formData.fname}
        onChange={(e)=> changeHandler(e.target.name,e.target.value)}
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        label={"First Name"}
        // sx={{ width: "50%" }}
        className="text-field-class"
      />
      <TextField
      name = "lname"
      value = {formData.lname}
      onChange={(e)=> changeHandler(e.target.name,e.target.value)}
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        label={"Last Name"}
        // sx={{ width: "50%" }}
        className="text-field-class"
      />
      <Button
      onClick={()=>verifyFull()}
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
