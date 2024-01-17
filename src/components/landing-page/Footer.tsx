import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledFooter } from "../../styles/landing-page/StyledFooter";
import { connectSocials, divCategories } from "./landing-page-utils/footer-util";


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
