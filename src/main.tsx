import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import PageRouters from "./router/PageRouters";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageRouters />
  </React.StrictMode>
);
