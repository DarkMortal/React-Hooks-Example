import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles.css";

String.prototype.strip = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/*root.render(
  <StrictMode>
    <App />
  </StrictMode>
);*/
// StrictMode only used for development
root.render(<App />);
