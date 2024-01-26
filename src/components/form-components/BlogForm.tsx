import { ThemeProvider } from "@mui/material/styles";
import { StyledBlogForm } from "../../styles/blog-form/StyledBlogForm";
import { theme } from "./blog-form/blog-form-themes/input-theme";
import FirstSection from "./blog-form/FirstSection";
import SecondSection from "./blog-form/SectionSection";
import ThirdSection from "./blog-form/ThirdSections";
import FourthSection from "./blog-form/FourthSection";
import FifthSection from "./blog-form/FifthSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { connect } from "react-redux";
import { initiateLogout } from "../../redux/actions-creators/global-auth-creators";
import { RootState } from "../../redux/reducers/root-reducers";
import { BlogFormProps } from "../../global-dto/g-dtos";
import { FormStateContext } from "./blog-form/blog-form-contexts/FormStateContext";
import { initialState, useForm } from "./blog-form/blog-form-hooks/useForm";

function BlogForm(props: BlogFormProps) {
  const nav = useNavigate();
  useEffect(() => {}, []);
  const advancedLogout = async () => {
    props.initiateLogout();
    nav("/");
  };
  const [formData, changeHandler] = useForm("blog_form_data", initialState);

  return (
    <StyledBlogForm>
      <FormStateContext.Provider value={{ formData, changeHandler }}>
        <form>
          <div id="h1-div" className="spec-h1-div">
            <span onClick={() => advancedLogout()} id="io-icon">
              <IoReturnUpBackSharp />
              <div>Return</div>
            </span>
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
      </FormStateContext.Provider>
    </StyledBlogForm>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    authState: state.globalAuth,
  };
};
export default connect(mapStateToProps, { initiateLogout })(BlogForm);
