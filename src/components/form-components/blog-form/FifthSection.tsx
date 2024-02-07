import { Button } from "@mui/material";
import { FormStateContext } from "./blog-form-contexts/FormStateContext";
import { useContext } from "react";

export default function FifthSection() {
  const { handleSubmission } = useContext(FormStateContext);
  return (
    <div id="blog-upload">
      <Button
        onClick={(e) => handleSubmission(e)}
        sx={{
          bgcolor: "white",
          color: "black",
          borderRadius: "5rem",
          fontFamily: "inherit",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          height: "3rem",
          width: "100%",
          "&:hover": {
            bgcolor: "transparent",
            color: "white",
          },
        }}
        id="button"
        variant="contained"
      >
        Upload Blog
      </Button>
    </div>
  );
}
