import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Swap any image that fails to load for the default placeholder.
const fallbackImage = `${process.env.PUBLIC_URL}/images/default.png`;
window.addEventListener(
  "error",
  (event) => {
    const img = event.target;
    if (img.tagName === "IMG" && !img.src.endsWith(fallbackImage)) {
      img.src = fallbackImage;
    }
  },
  true
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
