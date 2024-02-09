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
      {formData.errors.filter((n: any) => n.blog_intro || n.blog_body || n.blog_outro || n.blog_summary)
          .length > 0 ? (
          <Alert
            variant="outlined"
            style={{
              width: "100%",
              marginTop: "1rem",
              color: "white",
              marginBottom: "3rem",
            }}
            id="alert"
            severity="error"
          >
            {formData.errors
              .filter((n: any) => n.blog_intro || n.blog_body || n.blog_outro || n.blog_summary)
              .map((n: any, i: number) => {
                return (
                  <span
                    key={i}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {n.blog_intro && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>
                          Intro Error(s)
                        </div>
                        {Object.values(n.blog_intro).map(
                          (a: any, idx: number) => {
                            return (
                              <li key={idx}>
                                {a}
                                <br />
                              </li>
                            );
                          }
                        )}
                      </div>
                    )}
                    {n.blog_body && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>
                          Body Error(s)
                        </div>
                        {Object.values(n.blog_body).map(
                          (a: any, idx: number) => {
                            return (
                              <li key={idx}>
                                {a}
                                <br />
                              </li>
                            );
                          }
                        )}
                      </div>
                    )}
                    {n.blog_outro && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>
                          Outro Error(s)
                        </div>
                        {Object.values(n.blog_outro).map(
                          (a: any, idx: number) => {
                            return (
                              <li key={idx}>
                                {a}
                                <br />
                              </li>
                            );
                          }
                        )}
                      </div>
                    )}
                    {n.blog_summary && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>
                          Summary Error(s)
                        </div>
                        {Object.values(n.blog_summary).map(
                          (a: any, idx: number) => {
                            return (
                              <li key={idx}>
                                {a}
                                <br />
                              </li>
                            );
                          }
                        )}
                      </div>
                    )}
                  </span>
                );
              })}
          </Alert>
        ) : 
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
        </Alert>}
      </div>
    </div>
  );
}
