import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledNodeLanding } from "../../styles/landing-page/StyledNodeLanding";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { description_modules } from "./landing-page-utils/node-space-util";

function NodeSpace() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("injection-site-shown");
        } 
        else {
          entry.target.classList.remove("injection-site-shown");
        }
      });
    });
    const injector = document.querySelectorAll(".injection-site-hidden");
    injector.forEach((el) => observer.observe(el));
  }, []);
  return (
    <StyledNodeLanding>
      <div id="h1-div" className="node-space-branding">
        <span className="injection-site-hidden"></span>Explore Node-Space
      </div>
      <div id="desc-wrapper">
        {description_modules.map((n, i) => {
          return (
            <div id={`div-card-${i + 1}`} className={`div-cards`} key={i}>
              <div className="div-one">
                <div className="heading">{n.heading}</div>
                {n.description && <div className="desc-w">{n.description}</div>}
                {n.p1 && <div>{n.p1}</div>}
                {n.p2 && <div>{n.p2}</div>}
                {n.p3 && <div>{n.p3}</div>}
                {i === 2 && (
                  <Button
                    sx={{
                      marginTop: "3rem",
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
                    View Tutorials
                  </Button>
                )}
              </div>
              <div className="div-two">
                <img src={n.media} alt="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </StyledNodeLanding>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(NodeSpace);
