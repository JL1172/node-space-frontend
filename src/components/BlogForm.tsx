import { ThemeProvider } from "@mui/material/styles";
import { StyledBlogForm } from "../styles/StyledBlogForm";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { theme } from "./blog-form-extras/input-theme";
import { VisuallyHiddenInput } from "./blog-form-extras/upload-media-theme";
import FirstSection from "./blog-form-extras/FirstSection";
import SecondSection from "./blog-form-extras/SectionSection";

export default function BlogForm() {
  return (
    <StyledBlogForm>
      <form>
        <div id="h1-div">Create Blog Form</div>
        <ThemeProvider theme={theme}>
         <FirstSection />
         <SecondSection />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Featured Media
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Attachments/Media
            <VisuallyHiddenInput type="file" />
          </Button>
        </ThemeProvider>
      </form>
    </StyledBlogForm>
  );
}
