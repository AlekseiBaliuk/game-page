import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import { GeoProvider } from "./app/providers/GeoProvider";
import { AppThemeProvider } from "./app/providers/ThemeProvider";
import App from "./app/App";
import { GlobalStyles } from "./app/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <GeoProvider>
    <AppThemeProvider>
      <CssBaseline />
      <GlobalStyles />
      <App />
    </AppThemeProvider>
  </GeoProvider>,
);
