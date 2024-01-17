import { Alert, TextField } from "@mui/material";
import { textFieldContent } from "./blog-form-utils/textfields";

export default function FirstSection() {
  return (
    <div className="first-part-div">
      <div className="h4-div">
        First, Create A Title and Write Your Display Name
      </div>
      {textFieldContent.map((n, i) => {
        return (
          <TextField
            key={i}
            inputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
            label={n}
            // sx={{ width: "50%" }}
            className="text-field-class"
          />
        );
      })}
      <div id = "last-first-div">
      <Alert
        variant="outlined"
        style={{
          width: "100%",
          color: "white",
          marginBottom: "3rem"
        }}
        id="alert"
        severity="info"
        >
        Note: If No Display Name Is Given, Your First and Last Name Will Be Used
      </Alert>
        </div>
    </div>
  );
}
