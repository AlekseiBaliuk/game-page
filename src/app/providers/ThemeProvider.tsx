import { ThemeProvider as Mui } from "@mui/material";
import { ThemeProvider as Styled } from "styled-components";
import { useContext } from "react";
import { GeoContext } from "./GeoProvider";
import { createAppTheme } from "../../theme/theme";

export const AppThemeProvider = ({ children }: any) => {
  const { geo } = useContext(GeoContext);
  const theme = createAppTheme(geo);

  return (
    <Mui theme={theme}>
      <Styled theme={theme}>{children}</Styled>
    </Mui>
  );
};
