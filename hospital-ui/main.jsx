import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//  Import tokens first
import "./styles/tokens.css";

//  Then global styles
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
