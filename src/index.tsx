import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import { GeoProvider } from "./app/providers/GeoProvider";
import { AppThemeProvider } from "./app/providers/ThemeProvider";
import App from "./app/App";
import { GlobalStyles } from "./app/styles";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <GeoProvider>
      <AppThemeProvider>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </AppThemeProvider>
    </GeoProvider>
  </StrictMode>,
);
