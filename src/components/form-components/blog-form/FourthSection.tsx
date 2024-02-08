import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "./blog-form-themes/upload-media-theme";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";
import { useContext } from "react";
import { Alert } from "@mui/material";
import { IoMdClose } from "react-icons/io";

export default function FourthSection() {
  const { formData, changeHandler, deleteFileFromSelection } = useContext(FormStateContext);
  return (
    <div className="media-div">
      <div className="h4-div upload-heading">
        Upload Featured Media And Any Additional Media/Attachments
      </div>
      <div id="upload-div">
        <Button
          className="text-field-class buttons-class"
          component="label"
          variant="contained"
          id="upload-button-1"
          startIcon={<CloudUploadIcon />}
        >
          Attachments/Media
          <VisuallyHiddenInput
            onChange={(e: any) => {
              changeHandler("files", e.target.files[0]);
            }}
            type="file"
            multiple
          />
        </Button>
        <div id="last-first-div">
          {formData.errors.filter((n: any) => n.files).length > 0 ? (
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
                .filter((n: any) => n.files)
                .map((n: any, i: number) => {
                  return (
                    <span
                      key={i}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      {n.blog_author_name && (
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div style={{ fontWeight: "bold" }}>
                            File Error(s)
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
                textAlign: "left",
                marginBottom: "2rem",
              }}
              id="alert"
              severity="info"
            >
              <div>
                <div style={{ fontWeight: "bold" }}>Files Selected:</div>
                {formData.files.length > 0 && (
                  <div id="file-wrapper-presentation">
                    {formData.files.map((n: any, i: number) => {
                      return (
                        <div className="file-selected" key={i}>
                          {n.name}{" "}
                          <IoMdClose
                          className="io-md-close"
                          onClick={()=>deleteFileFromSelection(n.name)}
                            style={{
                              cursor: "pointer",
                              marginLeft: "5px",
                              width: "1.2rem",
                              height: "1.2rem",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
