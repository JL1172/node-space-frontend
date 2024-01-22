import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledCategory } from "../../styles/landing-page/StyledCategory";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { categories } from "./landing-page-utils/category-util";

function Category() {
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
    <StyledCategory>
      <div id="h1-div" className="node-space-branding"><span className="injection-site-hidden"></span>Blog Categories</div>
      <div id="cat-wrapper">
        {categories.map((n, i) => {
          return (
            <div className={`cat-divs div-${i + 1}`} key={i}>
              <div>{n.cat_icon}</div>
              <div className="cat-head">[{n.cat_type}]</div>
              <div className="cat-desc">{n.cat_desc}</div>
              <Button
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
                    bgcolor: n.cat_color,
                  },
                }}
                id="button"
                variant="contained"
              >
                Explore {n.cat_type} Blogs
              </Button>
            </div>
          );
        })}
      </div>
    </StyledCategory>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(Category);
