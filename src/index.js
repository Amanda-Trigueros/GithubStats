import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";

import App from "./app";
import { global, reset } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </>
);
