import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledContentLanding } from "../../styles/StyledContentLanding";
import { img_one } from "../../global-imgs/img_url";

function Content() {
  return (
    <StyledContentLanding>
      {/* <img src = {""} alt = "image"/> */}
      <h1>Discover The Power Of Nodejs</h1>
    </StyledContentLanding>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(Content);
