import { StyledContactForm } from "../../styles/contact-form/StyledContactForm";
import { ThemeProvider } from "@mui/material/styles";
import {
  buttonSx,
  theme,
} from "./contact-form/contact-form-themes/input-theme";
import icon6 from "../../global-imgs/icon6.png";
import { selectFieldContent } from "./contact-form/contact-form-utils/textfield-utils";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  initialState,
  useForm,
} from "./contact-form/contact-form-hooks/useForm";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function ContactForm() {
  const key: string = "Form_Data";
  const nav = useNavigate();
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, changeHandler, submitHandler] = useForm(
    key,
    initialState,
    setSpinnerOn,
    setSuccessMessage
  );
  const advanced = (e: any) => {
    setSpinnerOn(!spinnerOn);
    submitHandler(e);
  };
  return (
    <StyledContactForm>
      <ThemeProvider theme={theme}>
        {spinnerOn && (
          <Box sx={{ position: "fixed", top: 0, width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
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
            <span className="spans">
              <FormControl
                error={formData.errors.filter((n: any) => n.errCat).length > 0}
                className="form-inputs select-input"
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
                  sx={{
                    color: "white",
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "lightgray",
                    },
                    "& .MuiSvgIcon-root": {
                      color:
                        formData.errors.filter((n: any) => n.errCat).length > 0
                          ? "#f44336"
                          : "white",
                      zIndex: "5",
                    },
                    "&.Mui-focused .MuiSvgIcon-root": {
                      color:
                        formData.errors.filter((n: any) => n.errCat).length > 0
                          ? "white"
                          : "white",
                      zIndex: "5",
                    },
                    "& .MuiSelect-select": {
                      backgroundColor: "rgb(51, 51, 51)", // Adjust the background color for the selected state
                    },
                  }}
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
              {formData.errors.filter((n: any) => n.errCat).length > 0 && (
                <Alert className="alerts" variant="outlined" severity="error">
                  {formData.errors.filter((n: any) => n.errCat)[0].errCat}
                </Alert>
              )}
            </span>
            <span className="spans">
              <TextField
                inputProps={{ style: { color: "white" } }}
                className="form-inputs fname"
                onChange={(e) => changeHandler(e.target.name, e.target.value)}
                name={"fullName"}
                value={formData.fullName}
                InputLabelProps={{
                  style: {
                    color:
                      formData.errors.filter((n: any) => n.errFull).length > 0
                        ? ""
                        : "white",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor:
                      formData.errors.filter((n: any) => n.errFull).length > 0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-root": {
                    color:
                      formData.errors.filter((n: any) => n.errFull).length > 0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "white",
                  },
                }}
                label={"Full Name*"}
              />
              {formData.errors.filter((n: any) => n.errFull).length > 0 && (
                <Alert className="alerts" variant="outlined" severity="error">
                  {formData.errors.filter((n: any) => n.errFull)[0].errFull}
                </Alert>
              )}
            </span>
            <span className="spans">
              <TextField
                inputProps={{ style: { color: "white" } }}
                className="form-inputs "
                onChange={(e) => changeHandler(e.target.name, e.target.value)}
                name={"email"}
                value={formData.email}
                InputLabelProps={{
                  style: {
                    color:
                      formData.errors.filter((n: any) => n.errEmail).length > 0
                        ? ""
                        : "white",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor:
                      formData.errors.filter((n: any) => n.errEmail).length > 0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-root": {
                    color:
                      formData.errors.filter((n: any) => n.errEmail).length > 0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "white",
                  },
                }}
                label={"Email*"}
              />
              {formData.errors.filter((n: any) => n.errEmail).length > 0 && (
                <Alert className="alerts" variant="outlined" severity="error">
                  {formData.errors.filter((n: any) => n.errEmail)[0].errEmail}
                </Alert>
              )}
            </span>
            <span className="spans">
              <TextField
                inputProps={{ style: { color: "white" } }}
                className="form-inputs"
                onChange={(e) => changeHandler(e.target.name, e.target.value)}
                name={"message"}
                value={formData.message}
                multiline
                minRows={5}
                InputLabelProps={{
                  style: {
                    color:
                      formData.errors.filter((n: any) => n.errMessage).length >
                      0
                        ? ""
                        : "white",
                  },
                }}
                sx={{
                  bgcolor: "rgb(51,51,51)",
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor:
                      formData.errors.filter((n: any) => n.errMessage).length >
                      0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-root": {
                    color:
                      formData.errors.filter((n: any) => n.errMessage).length >
                      0
                        ? "#f44336"
                        : "white",
                  },
                  "& .MuiInputLabel-shrink": {
                    color: "white",
                  },
                }}
                label={"Message*"}
              />
              {formData.errors.filter((n: any) => n.errMessage).length > 0 && (
                <Alert className="alerts" variant="outlined" severity="error">
                  {
                    formData.errors.filter((n: any) => n.errMessage)[0]
                      .errMessage
                  }
                </Alert>
              )}
            </span>
            {spinnerOn && !successMessage ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  color: "blue",
                  fontFamily: "inherit",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  marginBottom: "1rem",
                  height: "3rem",
                  width: "50%",
                }}
                id="button"
              >
                Loading...
              </LoadingButton>
            ) : !spinnerOn && successMessage ? (
              <Button variant="contained" sx={buttonSx}>
                <CheckIcon sx={{ marginRight: "1rem" }} />
                Successfully Sent
              </Button>
            ) : (
              <Button
                onClick={(e) => advanced(e)}
                sx={{
                  bgcolor: "white",
                  color: "black",
                  fontFamily: "inherit",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  marginBottom: "1rem",
                  height: "3rem",
                  width: "50%",
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
            )}
          </form>
          <div id="second-box">
            <div id="contact-us">Contact Me</div>
            <img src={icon6} alt="icon" />
          </div>
        </div>
      </ThemeProvider>
    </StyledContactForm>
  );
}
