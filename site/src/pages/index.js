import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, Main, lightTheme, darkTheme } from "../styles/styles";
import { useDarkMode } from "../components/useDarkMode";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShapeBuilder from "../components/ShapeBuilder";
import { SistentThemeProviderWithoutBaseLine, Box } from "@sistent/sistent";

const Kbd = styled.kbd`
  background-color: ${({ theme }) =>
  theme.mode === "light" ? "#f4f4f4" : "#2b2b2b"};
  border: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#d1d5da" : "#444")};
  border-bottom-color: ${({ theme }) =>
    theme.mode === "light" ? "#c6cbd1" : "#444"};
  border-radius: 3px;
  box-shadow: inset 0 -1px 0
    ${({ theme }) => (theme.mode === "light" ? "#c6cbd1" : "#444")};
  color: ${({ theme }) => (theme.mode === "light" ? "#333" : "#fff")}; /* Increased contrast for keys */
  display: inline-block;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  padding: 3px 6px;
  margin-right: 6px;
  vertical-align: middle;
`;

const InstructionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 40px;
  margin-top: 8px;
  width: 100%;
  
  /* UPDATED: High contrast colors */
  color: ${({ theme }) => (theme.mode === "light" ? "#111" : "#fff")};

  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
`;

const SectionLabel = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => (theme.mode === "light" ? "#111" : "#fff")}; /* Matched header contrast */
  margin: 0 0 8px 0;
  text-align: center;
`;

const IndexPage = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const activeTheme = { ...themeMode, mode: theme };

  return (
    <SistentThemeProviderWithoutBaseLine>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <section className="hero">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                mb: 4,
              }}
            >
              <h1>Shape Builder</h1>

              {/* Instructions Section */}
              <div style={{ textAlign: "center" }}>
                <SectionLabel theme={activeTheme}>Instructions</SectionLabel>
                <p className="desc-text" style={{ margin: 0 }}>
                  Click on the grid to start creating a polygon. Each click adds a
                  point.
                </p>
              </div>

              {/* Key Strokes Section */}
              <div style={{ textAlign: "center", marginTop: "2rem", width: "100%" }}>
                <SectionLabel theme={activeTheme}>Controls</SectionLabel>
                <InstructionsContainer theme={activeTheme}>
                  <span>
                    <Kbd theme={activeTheme}>ENTER</Kbd> /{" "}
                    <Kbd theme={activeTheme}>ESC</Kbd> Close shape
                  </span>

                  <span>
                    <Kbd theme={activeTheme}>CTRL</Kbd> Snap to grid
                  </span>

                  <span>
                    <Kbd theme={activeTheme}>CTRL</Kbd> +{" "}
                    <Kbd theme={activeTheme}>Z</Kbd> Undo
                  </span>
                </InstructionsContainer>
              </div>
            </Box>
          </section>

          <ShapeBuilder theme={activeTheme} />
        </Main>
        <Footer />
      </ThemeProvider>
    </SistentThemeProviderWithoutBaseLine>
  );
};

export default IndexPage;

export const Head = () => <title>Meshery – Shape Builder</title>;