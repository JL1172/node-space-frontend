import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./redux/reducers/root-reducers";
import { Auth0Provider } from "@auth0/auth0-react";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, enhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-eqszr7hd3w01e1xb.us.auth0.com"
    clientId="Q4jeVi9bgbPeMJJBGRHQPFDFnPSYAdqG"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/admin/login/blog-form",
    }}
    useRefreshTokens={true}
    cacheLocation="memory"
  >
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
