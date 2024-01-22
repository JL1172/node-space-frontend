import { Alert, TextField } from "@mui/material";

export default function ThirdSection() {
  return (
    <div className="paragraph-div">
      <div className="h4-div">Write Your Blog</div>
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        id="outlined-multiline-static"
        className="text-field-class"
        sx={{
          // width: "50%",
          backgroundColor: "rgb(51,51,51)",
        }}
        multiline
        label="Intro"
        minRows={10}
      />
      <TextField
        className="text-field-class"
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        id="outlined-multiline-static"
        sx={{
          marginTop: "2rem",
          // width: "50%",
          backgroundColor: "rgb(51,51,51)",
        }}
        multiline
        label="Body"
        minRows={20}
      />
      <TextField
        className="text-field-class"
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        id="outlined-multiline-static"
        sx={{
          marginTop: "2rem",
          // width: "50%",
          backgroundColor: "rgb(51,51,51)",
        }}
        multiline
        label="Outro"
        minRows={10}
      />
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        className="text-field-class"
        id="outlined-multiline-static"
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          // width: "50%",
          backgroundColor: "rgb(51,51,51)",
        }}
        multiline
        label="Summary"
        minRows={5}
      />
      <div id="paragraph-alert">
        <Alert
          variant="outlined"
          style={{
            width: "100%",
            color: "white",
            marginBottom: "3rem",
          }}
          id="alert"
          severity="info"
        >
          Note: Summary Will Appear On Thumbnail Of Blog
        </Alert>
      </div>
    </div>
  );
}
