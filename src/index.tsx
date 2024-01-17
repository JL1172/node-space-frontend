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
import { CLIENT_ID, DOMAIN, REDIRECT } from "./utils/auth0-utils";

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
    domain={DOMAIN}
    clientId={CLIENT_ID}
    authorizationParams={{
      redirect_uri: REDIRECT,
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
