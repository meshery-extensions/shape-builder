import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Main, lightTheme, darkTheme } from "../styles/styles";
import { useDarkMode } from "../components/useDarkMode";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ShapeBuilder from "../components/ShapeBuilder";

const IndexPage = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
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
        <ShapeBuilder />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Meshery – Shape Builder</title>;
