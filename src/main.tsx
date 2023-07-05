import React from "react";
import ReactDOM from "react-dom/client";

//* MAIN COMPONENT *//
import { App } from "./App.tsx";

//* GLOBAL STYLES *//
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
