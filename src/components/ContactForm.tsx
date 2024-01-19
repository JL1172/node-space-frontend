import { StyledContactForm } from "../styles/contact-form/StyledContactForm";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./contact-form/contact-form-themes/input-theme";
import icon6 from "../global-imgs/icon6.png";
import { selectFieldContent } from "./contact-form/contact-form-utils/textfield-utils";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { selectStyle } from "./blog-form/blog-form-themes/select-theme";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  initialState,
  useForm,
} from "./contact-form/contact-form-hooks/useForm";

export default function ContactForm() {
  const nav = useNavigate();
  const [formData, changeHandler, submitHandler] = useForm(
    "Form_Data",
    initialState
  );

  return (
    <StyledContactForm>
      <ThemeProvider theme={theme}>
        <div id="outer-wrapper">
          <form id="first-box" onSubmit={(e) => e.preventDefault()}>
            <span
              onClick={() => {
                window.localStorage.clear();
                nav("/");
              }}
              id="home-return-icon"
            >
              <IoReturnUpBackSharp />
              <div>Home</div>
            </span>
            <FormControl className="form-inputs select-input">
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "white",
                  "&.Mui-focused": {
                    color: "white", // Set the color for the focused state
                  },
                }}
              >
                Contact Category*
              </InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={(e) => changeHandler(e.target.name, e.target.value)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Contact Category"
                sx={selectStyle}
              >
                {selectFieldContent.map((n, i) => {
                  return (
                    <MenuItem key={i} value={n}>
                      {n}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              className="form-inputs"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"fullName"}
              value={formData.fullName}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Full Name"}
            />
            <TextField
              className="form-inputs"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"email"}
              value={formData.email}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Email"}
            />
            <TextField
              className="form-inputs"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"message"}
              value={formData.message}
              multiline
              minRows={5}
              sx={{ bgcolor: "rgb(51,51,51)" }}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Message*"}
            />
            <Button
              onClick={(e) => submitHandler(e)}
              sx={{
                bgcolor: "white",
                color: "black",
                fontFamily: "inherit",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                height: "3rem",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "white",
                },
              }}
              id="button"
              variant="contained"
            >
              Share Your Feedback
            </Button>
          </form>
          <div id="second-box">
            <div id = "contact-us">Contact Me</div>
            <img src={icon6} alt="icon" />
          </div>
        </div>
      </ThemeProvider>
    </StyledContactForm>
  );
}
