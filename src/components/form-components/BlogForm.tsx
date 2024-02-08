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
import {
  initiateLogout,
  setAuthenticationState,
  setJwtError,
} from "../../redux/actions-creators/global-auth-creators";
import { RootState } from "../../redux/reducers/root-reducers";
import { BlogFormProps } from "../../global-dto/g-dtos";
import { FormStateContext } from "./blog-form/blog-form-contexts/FormStateContext";
import { initialState, useForm } from "./blog-form/blog-form-hooks/useForm";
import {
  initCategoryFetch,
  setCategoryFetchError,
  set_blog_fetch_status,
} from "../../redux/actions-creators/blog-form-creators";
import { Alert } from "@mui/material";
import SpinnerLoader from "../protected-components/Spinner";

function BlogForm(props: BlogFormProps) {
  const nav = useNavigate();
  const { initCategoryFetch } = props;
  useEffect(() => {
    initCategoryFetch();
  }, [initCategoryFetch]);
  const advancedLogout = async () => {
    props.initiateLogout();
    nav("/");
  };
  const [formData, changeHandler, handleSubmission, deleteFileFromSelection] =
    useForm(
      "blog_form_data",
      initialState,
      props.blogState,
      props.set_blog_fetch_status,
      props.setJwtError,
      props.setAuthenticationState,
      nav,
      advancedLogout,
      props.setCategoryFetchError
    );
  return (
    <StyledBlogForm>
      {props.blogState.category_fetch_err && (
        <Alert
          sx={{ position: "fixed", top: 0, zIndex: 5, width: "100%" }}
          severity="error"
        >
          {props.blogState.category_fetch_err}.
        </Alert>
      )}
      {props.blogState.blog_fetch_status ? (
        <SpinnerLoader />
      ) : (
        <FormStateContext.Provider
          value={{
            formData,
            changeHandler,
            blogState: props.blogState,
            handleSubmission,
            deleteFileFromSelection,
          }}
        >
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
      )}
    </StyledBlogForm>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    authState: state.globalAuth,
    blogState: state.blogForm,
  };
};
export default connect(mapStateToProps, {
  initiateLogout,
  initCategoryFetch,
  set_blog_fetch_status,
  setAuthenticationState,
  setJwtError,
  setCategoryFetchError,
})(BlogForm);
