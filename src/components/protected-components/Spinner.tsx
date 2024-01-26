import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

export default function SpinnerLoader() {
  const [changingData, setChangingData] = useState<string>(
    "Single-Threaded, Scalable: Despite being single-threaded, Node.js can handle concurrent connections efficiently and scale horizontally across multiple processes."
  );
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const facts: string[] = [
      "Runtime Environment: Node.js is a JavaScript runtime environment for executing server-side code outside of a web browser.",
      "Event-Driven, Asynchronous: It operates on an event-driven, non-blocking I/O model, enabling efficient handling of concurrent operations.",
      "Cross-Platform: It is cross-platform, allowing developers to write code once and deploy it across different operating systems such as Windows, macOS, and Linux.",
    ];
    let intervalId = setInterval(() => {
      if (counter < 3) {
        setChangingData(facts[counter]);
        setCounter((counter) => (counter += 1));
      } else {
        setCounter(0);
        setChangingData(
          "Single-Threaded, Scalable: Despite being single-threaded, Node.js can handle concurrent connections efficiently and scale horizontally across multiple processes."
        );
      }
      return () => {
        clearInterval(intervalId);
      };
    }, 7000);
  }, [changingData, counter]);
  return (
    <div
      style={{
        backgroundColor: "rgb(21,21,21)",
        height: "100dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress sx={{ position: "fixed", top: "0", width: "100%" }} />
      <MutatingDots
        visible={true}
        width={"100"}
        height={"100"}
        color="royalblue"
        radius={"20"}
        secondaryColor="royalblue"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p style={{ marginTop: "5rem", fontSize: "16px", textAlign: "center" }}>
        {changingData}
      </p>
    </div>
  );
}
