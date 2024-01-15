import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledContentLanding } from "../../styles/StyledContentLanding";
import iconImage from "../../global-imgs/icon.png";

function Content() {
  return (
    <StyledContentLanding>
      <img src={iconImage} alt="Icon" />
      <div id="node-wrapper">
        <h1>Discover The Power Of</h1>
        <h1>Node.js</h1>
      </div>
    </StyledContentLanding>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(Content);
