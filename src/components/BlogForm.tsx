import { ThemeProvider } from "@mui/material/styles";
import { StyledBlogForm } from "../styles/blog-form/StyledBlogForm";
import { theme } from "./blog-form/themes/input-theme";
import FirstSection from "./blog-form/FirstSection";
import SecondSection from "./blog-form/SectionSection";
import ThirdSection from "./blog-form/ThirdSections";
import FourthSection from "./blog-form/FourthSection";
import FifthSection from "./blog-form/FifthSection";

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
