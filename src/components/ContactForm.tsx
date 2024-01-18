import { useEffect } from "react";
import { StyledContactForm } from "../styles/StyledContactForm";
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
  const [formData, changeHandler, submitHandler, verifyFields] = useForm(
    "Form_Data",
    initialState
  );
  useEffect(() => {
    verifyFields();
  }, [verifyFields]);

  return (
    <StyledContactForm>
      <ThemeProvider theme={theme}>
        <div id="form-wrapper">
          <form onSubmit={(e) => submitHandler(e)}>
            <span
              onClick={() => {
                window.localStorage.clear();
                nav("/");
              }}
              id="io-icon"
            >
              <IoReturnUpBackSharp />
              <div>Home</div>
            </span>
            <FormControl
              className="text-field-class"
              sx={{ marginBottom: ".5rem" }}
            >
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
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"fullName"}
              value={formData.fullName}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Full Name"}
              className="text-field-class-div"
            />
            <TextField
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"email"}
              value={formData.email}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Email"}
              className="text-field-class-div"
            />
            <TextField
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
              name={"message"}
              value={formData.message}
              multiline
              minRows={5}
              sx={{ bgcolor: "rgb(51,51,51)" }}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              label={"Message*"}
              className="text-field-class-div"
            />
            <Button
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
              disabled={formData.disabled}
            >
              Share Your Feedback
            </Button>
          </form>
          <div id="second-wrapper-cf">
            <div className="h1-div-cf">Contact Us</div>
            <img src={icon6} alt="icon" />
          </div>
        </div>
      </ThemeProvider>
    </StyledContactForm>
  );
}
