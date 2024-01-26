import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectRoute() {
  const nav = useNavigate();
  useEffect(() => {
    nav("/creator/login");
  }, []); //eslint-disable-line
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(21,21,21)",
        fontSize: "30px",
      }}
    >
      <LinearProgress sx={{ position: "fixed", top: "0", width: "100%" }} />
      Redirecting...
    </div>
  );
}
