import { createTheme } from "@mui/material";
import { geoPalette } from "./geoThemes";
import { Geo } from "../shared/config/geo.config";

export const createAppTheme = (geo: Geo) =>
  createTheme({
    palette: {
      primary: { main: geoPalette[geo].primary },
      background: { default: geoPalette[geo].bg },
    },
    typography: {
      fontFamily: "'SF Pro', sans-serif",
    },
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       body: {
    //         background: `url(${geoPalette[geo].hero}) center / cover no-repeat`,
    //         margin: 0,
    //         minHeight: "100vh",
    //       },
    //     },
    //   },
    // },
  });
