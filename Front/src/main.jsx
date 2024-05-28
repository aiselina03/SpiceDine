import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/reset.scss";
import MainProvider from "./context/mainProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </HelmetProvider>
  </React.StrictMode>
);
