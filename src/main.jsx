import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource-variable/merienda";
import "@fontsource/cormorant-garamond";
import "@fontsource-variable/josefin-sans";
import "./index.css";

import LayoutOne from "./LayoutOne/LayoutOne";
import LayoutTwo from "./LayoutTwo/LayoutTwo";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalProvider } from "./GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/one" element={<LayoutOne />} />
          <Route path="/two" element={<LayoutTwo />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>
);
