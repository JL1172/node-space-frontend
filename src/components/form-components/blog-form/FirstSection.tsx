import { Alert, TextField } from "@mui/material";
import { useContext } from "react";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";

export default function FirstSection() {
  const { formData, changeHandler } = useContext(FormStateContext);
  //blogtitle author name
  return (
    <div className="first-part-div">
      <div className="h4-div">
        First, Create A Title and Write Your Display Name
      </div>
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        label="Blog Title"
        name="blog_title"
        value={formData.blog_title}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
        // sx={{ width: "50%" }}
        className="text-field-class"
      />
      <TextField
        inputProps={{ style: { color: "white" } }}
        InputLabelProps={{ style: { color: "white" } }}
        label="Author Name"
        name="blog_author_name"
        value={formData.blog_author_name}
        onChange={(e) => changeHandler(e.target.name, e.target.value)}
        // sx={{ width: "50%" }}
        className="text-field-class"
      />
      <div id="last-first-div">
        {formData.errors.filter((n: any) => n.blog_author_name || n.blog_title)
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
              .filter((n: any) => n.blog_author_name || n.blog_title)
              .map((n: any, i: number) => {
                return (
                  <span
                    key={i}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {n.blog_author_name && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>
                          Author Name Error(s)
                        </div>
                        {Object.values(n.blog_author_name).map(
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
                    {n.blog_title && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontWeight: "bold" }}>Title Error(s)</div>
                        {Object.values(n.blog_title).map(
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
        ) : (
          <Alert
            variant="outlined"
            style={{
              width: "100%",
              marginTop: "1rem",
              color: "white",
              marginBottom: "3rem",
            }}
            id="alert"
            severity="info"
          >
            Note: If No Display Name Is Given, Your First and Last Name Will Be
            Used
          </Alert>
        )}
      </div>
    </div>
  );
}
