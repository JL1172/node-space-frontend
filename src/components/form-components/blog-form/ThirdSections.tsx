import { Alert, TextField } from "@mui/material";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";
import { useContext } from "react";

export default function ThirdSection() {
  const {formData, changeHandler} = useContext(FormStateContext);
  return (
    <div className="paragraph-div">
      <div className="h4-div">Write Your Blog</div>
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        id="outlined-multiline-static"
        className="text-field-class"
        name="blog_intro"
        value={formData.blog_intro}
        onChange={(e)=> changeHandler(e.target.name,e.target.value)}
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
        name="blog_body"
        value={formData.blog_body}
        onChange={(e)=> changeHandler(e.target.name,e.target.value)}
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
        name="blog_outro"
        value={formData.blog_outro}
        onChange={(e)=> changeHandler(e.target.name,e.target.value)}
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
        name="blog_summary"
        value={formData.blog_summary}
        onChange={(e)=> changeHandler(e.target.name,e.target.value)}
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
