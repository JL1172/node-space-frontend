import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "./blog-form-themes/upload-media-theme";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";
import { useContext } from "react";

export default function FourthSection() {
  const { changeHandler } = useContext(FormStateContext);
  return (
    <div className="media-div">
      <div className="h4-div">
        Upload Featured Media And Any Additional Media/Attachments
      </div>
      <div id="upload-div">
        <Button
          className="text-field-class buttons-class"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Attachments/Media
          <VisuallyHiddenInput
            onChange={(e) => {
              changeHandler("files", e.target.files);
            }}
            type="file"
            multiple
          />
        </Button>
      </div>
    </div>
  );
}
