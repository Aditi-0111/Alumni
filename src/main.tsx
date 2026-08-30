import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { NavigationProvider } from "./client/context/NavigationContext";
import { NetworkProvider } from "./client/context/NetworkContext";
import { EndorsementProvider } from "./client/context/EndorsementContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NetworkProvider>
      <NavigationProvider>
        <EndorsementProvider>
          <App />
        </EndorsementProvider>
      </NavigationProvider>
    </NetworkProvider>
  </StrictMode>
);
