import BlogForm from "../form-components/BlogForm";
import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { JwtProps } from "../../global-dto/g-dtos";
import RedirectRoute from "./RedirectRoute";
import { fetchAuthenticationData } from "../../redux/actions-creators/global-auth-creators";
import SpinnerLoader from "./Spinner";

//! NOTES

function ProtectedRouter(props: JwtProps) {
  useEffect(() => {
    props.fetchAuthenticationData();
  }, []); //eslint-disable-line
  return (
    <div>
      {props.authState.loading_state && <SpinnerLoader />}
      {props.authState.authentication_state && <BlogForm />}
      {props.authState.authentication_state === false && <RedirectRoute />}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    authState: state.globalAuth,
  };
};

export default connect(mapStateToProps, { fetchAuthenticationData })(
  ProtectedRouter
);
