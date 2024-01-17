import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledContentLanding } from "../../styles/landing-page/StyledContentLanding";
import iconImage from "../../global-imgs/icon.png";
import { BsHexagonFill } from "react-icons/bs";
function Content() {
  return (
    <StyledContentLanding>
      <img src={iconImage} alt="Icon" />
      <div id="node-wrapper">
        <h1>Discover The Power Of</h1>
        <h1 id="node-header">
          <span className="writer one">[N</span>
          <span className="writer two">
            <BsHexagonFill id="icon-node" />
          </span>
          <span className="writer three">d</span>
          <span className="writer four">e</span>
          <span className="writer five">.j</span>
          <span className="writer six">s]</span>
        </h1>
      </div>
    </StyledContentLanding>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(Content);
