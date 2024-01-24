import { useNavigate } from "react-router-dom";
import BlogForm from "../form-components/BlogForm";
import { authorizeEndpoint } from "../../api/auth-endpoint";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/root-reducers";
import { setJwtError } from "../../redux/actions-creators/global-error-creator";
import { JwtProps } from "../../global-dto/g-dtos";
import RedirectRoute from "./RedirectRoute";

//! NOTES
/*


have to find out how to protect the route 
have to find out how to divey out the error messages for the different ones
need to review redux actions and reducer to handle this call
maybe refactor and do more research on it how to best handle protected routes 


*/

function ProtectedRouter(props: JwtProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    const validateToken = async () => {
      try {
        const res = await authorizeEndpoint();
        if (res.data.authorized) {
          setAuthenticated(res.data.authorized);
        }
      } catch (err: any) {
        console.log(err);
        if (/Requests/.test(err.response.data.message)) {
          props.setJwtError(err.response.data.message);
        } else {
          props.setJwtError(err.response.data.message.error);
        }
        nav("/");
      }
    };
    validateToken();
  }, [nav, props]);

  return authenticated ? <BlogForm /> : <RedirectRoute />;
}

const mapStateToProps = (state: RootState) => {
  return {
    error: state.globalError,
  };
};

export default connect(mapStateToProps, { setJwtError })(ProtectedRouter);
