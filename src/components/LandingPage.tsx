import { connect } from "react-redux";
import Header from "./landing-page/Header";
import { RootState } from "../redux/reducers/root-reducers";
import { StyledLandingPage } from "../styles/landing-page/StyledLandingPage";
import Content from "./landing-page/Content";
import Category from "./landing-page/Categories";
import SearchBar from "./landing-page/SearchBar";
import NodeSpace from "./landing-page/NodeSpace";
import Footer from "./landing-page/Footer";

function LandingPage(props: any) {
  return (
    <StyledLandingPage>
      <Header />
      <Content />
      <SearchBar />
      <Category />
      <NodeSpace />
      <Footer />
    </StyledLandingPage>
  );
}

const mapStateToProps = (state: RootState): Record<string,string> => {
    return {

    }
}
export default connect(mapStateToProps,{})(LandingPage);