import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { StyledSearchBar } from "../../styles/landing-page/StyledSearchBar";
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";
import icon2 from "../../global-imgs/icon2.png";

function SearchBar() {
  return (
    <StyledSearchBar>
      <div id="searchContainer" className="shown">
        <input
          placeholder="Search blogs..."
          autoCorrect="on"
          autoCapitalize="on"
          id="search"
          type="text"
        />
        <CiSearch id="searchIcon" />
      </div>
      <div id="buttonWrapper" className="shown">
        <Button
          sx={{
            bgcolor: "white",
            color: "black",
            borderRadius: "5rem",
            fontFamily: "inherit",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            height: "2.8rem",
            "&:hover": {
              bgcolor: "transparent",
              color: "white",
            },
          }}
          id="button"
          variant="contained"
        >
          Search
        </Button>
        <img src={icon2} alt="Icon" />
      </div>
    </StyledSearchBar>
  );
}
const mapStateToProps = (state: RootState) => {
  return {};
};
export default connect(mapStateToProps, {})(SearchBar);
