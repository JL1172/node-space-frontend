import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectRoute() {
  const nav = useNavigate();
  useEffect(() => {
    nav("/");
  }, []);//eslint-disable-line
  return (
    <div
      style={{
        height: "100dvh",
        textAlign: "center",
        backgroundColor: "rgb(21,21,21)",
      }}
    >
      <LinearProgress sx={{ position: "fixed", top: "0" }} />
      Redirecting...
    </div>
  );
}
