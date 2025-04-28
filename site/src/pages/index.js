import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Main, lightTheme, darkTheme } from "../styles/styles";
import { useDarkMode } from "../components/useDarkMode";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShapeBuilder from "../components/ShapeBuilder";
import { Button, SistentThemeProviderWithoutBaseLine, Box, SistentThemeProvider } from "@layer5/sistent"
import InstructionsModal from "../components/utils/instructionsModal";
import { SnackbarProvider } from "notistack";
import { CheckCircle, Error, Info, Warning } from "@mui/icons-material";
import { ThemeResponsiveSnackbar } from "../styles/theme.styles";

const IndexPage = () => {
  // const themesistent = useTheme();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [open, setOpen] = useState(false);

  return (
    <SistentThemeProviderWithoutBaseLine>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        iconVariant={{
          success: <CheckCircle style={{ marginRight: "1rem" }} />,
          error: <Error style={{ marginRight: "1rem" }} />,
          warning: <Warning style={{ marginRight: "1rem" }} />,
          info: <Info style={{ marginRight: "1rem" }} />
        }}
        Components={{
          info: ThemeResponsiveSnackbar,
          success: ThemeResponsiveSnackbar,
          error: ThemeResponsiveSnackbar,
          warning: ThemeResponsiveSnackbar
        }}
        maxSnack={5}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <section className="hero">
            <h1>Shape Builder</h1>
            <p className="desc-text">
              Click on the grid to start creating a polygon. Each click adds a point.
            </p>
          </section>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{ minWidth: "fit-content" }}
              onClick={() => setOpen(true)}
            >
              Show Instructions
            </Button>
          </Box>
          <InstructionsModal open={open} onClose={() => setOpen(false)} />
          <ShapeBuilder />
        </Main>
        <Footer />
        </ThemeProvider>
      </SnackbarProvider>
    </SistentThemeProviderWithoutBaseLine>
  );
};

export default IndexPage;

export const Head = () => <title>Meshery – Shape Builder</title>;
