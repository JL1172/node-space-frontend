import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledCategory } from "../../styles/StyledCategory";
import { CategoryType } from "../../global-dto/g-dtos";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
const categories: CategoryType[] = [
  {
    cat_type: "Backend",
    cat_icon: <SiNestjs className="cat-icons" color="#E0234E"/>,
    cat_desc: "Explore Different Blogs Regarding Relevant Backend Technologies",
  },
  {
    cat_type: "Frontend",
    cat_icon: <FaReact className="cat-icons" color="rgb(97, 219, 251)" />,
    cat_desc:
      "Explore Different Blogs Regarding Relevant Frontend Technologies",
  },
  {
    cat_type: "Database",
    cat_icon: <BiLogoPostgresql className="cat-icons" color="#0064a5" />,
    cat_desc:
      "Explore Different Blogs Regarding Relevant Database Technologies",
  },
];

function Category() {
  return (
    <StyledCategory>
        <div id = "h1-div">Categories</div>
        <div id = "cat-wrapper">
      {categories.map((n, i) => {
        return (
          <div className="cat-divs" key={i}>
            <div>{n.cat_icon}</div>
            <div className="cat-head">{n.cat_type}</div>
            <div className="cat-desc">{n.cat_desc}</div>
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
