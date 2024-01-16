import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledFooter } from "../../styles/StyledFooter";
import { TfiInstagram } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { AnchorHTMLAttributes, ReactElement } from "react";
import { IconType } from "react-icons";
import { DivCategoryFooterType } from "../../global-dto/g-dtos";
const connectSocials: ReactElement<AnchorHTMLAttributes<any>, IconType>[] = [
  <a href="/">
    <TfiInstagram className="social-icons" />
  </a>,
  <a href="/">
    <BsLinkedin className="social-icons" />
  </a>,
  <a href="/">
    <FaGithubSquare className="social-icons" />
  </a>,
  <a href="/">
    <RiStackFill className="social-icons" />
  </a>,
];
const divCategories: DivCategoryFooterType[] = [
    {head: "Categories",cat_1: "Explore Backend Blogs", cat_2: "Explore Frontend Blogs", cat_3: "Explore Database Blogs", cat_4: "Sign Up For Updates"},
    {head: "Node-Space",cat_1: "Explore Node.js Tutorials", cat_2: "Sign Up For Updates", cat_3: undefined, cat_4: undefined},
    {head: "General",cat_1: "Contact Form", cat_2: "Want To Write A Blog?", cat_3: "Buy Me A Coffee", cat_4: undefined},
]
function Footer() {
  return (
    <StyledFooter>
      <div className="f-divs">
        <div className="f-div-head">Node-Space</div>
        <div id = "social-wrapper">
          {connectSocials.map((n, i) => {
            return <div key={i}>{n}</div>;
          })}
        </div>
      </div>
        {divCategories.map((n,i) => {
            return <div className = "f-divs" key = {i} >
                <div className="f-div-head">{n.head}</div>
                {n.cat_1 && <div className="f-cat-div">{n.cat_1}</div>}
                {n.cat_2 && <div className="f-cat-div">{n.cat_2}</div>}
                {n.cat_3 && <div className="f-cat-div">{n.cat_3}</div>} 
                {n.cat_4 && <div className="f-cat-div">{n.cat_4}</div>} 
            </div>
        })}
    </StyledFooter>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(Footer);
