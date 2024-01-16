import { ThemeProvider } from "@mui/material/styles";
import { StyledBlogForm } from "../styles/StyledBlogForm";
import { theme } from "./blog-form-extras/input-theme";
import FirstSection from "./blog-form-extras/FirstSection";
import SecondSection from "./blog-form-extras/SectionSection";
import ThirdSection from "./blog-form-extras/ThirdSections";
import FourthSection from "./blog-form-extras/FourthSection";
import FifthSection from "./blog-form-extras/FifthSection";

export default function BlogForm() {
  return (
    <StyledBlogForm>
      <form>
        <div id="h1-div">Create Blog Form</div>
        <ThemeProvider theme={theme}>
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <FifthSection />
        </ThemeProvider>
      </form>
    </StyledBlogForm>
  );
}
