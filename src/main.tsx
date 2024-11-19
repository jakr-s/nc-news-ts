import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root: Root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
