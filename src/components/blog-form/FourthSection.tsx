import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VisuallyHiddenInput } from "./themes/upload-media-theme";

export default function FourthSection() {
  return (
    <div className="media-div">
      <div className="h4-div">
        Upload Featured Media And Any Additional Media/Attachments
      </div>
      <div id="upload-div">
        <Button
          // sx={{ width: "50%"}}
          className="text-field-class buttons-class"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Featured Media
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button
          // sx={{ width: "50%" }}
          className="text-field-class buttons-class"
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Attachments/Media
          <VisuallyHiddenInput type="file" multiple />
        </Button>
      </div>
    </div>
  );
}
