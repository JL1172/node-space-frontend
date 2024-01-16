import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledNodeLanding } from "../../styles/StyledNodeLanding";
import icon3 from "../../global-imgs/icon3.png";
import icon4 from "../../global-imgs/icon4.png";
import icon5 from "../../global-imgs/icon5.png";
import { NodeSpaceDescriptionType } from "../../global-dto/g-dtos";
import { Button } from "@mui/material";
import { useEffect } from "react";

const description_modules: NodeSpaceDescriptionType[] = [
  {
    media: icon4,
    heading: "Interested In Learning More About Node.js?",
    description: (
      <>
        Once a week, a module will be picked from Node's built in modules and a
        follow along tutorial (with code) will be posted. This tutorial will go
        into depth with the practical application and implementation of the
        module and real world examples we have seen node utilized in or ways we
        have utilized node.
      </>
    ),
    p1: undefined,
    p2: undefined,
    p3: undefined,
  },
  {
    media: icon3,
    heading: "The Problem Node-Space Solves?",
    description: undefined,
    p1: (
      <>
        <span className="spn">[Node-space]</span> addresses a prevalent issue in
        the developer community— the overshadowing of Node.js by its own
        frameworks and libraries. Many developers, like myself, initially
        gravitate towards frameworks like Express, inadvertently neglecting the
        intrinsic power residing within vanilla Node. The built-in modules,
        often go unnoticed and overlooked, contributing to Node being underrated
        and overlooked.
      </>
    ),
    p2: (
      <>
        In my journey, I encountered a sentiment shared by a fellow developer
        that Node doesn't receive the attention it truly deserves. This
        perception is not a critique of frameworks or libraries; rather, it
        underscores the untapped potential within Node itself. Delving into
        Node's built-in modules was a transformative experience for me,
        unraveling its intricate workings and shedding light on its hidden
        capabilities.
      </>
    ),
    p3: (
      <>
        As I explored modules like <span className="spn">[Crypto]</span> and{" "}
        <span className="spn">[Child Process]</span>, my understanding of Node
        deepened, making me a more proficient developer. Node-space aims to
        bridge the gap, unveiling the compelling features of Node's modules and
        instilling the excitement that comes with mastering this powerful
        runtime. Through sharing these insights, I hope to inspire a renewed
        appreciation for Node.js, fostering a community where its fundamental
        strengths are celebrated and leveraged to their fullest extent.
      </>
    ),
  },
  {
    media: icon5,
    heading: "View The Node Tutorials",
    description: (
      <>
        You can view all Nodejs Tutorials. View either the latest one or
        something in the past.
      </>
    ),
    p1: undefined,
    p2: undefined,
    p3: undefined,
  },
];

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
