import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(51,51,51)", // Set the initial border color
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "lightgray", // Adjust the border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "yourFocusedColor", // Adjust the border color on focus
              },
            "&:focus-within .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white", // Adjust the border color when focused
              },
            "& .MuiInputBase-input": {
              backgroundColor: "rgb(51,51,51)", // Adjust the background color
            },
          },
        },
      },
    },
  });