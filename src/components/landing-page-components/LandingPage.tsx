import { connect } from "react-redux";
import Header from "./Header";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledLandingPage } from "../../styles/landing-page/StyledLandingPage";
import Content from "./Content";
import Category from "./Categories";
import SearchBar from "./SearchBar";
import NodeSpace from "./NodeSpace";
import Footer from "./Footer";

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