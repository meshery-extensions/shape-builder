import styled from "styled-components";
// import styled from "@sistent/sistent";

// NOTE: background colors are hardcoded-temporarily for testing

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.body || "#181B1F"};
  color: ${({ theme }) => theme.text || "#ffffff"};
  min-height: 100vh;
`;

export const CanvasContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border || "#24292E"};
  border-radius: 0.75rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.body || "#181B1F"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 520px;
  box-sizing: border-box;
  position: relative;
`;

export const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: 100%;

  rect.grid {
    fill-opacity: 0.1;
  }

  polygon {
    fill: rgba(0, 179, 159, 0.25);
    stroke: ${({ theme }) => theme.primary || "#00B39F"};
    stroke-width: 2;
  }

  line.preview {
    stroke: ${({ theme }) => theme.primary || "#00B39F"};
    stroke-width: 2;
    stroke-dasharray: 4;
  }

  circle {
    r: 3;
    fill: ${({ theme }) => theme.primary || "#00B39F"};
    stroke: #fff;
    stroke-width: 1;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;

  button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .clear-btn {
    background-color: ${({ theme }) => theme.primary || "#00B39F"};
    color: #fff;
    border: none;

    &:hover {
      background-color: ${({ theme }) => theme.primaryDark || "#009684"};
    }
  }

  .close-btn {
    background: transparent;
    color: ${({ theme }) => theme.primary || "#00B39F"};
    border: 1px solid ${({ theme }) => theme.primary || "#00B39F"};

    &:hover {
      color: ${({ theme }) => theme.primaryDark || "#009684"};
      border-color: ${({ theme }) => theme.primaryDark || "#009684"};
    }
  }
`;

export const OutputBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

  h6 {
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    height: 80px;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.border || "#24292E"};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.body || "#181B1F"};
    color: ${({ theme }) => theme.text || "#fff"};
    resize: none;
    font-family: monospace;
    font-size: 0.95rem;
  }

  .error {
    color: red;
    font-weight: bold;
  }
`;

// export const Wrapper = styled.div`
//   padding: 2rem;
//   background-color: ${({ theme }) => theme.palette.background.default};
//   color: ${({ theme }) => theme.palette.text.primary};
//   min-height: 100vh;
// `;

// export const CanvasContainer = styled.div`
//   border: 1px solid ${({ theme }) => theme.palette.border.default};
//   border-radius: 0.75rem;
//   margin-bottom: 2rem;
//   background-color: ${({ theme }) => theme.palette.background.default};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 520px;
//   box-sizing: border-box;
//   position: relative;
// `;

// export const StyledSVG = styled.svg`
//   display: block;
//   width: 100%;
//   height: 100%;

//   rect.grid {
//     fill-opacity: 0.1;
//   }

//   polygon {
//     fill: rgba(0, 179, 159, 0.25);
//     stroke: ${({ theme }) => theme.palette.primary.main};
//     stroke-width: 2;
//   }

//   line.preview {
//     stroke: ${({ theme }) => theme.palette.primary.main};
//     stroke-width: 2;
//     stroke-dasharray: 4;
//   }

//   circle {
//     r: 3;
//     fill: ${({ theme }) => theme.palette.primary.main};
//     stroke: #fff;
//     stroke-width: 1;
//   }
// `;

// export const Controls = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   justify-content: center;

//   button {
//     font-size: 1rem;
//     padding: 0.75rem 1.5rem;
//     border-radius: 0.5rem;
//     cursor: pointer;
//     transition: 0.2s ease-in-out;
//   }

//   .clear-btn {
//     background-color: ${({ theme }) => theme.palette.primary.main};
//     color: ${({ theme }) => theme.palette.text.inverse || "#fff"};
//     border: none;

//     &:hover {
//       background-color: ${({ theme }) => theme.palette.background.brand?.hover || theme.palette.primary.dark};
//     }
//   }

//   .close-btn {
//     background: transparent;
//     color: ${({ theme }) => theme.palette.primary.main};
//     border: 1px solid ${({ theme }) => theme.palette.primary.main};

//     &:hover {
//       color: ${({ theme }) => theme.palette.primary.dark || theme.palette.primary.main};
//       border-color: ${({ theme }) => theme.palette.primary.dark || theme.palette.primary.main};
//     }
//   }
// `;

// export const OutputBox = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   text-align: left;

//   h6 {
//     margin-bottom: 0.75rem;
//     font-weight: 600;
//     font-size: 1rem;
//   }

//   textarea {
//     width: 100%;
//     height: 80px;
//     padding: 1rem;
//     border: 1px solid ${({ theme }) => theme.palette.border.default};
//     border-radius: 0.5rem;
//     background-color: ${({ theme }) => theme.palette.background.default};
//     color: ${({ theme }) => theme.palette.text.primary};
//     resize: none;
//     font-family: monospace;
//     font-size: 0.95rem;
//   }

//   .error {
//     color: ${({ theme }) => theme.palette.error?.main || "red"};
//     font-weight: bold;
//   }
// `;
