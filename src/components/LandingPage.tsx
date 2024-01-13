import { connect } from "react-redux";
import Header from "./landing-page-extras/Header";
import { RootState } from "../redux/reducers/root-reducers";
import { StyledLandingPage } from "../styles/StyledLandingPage";
import Content from "./landing-page-extras/Content";
import SearchBar from "./landing-page-extras/SearchBar";

function LandingPage(props: any) {
  return (
    <StyledLandingPage>
      <Header />
      <Content />
      <SearchBar />
    </StyledLandingPage>
  );
}

const mapStateToProps = (state: RootState): Record<string,string> => {
    return {

    }
}
export default connect(mapStateToProps,{})(LandingPage);