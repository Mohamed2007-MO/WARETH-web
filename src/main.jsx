import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./context/LangContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>
);