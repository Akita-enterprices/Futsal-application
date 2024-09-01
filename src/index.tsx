import React from "react";
import { createRoot } from "react-dom/client";
import { CustomAuthProvider } from "./auth/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = window.location.origin;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <CustomAuthProvider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <App />
    </CustomAuthProvider>
  );
}
