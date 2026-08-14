import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { NavigationProvider } from "./client/context/NavigationContext";
import { NetworkProvider } from "./client/context/NetworkContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NetworkProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </NetworkProvider>
  </StrictMode>
);
