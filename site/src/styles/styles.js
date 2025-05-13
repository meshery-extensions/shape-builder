// src/styles/styles.js
import styled, { createGlobalStyle } from "styled-components";

// Global styles (combined from your index.styles.js)
export const GlobalStyle = createGlobalStyle`
  /* Continue Button Container */
  div.continue-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2.4rem;
    @media (max-width: 59rem) {
      margin-top: -1rem;
    }
  }

  /* Modal styles */
  .Modal {
    position: fixed;
    inset: 50% auto auto 50%;
    border: 1px solid rgb(204, 204, 204);
    background: ${({ theme }) => theme.body};
    border-radius: 0.5rem;
    outline: none;
    padding: 20px;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 50rem;
    max-height: 80vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 59rem) {
      max-width: 80vw;
    }
    .close-modal-btn {
      min-width: 2rem;
      cursor: pointer;
      z-index: 1000;
      background: rgb(0, 179, 159);
      border: none;
      border-radius: 5px;
      height: 2rem;
      padding: 0.25rem;
      position: fixed;
      right: 0.5rem;
      top: 0.75rem;
      font-size: 2.3rem;
      line-height: 1;
    }
  }
  .Overlay {
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9999;
    overflow-y: auto;
  }

  /* Selection */
  ::selection {
    background: #3C494F;
    color: #ffffff;
  }

  /* Base styles */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.125rem;
    background: ${({ theme }) => theme.body};
    color: #3C494F;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.text};
    margin: 0;
    line-height: normal;
  }
  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    @media (max-width: 62rem) {
      font-size: 2.125rem;
    }
  }
  h2 {
    font-size: 2.125rem;
    font-weight: 600;
    @media (max-width: 62rem) {
      font-size: 1.75rem;
    }
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    @media (max-width: 62rem) {
      font-size: 1.5rem;
    }
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1.25rem;
    }
  }
  h5 {
    font-size: 1.25rem;
    font-weight: 300;
    @media (max-width: 62rem) {
      font-size: 1.1rem;
    }
  }
  h6 {
    font-weight: 200;
    font-size: 1rem;
  }
  p {
    color: ${({ theme }) => theme.text};
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1rem;
    }
  }
  a {
    text-decoration: none;
    color: #00D3A9;
    &:hover {
      color: #00B39F;
    }
  }
  img {
    max-width: 100%;
  }
  section {
    position: relative;
  }
`;

/* Themes (from index.styles.js) */
export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  btn: "#FFF",
};

export const darkTheme = {
  body: "rgb(18, 18, 18)",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  btn: "#1E2117",
};

/* Header styles (from index.styles.js) */
export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;

  nav {
    background: ${({ theme }) => theme.body};
    display: flex;
    flex: auto;
    padding: 1.5rem 10rem;
    transition: all 0.3s ease 0s;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    position: relative;
  }

  .scrolled {
    box-shadow: rgba(0, 179, 159, 0.2) 0px 10px 25px;
  }

  img.logo {
    align-self: center;
    max-width: 400px;
    height: auto;
  }
  .themeToggle {
    margin: auto 0.5rem;
    padding: auto 0.5rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .signup-btn,
  .login-btn {
    font-size: calc(16px + 6 * ((50vw - 320px) / 680));
    transition: 0.2s ease-in-out;
    margin: auto 0.5rem;
  }
  .signup-btn {
    padding: 1rem 1.5rem;
    text-align: center;
    color: #fff;
    background: rgba(235, 192, 23, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(235, 192, 23, 0.3);
    white-space: nowrap;
  }
  .signup-btn:hover {
    background-color: rgba(255, 208, 25, 1);
    box-shadow: 0px 0px 15px rgba(235, 192, 23, 1);
    color: #fff;
  }
  .login-btn {
    margin: 0 0 0 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    background: rgba(0, 179, 159, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 179, 159, 0.3);
  }
  .login-btn:hover {
    background-color: #00d3a9;
    box-shadow: 0px 0px 15px rgba(0, 179, 159, 1);
    color: #fff;
  }

  @media screen and (max-width: 1400px) {
    img.logo {
      max-width: 320px;
    }
  }
  @media screen and (max-width: 1100px) {
    nav {
      padding: 1.5em 2.5em;
    }
  }
  @media screen and (max-width: 975px) {
    img.logo {
      max-width: 320px;
    }
  }
  @media screen and (max-width: 768px) {
    img.logo {
      max-width: 250px;
    }
    .signup-btn {
      padding: 0.7rem 1rem;
      margin: auto 0.35rem;
    }
    .login-btn {
      padding: 0.7rem 1rem;
      margin: auto 0.35rem;
    }
    .themeToggle > svg {
      width: 28px;
      height: 28px;
    }
  }
  @media screen and (max-width: 615px) {
    nav {
      padding: 1.5rem;
    }
    img.logo {
      max-width: 200px;
    }
  }
  @media screen and (max-width: 500px) {
    img.logo {
      max-width: 180px;
    }
    nav {
      padding: 1.5625rem 0.625rem;
    }
    .themeToggle {
      position: static;
    }
    .signup-btn,
    .login-btn {
      padding: 5px 7px;
    }
    .themeToggle > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

/* Main container styles (from both index.styles.js and app.styles.js) */
export const Main = styled.main`
  max-width: 75%;
  margin: 5rem auto;
  p {
    font-size: 1.35rem;
    text-align: center;
  }
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
  }
  .hero {
    p {
      text-align: center;
    }
  }
  .try-now-txt {
    margin-top: -3rem;
    margin-bottom: 1rem;
    font-weight: 300;
    text-align: center;
    font-style: italic;
  }
  .desc-text {
    margin: 0 0 3rem;
  }
  section.video {
    margin: 4rem auto;
    display: flex;
    justify-content: center;
    padding: 50px;
  }
  .embedVideo {
    height: 44vw !important;
    border-radius: 2.5%;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.5);
    .react-player__preview {
      border-radius: 1.5%;
    }
    .react-player__play-icon {
      transform: scale(3, 3);
    }
    iframe {
      border-radius: 2.5%;
    }
    @media (max-width: 768px) {
      height: 54vw !important;
    }
    &:hover {
      box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.75);
      .react-player__play-icon {
        border-color: transparent transparent transparent #ebc017 !important;
      }
    }
  }
  .caption {
    color: ${({ theme }) => theme.text};
    margin-top: 0.75rem;
    margin-left: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
  }
  .byline {
    margin-top: 2rem;
  }
  .form {
    margin: 4rem auto;
  }
  .join-community {
    text-align: center;
  }
  section.playground-btn {
    margin-top: 4rem;
    div {
      display: flex;
      justify-content: center;
    }
    .open-playground-btn {
      position: relative;
      font-size: 1.4rem;
      height: 3.5rem;
      padding: 1.5rem;
    }
    .open-playground-btn::after {
      content: '';
      border-radius: 100%;
      border: 0.275rem solid rgb(0, 170, 159);
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ring 2.5s infinite;
    }
    @keyframes ring {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
  }
  .community-discuss-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 4rem;
    p {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 0;
      font-size: 2.5rem;
    }
    @media screen and (max-width: 768px) {
      gap: 0.2rem;
      flex-wrap: wrap;
    }
  }
  .faq {
    text-align: center;
    margin: 4rem auto 0 auto;
  }
  @media screen and (max-width: 768px) {
    figure {
      width: 90%;
    }
    max-width: 85%;
  }
  @media screen and (max-width: 568px) {
    figure {
      width: 100%;
    }
    max-width: 90%;
  }
  @media screen and (max-width: 344px) {
    .join-community a {
      width: 12rem;
    }
    max-width: 95%;
  }
`;

/* Export all styles as named exports (or as an object if you prefer) */
const styles = {
  GlobalStyle,
  Header,
  Main,
  lightTheme,
  darkTheme,
};

export default styles;