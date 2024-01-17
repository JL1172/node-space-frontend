import { ThemeProvider } from "@mui/material/styles";
import { StyledBlogForm } from "../styles/blog-form/StyledBlogForm";
import { theme } from "./blog-form/themes/input-theme";
import FirstSection from "./blog-form/FirstSection";
import SecondSection from "./blog-form/SectionSection";
import ThirdSection from "./blog-form/ThirdSections";
import FourthSection from "./blog-form/FourthSection";
import FifthSection from "./blog-form/FifthSection";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
export default function BlogForm() {
  const nav = useNavigate();
  const { isAuthenticated, isLoading, logout } = useAuth0();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      nav("/");
    }
  }, [isAuthenticated, isLoading, nav]);
  const advancedLogout = () => {
    window.localStorage.clear();
    logout();
  };
  return (
    <StyledBlogForm>
      {isAuthenticated && (
        <form>
          <div id="h1-div" className="spec-h1-div">
            <span id="io-icon">
              <IoReturnUpBackSharp />
              <div onClick={() => advancedLogout()}>Return</div>
            </span>{" "}
            Create Blog Form
          </div>
          <ThemeProvider theme={theme}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
          </ThemeProvider>
        </form>
      )}
    </StyledBlogForm>
  );
}
